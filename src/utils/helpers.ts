import { Linking } from 'react-native'

export const getFormData = (data: object) => {
    const formData = new FormData()
    Object.entries(data).forEach(([key, value]) => {
        if (Array.isArray(value)) {
            value.forEach(item => formData.append(key, item))
            return
        }
        formData.append(key, value)
    })
    return formData
}

export const sortName = (a: { name: string }, b: { name: string }) => {
    if (a.name > b.name) {
        return 1
    }
    if (a.name < b.name) {
        return -1
    }
    return 0
}

export const wait = (millisecond: number = 1000) => {
    return new Promise(resolve => {
        setTimeout(() => resolve(null), millisecond)
    })
}

export const openEmail = (email: string) => () => Linking.openURL('mailto:' + email)

export const distance = (lat1: number, lat2: number, lon1: number, lon2: number) => {
    // The math module contains a function
    // named toRadians which converts from
    // degrees to radians.
    lon1 = (lon1 * Math.PI) / 180
    lon2 = (lon2 * Math.PI) / 180
    lat1 = (lat1 * Math.PI) / 180
    lat2 = (lat2 * Math.PI) / 180

    // Haversine formula
    let dlon = lon2 - lon1
    let dlat = lat2 - lat1
    let a = Math.pow(Math.sin(dlat / 2), 2) + Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin(dlon / 2), 2)

    let c = 2 * Math.asin(Math.sqrt(a))

    // Radius of earth in kilometers. Use 3956
    // for miles
    let r = 6371

    // calculate the result
    return c * r
}
