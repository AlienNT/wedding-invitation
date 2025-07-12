// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: {enabled: true},
    modules: [// 'nuxt-mongoose',
    'nuxt-mail', 'nuxt-countdown', '@vue-email/nuxt'],
    // mongoose: {
    //     uri: process.env.MONGO_DB_URL,
    //     modelsDir: 'server/models',
    // },
    //@ts-ignore
    mail: {
        message: {
            to: process.env.MAIL_TO
        },
        smtp: {
            service: process.env.MAIL_SERVICE,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASSWORD
            }
        }
    }
})