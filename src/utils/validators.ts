export function validator(...validators: ((value: string) => string | void)[]) {
    return (value: string) => {
        for (const fn of validators) {
            const message = fn(value)
            if (message) {
                return message
            }
        }
    }
}

export function required(value: string) {
    if (value === '' || value === null || value === undefined || value.length === 0) {
        return 'Это поле обязательно к заполнению'
    }
}

export function LoginRequired(value: string) {
    if (value === '' || value === null || value === undefined || value.length < 15) {
        return 'Неверный номер телефон'
    }
}

export function requir(value: string) {
    if (value.length < 7) {
        return 'Пароль должен быть не менее 8 символов'
    }
}

export function tel(value: string) {
    if (value.length < 11) {
        return 'Номер должен состоять не менее  11 цифр'
    }
}

export function email(value: string) {
    const regx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const cyrillic = /\p{sc=Cyrillic}/gu
    if (!regx.test(value) || cyrillic.test(value)) {
        return 'Это поле должно быть электронной почтой'
    }
    if (value === '' || value === null || value === undefined || value.length === 0) {
        return 'Это поле обязательно к заполнению'
    }
}

export function minLength(size: number) {
    return (value: string) => {
        if (value.length < size) {
            return 'must be at least {size} characters'.replace('{size}', String(size))
        }
    }
}

export function onlyLetter(value: string) {
    const regx = /^[A-Za-z]+$/
    if (!regx.test(value)) {
        return 'This field only accepts letters'
    }
}

export function onlyNumber(value: string) {
    if (!/^-?\d*(\.\d+)?$/.test(value)) {
        return 'Неверный формат номера'
    }
}

export function onlyTrue(value: boolean) {
    if (!value) {
        return 'This field must be accepted'
    }
}

export function onlyLink(value: string) {
    const urlRegex = /(https?:\/\/[^\s]+)/g

    if (!urlRegex.test(value)) {
        return 'Selected fields only accepts links'
    }
}
