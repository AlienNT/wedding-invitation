import eventConfig from "#shared/utils/eventConfig";
import ru from "~/locales/ru";
import ua from "~/locales/ua";

export function useLocale() {
    const locale = computed(() => {
        switch (eventConfig.LOCALE) {
            case 'ru':
                return ru
            case 'ua':
                return ua
            default:
                return ua
        }
    })

    return {
        locale,
    }
}