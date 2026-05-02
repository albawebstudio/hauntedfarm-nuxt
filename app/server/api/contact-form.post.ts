import type { H3Event } from 'h3'

interface ContactPayload {
  name: string
  subject: string
  email: string
  message: string
}

interface CloudflareSendEmail {
  send: (message: {
    from: string
    to: string | string[]
    subject: string
    text?: string
    html?: string
    replyTo?: string
  }) => Promise<{ messageId: string }>
}

type CloudflareEnv = {
  CONTACT_FORM_EMAIL?: CloudflareSendEmail
  CONTACT_FORM_TO_EMAIL?: string
  CONTACT_FORM_FROM_EMAIL?: string
}

function getCfEnv(event: H3Event): CloudflareEnv {
  return (event.context.cloudflare?.env ?? {}) as CloudflareEnv
}

function resolveSendEmailBinding(event: H3Event): CloudflareSendEmail | undefined {
  const b = getCfEnv(event).CONTACT_FORM_EMAIL
  return b && typeof b.send === 'function' ? b : undefined
}

function resolveContactAddresses(
  event: H3Event,
  runtimeConfig: ReturnType<typeof useRuntimeConfig>,
): { to: string; from: string } {
  const cfEnv = getCfEnv(event)

  const to = (
    (runtimeConfig.contactFormToEmail as string | undefined)?.trim() ||
    cfEnv.CONTACT_FORM_TO_EMAIL?.trim() ||
    ''
  )

  const from = (
    (runtimeConfig.contactFormFromEmail as string | undefined)?.trim() ||
    cfEnv.CONTACT_FORM_FROM_EMAIL?.trim() ||
    ''
  )

  return { to, from }
}

const MAX_LEN = {
  name: 200,
  subject: 300,
  email: 320,
  message: 10_000,
} as const

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function normalizePayload(raw: unknown): ContactPayload | null {
  if (raw === null || raw === undefined) {
    return null
  }

  let obj: Record<string, unknown>

  if (typeof raw === 'string') {
    try {
      const parsed = JSON.parse(raw) as unknown
      if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) {
        return null
      }
      obj = parsed as Record<string, unknown>
    } catch {
      return null
    }
  } else if (typeof raw === 'object' && !Array.isArray(raw)) {
    obj = raw as Record<string, unknown>
  } else {
    return null
  }

  const name = typeof obj.name === 'string' ? obj.name.trim() : ''
  const subject = typeof obj.subject === 'string' ? obj.subject.trim() : ''
  const email = typeof obj.email === 'string' ? obj.email.trim() : ''
  const message = typeof obj.message === 'string' ? obj.message.trim() : ''

  if (!name || !subject || !email || !message) {
    return null
  }

  if (
    name.length > MAX_LEN.name ||
    subject.length > MAX_LEN.subject ||
    email.length > MAX_LEN.email ||
    message.length > MAX_LEN.message
  ) {
    return null
  }

  if (!EMAIL_RE.test(email)) {
    return null
  }

  return { name, subject, email, message }
}

function buildPlainText(p: ContactPayload): string {
  return [
    `Name: ${p.name}`,
    `Email: ${p.email}`,
    `Subject: ${p.subject}`,
    '',
    p.message,
  ].join('\n')
}

function buildHtml(p: ContactPayload): string {
  const n = escapeHtml(p.name)
  const e = escapeHtml(p.email)
  const s = escapeHtml(p.subject)
  const m = escapeHtml(p.message).replace(/\r?\n/g, '<br>')
  return `<p><strong>Name:</strong> ${n}<br><strong>Email:</strong> ${e}<br><strong>Subject:</strong> ${s}</p><p>${m}</p>`
}

export default defineEventHandler(async (event) => {
  const runtimeConfig = useRuntimeConfig(event)
  const { to, from } = resolveContactAddresses(event, runtimeConfig)

  if (!to || !from) {
    console.error(
      '[contact-form] Missing to/from addresses. '
        + `to=${JSON.stringify(to)} from=${JSON.stringify(from)}. `
        + 'Ensure CONTACT_FORM_TO_EMAIL and CONTACT_FORM_FROM_EMAIL secrets are set for both '
        + 'Production and Preview environments in the Cloudflare Pages dashboard.',
    )
    throw createError({
      statusCode: 503,
      statusMessage: 'Contact form email is not configured',
    })
  }

  const rawBody = await readBody(event)
  const payload = normalizePayload(rawBody)
  if (!payload) {
    throw createError({ statusCode: 400, statusMessage: 'Invalid form data' })
  }

  const binding = resolveSendEmailBinding(event)

  if (!binding) {
    throw createError({
      statusCode: 503,
      statusMessage: 'Email service is unavailable',
    })
  }

  try {
    await binding.send({
      from,
      to,
      replyTo: payload.email,
      subject: `[Haunted Farm contact] ${payload.subject}`,
      text: buildPlainText(payload),
      html: buildHtml(payload),
    })
  } catch (err) {
    console.error('[contact-form] send failed', err)
    throw createError({
      statusCode: 502,
      statusMessage: 'Failed to send email',
    })
  }

  return { success: true }
})
