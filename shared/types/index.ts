export interface MailMessageInterface {
    names: string,
    isCanBePresent: boolean,
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