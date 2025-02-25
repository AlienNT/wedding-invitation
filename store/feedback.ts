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
                title: 'Зможу / зможемо бути присутнім'
            },
            {
                _id: '2',
                value: 'unknown',
                title: 'Важко відповісти, повідомлю пізніше'
            },
            {
                _id: '3',
                value: 'no',
                title: 'Не зможу прийти'
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
    const option = computed(() => {
        return state.radio.options.find((option) => option._id === selectedOptionId.value)
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

        return new Promise(async (resolve, reject) => {
            try {
                await useMail().send({
                    from: feedbackFormData.value.names,
                    subject: title,
                    html: message ? message : await useMailMessage().createMessage({
                        ...feedbackFormData.value,
                        option: option.value
                    }),
                })
                resolve(true)

            } catch (e) {
                console.log('error', e)
                reject(e)
            }
        })
    }

    function setSelectedOption(selectedOptionId: Id) {
        const selectedOption = state
            .radio
            .options
            .find(({_id}) => selectedOptionId === _id)

        if (!selectedOption) return

        state.radio.selectedOption = selectedOptionId
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