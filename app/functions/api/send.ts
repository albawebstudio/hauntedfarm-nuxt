import { sendContactEmail, type ContactEmailPayload } from '../../shared/send-contact-email'

type SendEnv = {
  RESEND_API_KEY: string
  RESEND_TEMPLATE_ID: string
}

export async function onRequestPost(context: {
  request: Request
  env: SendEnv
}): Promise<Response> {
  let body: ContactEmailPayload

  try {
    body = await context.request.json() as ContactEmailPayload
  } catch {
    return Response.json({ success: false, message: 'Invalid JSON body' }, { status: 400 })
  }

  const result = await sendContactEmail(
    context.env.RESEND_API_KEY,
    context.env.RESEND_TEMPLATE_ID,
    body,
  )

  if (!result.success) {
    return Response.json({ success: false, message: result.message }, { status: 500 })
  }

  return Response.json({ success: true, data: result.data })
}
