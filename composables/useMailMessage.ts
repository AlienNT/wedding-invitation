import {h} from "vue";
import {renderToString} from "@vue/server-renderer";
import MailMassage from "~/components/mailMessage/MailMassage.vue";
import type {FeedbackMessageInterface} from "~/store/feedback";

export function useMailMessage() {
    async function createMessage({names, isNeedHotel, isCanBePresent}: FeedbackMessageInterface): Promise<string> {
        return await renderToString(h(
            MailMassage,
            {
                names,
                isNeedHotel,
                isCanBePresent
            }
        ))
    }

    function toHTML(string: string) {
        const div = document.createElement("div");
        div.innerHTML = string;
        const res = div;
        div.remove();

        return res;
    }

    return {
        createMessage,
        toHTML
    }
}