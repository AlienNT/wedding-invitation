import type {LocaleInterface} from "#shared/types/locale";

export const locale: LocaleInterface = {
    newlyweds: {
        husband: 'Андрей',
        and: 'и',
        wife: 'Алина'
    },
    invite: {
        title: 'приглашаем на нашу свадьбу!',
    },
    countdown: {
        title: 'До свадьбы осталось',
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
        description: 'Подтвердите свое присутствие и ответьте на несколько вопросов. Это поможет в организации торжества! Будем ждать ваш ответ до 01.09.2024',
        buttonTitle: 'Отправить'
    },
    footer: {
        title: 'Будем вас ждать!',
        description: 'По всем интересующим вас вопросам вы можете связаться с нашим свадебным организатором'
    }
}

export default locale;