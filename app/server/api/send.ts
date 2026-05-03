import { Resend } from 'resend';

export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig(event);
    const resend = new Resend(config.resendApiKey);
    const templateId = config.public.resendTemplateId;

    const body = await readBody(event);

    const response = await resend.emails.send({
        from: 'HauntedFarm <andrew@omens.hauntedfarm.com>',
        to: ['support@hauntedfarm.com'],
        subject: body.subject ?? 'New Contact Form Submission',
        template: {
            id: templateId,
            variables: {
                name: body.name,
                email: body.email,
                phone: body.phone,
                messageBody: body.messageBody,
                subject: body.subject,
                formType: body.formType,
            },
        },
    });

    if (response.error) {
        throw createError({
            statusCode: 500,
            message: response.error.message ?? 'Error sending email',
        });
    }

    return { success: true, data: response.data };
});
