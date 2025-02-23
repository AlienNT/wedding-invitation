// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: {enabled: true},
    modules: ['nuxt-mongoose', 'nuxt-mail', 'nuxt-countdown'],
    mongoose: {
        uri: process.env.MONGO_DB_URL
    },
    //@ts-ignore
    mail: {
        message: {
            to: 'nick.tristen22@gmail.com'
        },
        smtp: {
            service: 'gmail',
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASSWORD
            }
        }
    }
})