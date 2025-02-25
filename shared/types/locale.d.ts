import type {LocationInterface} from "~/store/location";

interface ScreenInterface {
    title: string,
}

interface LocaleInterface {
    newlyweds: {
        husband: string,
        and: string
        wife: string
    },
    invite: ScreenInterface,
    countdown: ScreenInterface,
    dayProgram: ScreenInterface,
    location: LocationInterface & ScreenInterface & {
        buttonTitle: string
    },
    presence: ScreenInterface & {
        description: string,
        buttonTitle: string
    },
    footer: ScreenInterface & {
        description: string,
    }
}
