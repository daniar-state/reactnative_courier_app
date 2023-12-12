import axios from 'axios'
import humps from 'humps'
import { Platform } from 'react-native'
import DeviceInfo from 'react-native-device-info'
import R from '../res'
import { store } from '../state'

export const defaultHeader = {
    'X-Hardware-Id': DeviceInfo.getUniqueId(),
    'X-Platform': Platform.OS,
    'X-App-Version': DeviceInfo.getVersion(),
}

export const getDefaultHeader = async () => {
    const HARDWARE_ID = await DeviceInfo.getUniqueId()

    return {
        'X-Hardware-Id': HARDWARE_ID,
        'X-Platform': Platform.OS,
        'X-App-Version': DeviceInfo.getVersion(),
    }
}

const apiClient = axios.create({
    baseURL: R.consts.API_BASE_URL,
    // @ts-ignore
    transformResponse: [...axios.defaults.transformResponse, humps.camelizeKeys],
    // @ts-ignore
    transformRequest: [decamelize, ...axios.defaults.transformRequest],
})
//@ts-ignore
apiClient.interceptors.request.use(async (config: AxiosRequestConfig) => {
    const accessToken = store.getState().user?.accessToken
    config.headers = { ...(config.headers || {}), ...(await getDefaultHeader()) }

    if (accessToken) {
        config.headers.authorization = `Bearer ${accessToken}`
    }

    return config
})

// apiClient.interceptors.response.use(
//   response => response,
//   async error => {
//     const originalRequest = error.config
//
//     if (
//       error.response.data.message === apiErrorMessagesEnums.ACCOUNT_NOT_FOUND
//     ) {
//       return store.dispatch(signOutUser())
//     }
//
//     if (error.response.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true
//       const state = store.getState() as RootState
//       const tokens = await TokenManger.get()
//       const role = state.user.user?.role
//
//       if (tokens?.refreshToken?.token) {
//         const { data: response } = await axios.post<ITokens>(
//           API_BASE_URL + API_PATH_REFRESH_TOKEN,
//           {
//             role,
//             token: tokens.refreshToken.token,
//           },
//         )
//
//         if (response) {
//           await TokenManger.set(response)
//           store.dispatch(setRefreshTokenAction(response))
//           return apiClient(originalRequest)
//         }
//
//         return store.dispatch(signOutUser())
//       }
//     }
//
//     return Promise.reject(error)
//   },
// )

function decamelize(object: any) {
    // @ts-ignore
    if (!(object && !(object instanceof File))) {
        return object
    }

    if (object instanceof FormData) {
        return object
    }

    if (typeof object === 'object') {
        return humps.decamelizeKeys(object)
    }
}

export default apiClient
