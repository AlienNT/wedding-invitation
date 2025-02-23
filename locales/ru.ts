import type {LocationInterface} from "~/store/location";

export interface ScreenInterface {
    title: string,
}

export interface ContactInterface {
    value: string,
    title: string,
}

export interface LocaleInterface {
    newlyweds: {
        husband: {
            name: string
        },
        wife: {
            name: string
        }
    },
    invite: ScreenInterface & {
        date: string,
        time: string
    },
    countdown: ScreenInterface & {
        date: (date: string, time: string) => Date,
    },
    dayProgram: ScreenInterface,
    location: LocationInterface & ScreenInterface & {
        buttonTitle: string
    },
    presence: ScreenInterface & {
        description: string
    },
    footer: ScreenInterface & {
        description: string,
        contacts: ContactInterface[]
    }
}

export const locale: LocaleInterface = {
    newlyweds: {
        husband: {
            name: 'Андрей'
        },
        wife: {
            name: 'Алина'
        }
    },
    invite: {
        title: 'приглашаем на нашу свадьбу!',
        date: '2025-05-04',
        time: '15:30',
    },
    countdown: {
        title: 'До свадьбы осталось',
        date: (date, time) => {
            console.log({date, time})
            return new Date(date + ' ' + time)
        },
    },
    dayProgram: {
        title: 'Программа дня'
    },
    location: {
        title: 'Локация',
        name: 'Bellagio banquet hall',
        address: 'г. Краматорск, ул. Софиевская 1/1',
        link: '',
        buttonTitle: 'Перейти на карту'
    },
    presence: {
        title: 'Ваше присутствие',
        description: 'Подтвердите свое присутствие и ответьте на несколько вопросов. Это поможет в организации торжества! Будем ждать ваш ответ до 01.09.2024'
    },
    footer: {
        title: 'Будем вас ждать!',
        contacts: [
            {
                value: 'tel:+380950000000',
                title: '+380950000000'
            }
        ],
        description: 'По всем интересующим вас вопросам вы можете связаться с нашим свадебным организатором, Елена:\n'
    }
}

export default locale;