export function isNotEmpty<T>(value: T) {
    return value ? value.toString().trim().length > 0 : false;
}

export function getKeys<T>(object: T) {
    if (typeof object !== 'object' || !object) return [];
    return Object.keys(object).map(key => key as keyof T);
}