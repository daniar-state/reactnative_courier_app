// import AsyncStorage from '@react-native-community/async-storage'
// import { createSlice, PayloadAction } from '@reduxjs/toolkit'
// import { PersistConfig, persistReducer } from 'redux-persist'
// // @ts-ignore
// import { createBlacklistFilter } from 'redux-persist-transform-filter'
// import {
//     changeLocation,
//     changeUserInfo,
//     checkEmailAction,
//     createBirthday,
//     firstJoin,
//     getSubscriptionInfoAction,
//     loginUser,
//     registerProWithSocial,
//     removeTokenAction,
//     removeUserAction,
//     removeUserInfo,
//     resetPasswordAction,
//     sendResetPasswordAction,
//     setAccountRemoverAction,
//     setBirthdaySuccess,
//     setProReminderAction,
//     setReferral,
//     setRefreshTokenAction,
//     setUserCategories,
//     setUserOnboarding,
//     setUserVerification,
//     signOutUser,
//     signUpUser,
//     switchAccountAction,
//     verifyUser,
//     // @ts-ignore
// } from 'state/user/actions'
// // @ts-ignore
// import { UserState } from 'state/user/types'
// // @ts-ignore
// import { ICategory, ILocation, ISubscriptionInfo, ITokens, IUser, IUserDetail, IVerifyUser } from 'types/data'
// // @ts-ignore
// import { displayName } from 'utils/helpers'
// import { userType } from './action'

// export const initialStateUser: UserState = {
//     user: null,
//     subscriptionInfo: null,
//     userType: false,
//     firstJoin: true,
//     location: null,
//     loading: false,
//     wrongToken: false,
//     resetPasswordLoading: false,
//     removeUserLoading: false,
//     checkEmailLoading: false,
//     onboarding: {
//         continue: true,
//         navigationStack: {
//             routes: [],
//             index: 0,
//         },
//     },
//     switchLoading: false,
//     showReminder: true,
//     birthdaySuccess: false,
//     removeAccount: false,
//     referral: null,
//     subscriptionInfoLoading: false,
// }

// const userSlice = createSlice({
//     name: 'user',
//     initialState: initialStateUser,
//     reducers: {},
//     extraReducers: {
//         [signOutUser.type]: state => {
//             state.user = null
//             state.loading = false
//             // state.firstJoin = true
//             state.onboarding = {
//                 navigationStack: {
//                     index: 0,
//                     routes: [],
//                 },
//                 continue: true,
//             }
//             state.showReminder = true
//         },
//         [userType.type]: (state, action: PayloadAction<boolean>) => {
//             state.userType = action.payload
//         },
//         [removeUserInfo.type]: state => {
//             state.user = null
//             state.loading = false
//             state.onboarding = {
//                 navigationStack: {
//                     index: 0,
//                     routes: [],
//                 },
//                 continue: false,
//             }
//             state.showReminder = true
//         },
//         [changeLocation.type]: (state, action: PayloadAction<ILocation>) => {
//             state.location = action.payload
//         },
//         [firstJoin.type]: state => {
//             state.firstJoin = false
//         },
//         [setRefreshTokenAction.type]: (state, action: PayloadAction<ITokens>) => {
//             if (state.user) {
//                 state.user.accessToken = action.payload.accessToken
//                 state.user.refreshToken = action.payload.refreshToken
//             }
//         },
//         [setUserOnboarding.type]: (state, action: PayloadAction<UserState['onboarding']>) => {
//             state.onboarding = action.payload
//         },
//         [setBirthdaySuccess.type]: (state, action: PayloadAction<boolean>) => {
//             state.birthdaySuccess = action.payload
//         },
//         [setReferral.type]: (state, action: PayloadAction<string>) => {
//             state.referral = action.payload
//         },
//         [setUserCategories.type]: (state, action: PayloadAction<ICategory[]>) => {
//             if (state.user) {
//                 state.user.categories = action.payload
//             }
//         },
//         [setProReminderAction.type]: (state, action: PayloadAction<boolean>) => {
//             state.showReminder = action.payload
//         },
//         [setAccountRemoverAction.type]: (state, action: PayloadAction<boolean>) => {
//             state.removeAccount = action.payload
//         },
//         [changeUserInfo.type]: (state, action: PayloadAction<IUserDetail>) => {
//             if (state.user) {
//                 state.user = {
//                     ...state.user,
//                     firstName: action.payload.firstName,
//                     lastName: action.payload.lastName,
//                     role: action.payload.role,
//                     name: displayName(action.payload.firstName, action.payload.lastName),
//                 }
//             }
//         },
//         [setUserVerification.type]: (state, action: PayloadAction<{ phone: string; phoneCode?: string }>) => {
//             if (state.user) {
//                 state.user = {
//                     ...state.user,
//                     phone: action.payload.phone,
//                     phoneCode: action.payload.phoneCode,
//                     isVerified: true,
//                 }
//             }
//         },

//         [loginUser.fulfilled.type]: (state, action: PayloadAction<IUser>) => {
//             state.user = action.payload
//             state.firstJoin = false
//             state.loading = false
//             state.referral = null
//         },
//         [loginUser.pending.type]: state => {
//             state.loading = true
//         },
//         [loginUser.rejected.type]: state => {
//             state.loading = false
//         },

//         [verifyUser.fulfilled.type]: (state, action: PayloadAction<IVerifyUser>) => {
//             state.loading = false
//             if (state.user) {
//                 state.user.isVerified = action.payload.result
//             }
//         },
//         [verifyUser.rejected.type]: state => {
//             state.loading = false
//         },
//         [verifyUser.pending.type]: state => {
//             state.loading = true
//         },

//         [signUpUser.pending.type]: state => {
//             state.loading = true
//         },
//         [signUpUser.fulfilled.type]: (state, action: PayloadAction<IUser>) => {
//             //@ts-ignore
//             if (action.payload.role === UserRoleEnum.PRO) {
//                 state.location = null
//             }
//             state.user = action.payload
//             state.firstJoin = false
//             state.loading = false
//             state.referral = null
//         },
//         [signUpUser.rejected.type]: state => {
//             state.loading = false
//         },

//         [registerProWithSocial.pending.type]: state => {
//             state.loading = true
//         },
//         [registerProWithSocial.fulfilled.type]: state => {
//             state.location = null
//             state.firstJoin = false
//             state.loading = false
//             state.referral = null
//         },
//         [registerProWithSocial.rejected.type]: state => {
//             state.loading = false
//         },

//         [createBirthday.pending.type]: state => {
//             state.loading = true
//         },
//         [createBirthday.fulfilled.type]: state => {
//             state.birthdaySuccess = true
//             state.loading = false
//         },
//         [createBirthday.rejected.type]: state => {
//             state.loading = false
//         },

//         [sendResetPasswordAction.pending.type]: state => {
//             state.resetPasswordLoading = true
//         },
//         [sendResetPasswordAction.fulfilled.type]: state => {
//             state.resetPasswordLoading = false
//         },
//         [sendResetPasswordAction.rejected.type]: state => {
//             state.resetPasswordLoading = false
//         },

//         [resetPasswordAction.pending.type]: state => {
//             state.resetPasswordLoading = true
//         },
//         [resetPasswordAction.fulfilled.type]: state => {
//             state.resetPasswordLoading = false
//         },
//         [resetPasswordAction.rejected.type]: state => {
//             state.resetPasswordLoading = false
//         },

//         [removeTokenAction.pending.type]: state => {
//             state.removeUserLoading = true
//         },
//         [removeTokenAction.fulfilled.type]: state => {
//             state.removeUserLoading = false
//             state.user = null
//             // state.firstJoin = true
//         },

//         [removeUserAction.pending.type]: state => {
//             state.removeUserLoading = true
//         },
//         [removeUserAction.fulfilled.type]: state => {
//             state.removeUserLoading = false
//             state.user = null
//             // state.firstJoin = true
//         },
//         [removeUserAction.rejected.type]: state => {
//             state.removeUserLoading = false
//         },

//         [removeTokenAction.rejected.type]: state => {
//             state.removeUserLoading = false
//         },

//         [checkEmailAction.pending.type]: state => {
//             state.checkEmailLoading = true
//         },
//         [checkEmailAction.fulfilled.type]: state => {
//             state.checkEmailLoading = false
//         },
//         [checkEmailAction.rejected.type]: state => {
//             state.checkEmailLoading = false
//         },

//         [switchAccountAction.pending.type]: state => {
//             state.switchLoading = true
//         },
//         [switchAccountAction.fulfilled.type]: (state, action: PayloadAction<{ user: IUser }>) => {
//             state.switchLoading = false
//             state.user = action.payload.user
//         },
//         [switchAccountAction.rejected.type]: state => {
//             state.switchLoading = false
//         },

//         [getSubscriptionInfoAction.pending.type]: state => {
//             state.subscriptionInfoLoading = true
//         },
//         [getSubscriptionInfoAction.fulfilled.type]: (state, action: PayloadAction<ISubscriptionInfo>) => {
//             state.subscriptionInfoLoading = false
//             state.subscriptionInfo = action.payload
//         },
//         [getSubscriptionInfoAction.rejected.type]: state => {
//             state.subscriptionInfoLoading = false
//         },
//     },
// })

// const tokensBlacklistFilter = createBlacklistFilter('user', ['refreshToken', 'accessToken'])

// const persistConfig: PersistConfig<UserState> = {
//     key: 'auth',
//     storage: AsyncStorage,
//     whitelist: [
//         'user',
//         'location',
//         'firstJoin',
//         'onboarding',
//         'showReminder',
//         'birthdaySuccess',
//         'removeAccount',
//         'subscriptionInfo',
//         'userType',
//     ],
//     transforms: [tokensBlacklistFilter],
// }

// export const userReducer = persistReducer(persistConfig, userSlice.reducer)

import AsyncStorage from '@react-native-community/async-storage'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PersistConfig, persistReducer } from 'redux-persist'
import { IRegistr, IRole } from '../../types/data'
import { userTypeEnum } from '../../enums'

import { postRole, registerAction, setInputDisable, signOutUser, userType } from './action'
import { UserState } from './types'

export const initialStateUser: UserState = {
    typeInUser: false,
    searchInput: false,
    loading: false,
    accessToken: null,
    role: userTypeEnum.CLIENT,
}

const userSlice = createSlice({
    name: 'user',
    initialState: initialStateUser,
    reducers: {},
    extraReducers: {
        [signOutUser.type]: state => {
            state.accessToken = null
        },

        [userType.type]: (state, action: PayloadAction<boolean>) => {
            state.typeInUser = action.payload
        },
        [setInputDisable.type]: (state, action: PayloadAction<boolean>) => {
            state.searchInput = action.payload
        },

        [registerAction.fulfilled.type]: (state, action: PayloadAction<IRegistr>) => {
            // state.token = action.payload
            state.loading = false
            state.accessToken = action.payload.accessToken
        },
        [registerAction.pending.type]: state => {
            state.loading = true
        },
        [registerAction.rejected.type]: state => {
            state.loading = false
        },

        [postRole.fulfilled.type]: (state, action: PayloadAction<IRole>) => {
            state.loading = false
            state.role = action.payload.role
        },
        [postRole.pending.type]: state => {
            state.loading = true
        },
        [postRole.rejected.type]: state => {
            state.loading = false
        },
    },
})

const persistConfig: PersistConfig<UserState> = {
    key: 'auth',
    storage: AsyncStorage,
    whitelist: ['user', 'accessToken', 'refreshToken', 'registerClient'],
}

export const userReducer = persistReducer(persistConfig, userSlice.reducer)
