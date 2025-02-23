import {useMail, useMailMessage} from "#imports";

type Id = string
type CanBePresent = 'yes' | 'no' | 'unknown'

export interface RadioSelectorOptionInterface {
    _id: Id
    title: string,
    value: CanBePresent,
}

export interface RadioSelectorInterface {
    selectedOption: Id | undefined,
    options: RadioSelectorOptionInterface[],
}

export interface FeedbackMessageInterface {
    names: string,
    isCanBePresent: CanBePresent,
    isNeedHotel: string,
}

const state = reactive({
    radio: {
        selectedOption: undefined as unknown as Id,
        options: [
            {
                _id: '1',
                value: 'yes',
                title: 'Смогу / сможем присутствовать'
            },
            {
                _id: '2',
                value: 'unknown',
                title: 'Затрудняюсь ответить, сообщу позже'
            },
            {
                _id: '3',
                value: 'no',
                title: 'Не смогу прийти'
            },
        ],
    } as RadioSelectorInterface,
    feedbackFormData: {
        names: undefined as unknown as string,
        isCanBePresent: undefined as unknown as CanBePresent,
        isNeedHotel: undefined as unknown as string
    } as FeedbackMessageInterface
})

export function useFeedback() {
    const selectedOptionId = computed(() => {
        return state.radio.selectedOption
    })
    const options = computed(() => {
        return state.radio.options
    })
    const feedbackFormData = computed(() => {
        return state.feedbackFormData
    })

    async function sendFeedback(
        {
            title = 'Ответ на приглашение',
            message
        }: {
            title?: string,
            message?: HTMLElement
        }) {

        const {createMessage} = useMailMessage()
        const mail = useMail()
        const msg = message ? message : await createMessage(feedbackFormData.value)

        return mail.send({
            from: feedbackFormData.value.names,
            subject: title,
            html: msg,
        })
    }

    function setSelectedOption(selectedOptionId: Id) {
        state.radio.selectedOption = selectedOptionId
        const selectedOption: RadioSelectorOptionInterface | undefined = state.radio.options.find(({_id}) => selectedOptionId === _id)
        if (!selectedOption) return
        state.feedbackFormData.isCanBePresent = selectedOption.value
    }

    return {
        selectedOptionId,
        options,
        feedbackFormData,
        sendFeedback,
        setSelectedOption
    }
}