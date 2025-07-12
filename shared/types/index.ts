import type {RadioSelectorOptionInterface} from "~/store/feedback";

export interface MailMessageInterface {
    names: string,
    isCanBePresent: RadioSelectorOptionInterface,
    isNeedHotel: string,
}

export interface ProgramItemInterface {
    _id: string;
    time: string;
    title: string;
    description: string;
    icon?: any;
    className: 'point' | 'ceremony' | 'banquet' | 'end'
}