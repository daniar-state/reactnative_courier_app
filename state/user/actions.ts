// import { createAction, createAsyncThunk } from '@reduxjs/toolkit'
// // @ts-ignore
// import apiClient from 'api/instance'
// // @ts-ignore
// import { getProProcessApi } from 'api/proOnboardingApi'
// // @ts-ignore
// import R from 'res'
// // @ts-ignore
// import { UserState } from 'state/user/types'
// // @ts-ignore
// import { getUserDetailAction } from 'state/userDetail/actions'
// // @ts-ignore
// import { ICategory, IUser } from 'types/data'

// export const signOutUser = createAction('user/signOut')
// export const removeUserInfo = createAction('user/removeUserInfo')
// export const firstJoin = createAction('user/firstJoin')
// export const setUserOnboarding = createAction<UserState['onboarding']>('user/onboarding/set')
// export const setReferral = createAction<string>('user/setReferral')
// export const setProReminderAction = createAction<boolean>('user/proReminder')
// export const setAccountRemoverAction = createAction<boolean>('user/accountRemover')
// export const setUserCategories = createAction<ICategory[]>('user/changeCategories')
// export const confirmOnBoarding = createAction<boolean>('user/startedData')

// export const removeTokenAction = createAsyncThunk<
//     null,
//     {
//         onSuccess?: () => void
//         onError?: () => void
//     }
// >('user/removeToken', async arg => {
//     try {
//         // @ts-ignore
//         await TokenManger.clean()
//         arg.onSuccess?.()
//         return null
//     } catch (e) {
//         arg.onError?.()
//         throw e
//     }
// })

// export const removeUserAction = createAsyncThunk<
//     null,
//     {
//         onSuccess?: () => void
//         onError?: () => void
//     }
// >('user/removeUser', async arg => {
//     try {
//         const { data: response } = await apiClient.delete<null>(R.consts.API_PATH_USER_REMOVE)

//         // @ts-ignore
//         await TokenManger.clean()
//         arg.onSuccess?.()
//         return response
//     } catch (e) {
//         arg.onError?.()
//         throw e
//     }
// })

// export const switchAccountAction = createAsyncThunk<
//     {
//         user: IUser
//         firstLogin: boolean
//     } | null,
//     | {
//         onSuccess?: (response: { user: IUser; firstLogin: boolean }) => void
//         onError?: (error: any) => void
//     }
//     | undefined
// >('user/switch', async (arg, thunkAPI) => {
//     try {
//         const { data: response } = await apiClient.post<IUser>(R.consts.API_PATH_SWITCH_PROFILE)
//         let firstLogin = true

//         // @ts-ignore
//         if (response.role === UserRoleEnum.PRO) {
//             const proProcess = await getProProcessApi()

//             if (proProcess.percentage > 0) {
//                 firstLogin = false
//             }
//         } else {
//             firstLogin = response.wasRegistered
//         }

//         if (response) {
//             // @ts-ignore
//             await TokenManger.set({
//                 accessToken: response.accessToken,
//                 refreshToken: response.refreshToken,
//             })
//             await thunkAPI.dispatch(getUserDetailAction({ user: response }))

//             const data = { user: response, firstLogin }

//             arg?.onSuccess?.(data)
//             return data
//         }

//         throw new Error()
//     } catch (e) {
//         arg?.onError?.(e)
//         return null
//     }
// })
