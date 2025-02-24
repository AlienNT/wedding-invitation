export interface ContactInterface {
    value: string,
    title: string,
}

const state = reactive({
    contacts: [
        {
            value: 'tel:+380950000000',
            title: '+380950000000'
        }
    ] as ContactInterface[],
})

export function useContacts() {
    const contacts = computed(() => {
        return state.contacts
    })

    return {
        contacts
    }
}