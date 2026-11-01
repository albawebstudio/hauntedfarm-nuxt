import { Resend } from 'resend'

export type ContactEmailPayload = {
  name?: string
  email?: string
  phone?: string
  message?: string
  subject?: string
  formType?: string
  currentYear?: number
}

export type SendContactEmailResult =
  | { success: true; data: unknown }
  | { success: false; message: string }

export async function sendContactEmail(
  apiKey: string,
  templateId: string,
  body: ContactEmailPayload,
): Promise<SendContactEmailResult> {
  if (!apiKey || !templateId) {
    return { success: false, message: 'Email service is not configured' }
  }

  const resend = new Resend(apiKey)

  const response = await resend.emails.send({
    from: 'HauntedFarm <support@omens.hauntedfarm.com>',
    to: ['support@hauntedfarm.com'],
    replyTo: body.email,
    subject: body.subject ?? 'New Contact Form Submission',
    template: {
      id: templateId,
      variables: {
        name: body.name,
        email: body.email,
        phone: body.phone,
        messageBody: body.message,
        subject: body.subject,
        formType: body.formType,
        currentYear: new Date().getFullYear(),
      },
    },
  })

  if (response.error) {
    return {
      success: false,
      message: response.error.message ?? 'Error sending email',
    }
  }

  return { success: true, data: response.data }
}
