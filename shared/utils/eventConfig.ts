export default {
    DATE: process.env.VITE_EVENT_DATE || import.meta.env.VITE_EVENT_DATE || '',
    TIME: process.env.VITE_EVENT_TIME || import.meta.env.VITE_EVENT_TIME || '',
    LOCALE: process.env.VITE_EVENT_LOCALE || import.meta.env.VITE_EVENT_LOCALE || 'ua' as 'ru' | 'ua',
}