export interface LocationInterface {
    name: string;
    address: string;
    link?: string;
}

const state = reactive({
    name: 'Bellagio banquet hall',
    address: 'г. Краматорск, ул. Софиевская 1/1',
    link: '',
} as LocationInterface);

export function useLocation() {
    const name = computed(() => {
        return state.name
    });
    const address = computed(() => {
        return state.address
    });
    const link = computed(() => {
        return state.link
    });

    return {
        address,
        name,
        link
    }
}