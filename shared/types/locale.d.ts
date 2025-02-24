import type {LocationInterface} from "~/store/location";

interface ScreenInterface {
    title: string,
}

interface LocaleInterface {
    newlyweds: {
        husband: {
            name: string
        },
        and: string
        wife: {
            name: string
        }
    },
    invite: ScreenInterface,
    countdown: ScreenInterface,
    dayProgram: ScreenInterface,
    location: LocationInterface & ScreenInterface & {
        buttonTitle: string
    },
    presence: ScreenInterface & {
        description: string
    },
    footer: ScreenInterface & {
        description: string,
    }
}
