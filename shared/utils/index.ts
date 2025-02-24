
export function isNotEmpty<T>(value: T) {
    return value ? value.toString().trim().length > 0 : false;
}

export function getKeys<T>(object: T) {
    if (typeof object !== 'object' || !object) return [];
    return Object.keys(object).map(key => key as keyof T);
}

export function getDate(date: string, time: string) {
    return new Date(date + ' ' + time)
}

export function displayedDate(date: string, locales: Intl.LocalesArgument = 'uk-UA') {
    const toDate = new Date(date);

    return toDate.toLocaleDateString(locales, {
        month: "long",
        day: "numeric",
        year: "numeric",
    })
}
