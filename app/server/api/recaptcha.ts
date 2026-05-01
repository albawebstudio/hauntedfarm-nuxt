export default defineEventHandler(async (event) => {
    const runtimeConfig = useRuntimeConfig(event)
    const body = await readBody(event)

    return await $fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${runtimeConfig.recaptchaSecretKey}&response=${body.token}`, {
        method: 'POST',
    })
})
