import {h} from "vue";
import {renderToString} from "@vue/server-renderer";
import MailMessage from "~/components/mailMessage/MailMessage.vue";
import type {FeedbackMessageInterface, RadioSelectorOptionInterface} from "~/store/feedback";

export function useMailMessage() {
    async function createMessage(
        {
            names,
            isNeedHotel,
            isCanBePresent,
            option
        }: FeedbackMessageInterface & {
            option?: RadioSelectorOptionInterface
        }): Promise<string> {

        return await renderToString(h(
            MailMessage,
            {
                names,
                isNeedHotel,
                isCanBePresent,
                option
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