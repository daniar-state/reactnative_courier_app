export const resetPassword = async (email: any) => {
    const url = 'http://92.51.39.155'

    const headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }

    const body = {
        email,
    }

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers,
            body: JSON.stringify(body),
        })

        const data = await response.json()

        return [data, null]
    } catch (error) {
        console.error(error)
        return [null, error]
    }
}
