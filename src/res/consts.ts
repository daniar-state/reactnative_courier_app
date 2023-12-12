import { Dimensions, Platform } from 'react-native'
import Config from 'react-native-config'

export const API_BASE_URL = Config.API_BASE_URL || 'http://92.51.39.155/'

export const BASE_URL = Config.BASE_URL || 'http://92.51.39.155/'

// API list
// export const API_BASE_URL = Config.API_BASE_URL

export const API_PATH_REGISTER = 'api/v1/auth/register'
export const API_PATH_CONFIRM_CODE = 'api/v1/auth/confirm'
export const API_PATH_LOGIN = 'api/v1/auth/login'
export const API_PATH_ROLE = 'api/v1/auth/role'
export const API_PATH_CLIENT_SETTING = 'api/v1/customer/settings'
export const API_PATH_RESET_PASSWORD = 'api/v1/auth/forgot'

//Device
export const IS_ANDROID = Platform.OS === 'android'
export const IS_IOS = !IS_ANDROID

export const SCREEN_WIDTH = Dimensions.get('window').width
export const SCREEN_HEIGHT = Dimensions.get('window').height
