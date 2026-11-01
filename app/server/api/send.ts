import { sendContactEmail, type ContactEmailPayload } from '../../shared/send-contact-email'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event)
  const body = await readBody<ContactEmailPayload>(event)

  const result = await sendContactEmail(
    config.resendApiKey,
    config.public.resendTemplateId,
    body,
  )

  if (!result.success) {
    throw createError({
      statusCode: 500,
      message: result.message,
    })
  }

  return { success: true, data: result.data }
})
