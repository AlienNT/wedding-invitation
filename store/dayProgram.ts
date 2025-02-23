import type {ProgramItemInterface} from "#shared/types";

const state = reactive({
    programList: [
        {
            _id: '1',
            time: '15:30',
            title: 'Сбор гостей',
            description: 'Подарите на свою улыбку и возьмите с собой хорошее настроение',
            icon: 'assets/icons/pointer.svg',
            className: 'point'
        },
        {
            _id: '2',
            time: '16:00',
            title: 'Церемония',
            description: 'Может быть трогательно, разрешается всплакнуть',
            icon: 'public/icons/wedding.svg',
            className: 'ceremony'
        },
        {
            _id: '3',
            time: '17:00',
            title: 'Банкет',
            description: 'Самое время для вкусной еды, танцев и развлечений',
            icon: 'public/icons/wine.svg',
            className: 'banquet'
        },
        {
            _id: '4',
            time: '23:00',
            title: 'Завершение торжества',
            description: 'Надеемся, этот вечер вам понравится',
            icon: 'public/icons/fireworks.svg',
            className: 'end'
        },
    ] as ProgramItemInterface[],
})

export function useDayProgram() {
    const programList = computed(() => {
        return state.programList;
    });

    return {
        programList,
    }
}