import type {ProgramItemInterface} from "#shared/types";

const state = reactive({
    programList: [
        {
            _id: '1',
            time: '15:30',
            title: 'Збір гостей',
            description: 'Подаруйте на свою посмішку та візьміть із собою гарний настрій',
            icon: 'assets/icons/pointer.svg',
            className: 'point'
        },
        {
            _id: '2',
            time: '16:00',
            title: 'Церемонія',
            description: 'Може бути зворушливо, дозволяється сплакати',
            icon: 'public/icons/wedding.svg',
            className: 'ceremony'
        },
        {
            _id: '3',
            time: '17:00',
            title: 'Банкет',
            description: 'Саме час для смачної їжі, танців та розваг',
            icon: 'public/icons/wine.svg',
            className: 'banquet'
        },
        {
            _id: '4',
            time: '23:00',
            title: 'Завершення урочистостей',
            description: 'Сподіваємось, цей вечір вам сподобається',
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