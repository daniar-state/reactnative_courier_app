import { createAction, createAsyncThunk } from '@reduxjs/toolkit'
import { IClientDateRes, IConfirmCode, ILogout, IRegistr, IRole, IUser, IPasswordReset } from '../../types/data'
import R from '../../res'
import apiClient from '../../api/instance'
export const signOutUser = createAction('user/signOut')
export const removeUserInfo = createAction('user/removeUserInfo')
export const firstJoin = createAction('user/firstJoin')
export const setReferral = createAction<string>('user/setReferral')
export const setProReminderAction = createAction<boolean>('user/proReminder')
export const setAccountRemoverAction = createAction<boolean>('user/accountRemover')
export const userType = createAction<boolean>('user/typeUser')
export const setInputDisable = createAction<boolean>('user/disableSearch')

export const registerAction = createAsyncThunk<
    IRegistr,
    {
        data: IRegistr
        onSuccess?: (response: IRegistr) => void
        onError?: (e: any) => void
    }
>('user/registr', async arg => {
    try {
        const { data: response } = await apiClient.post<IRegistr>(R.consts.API_PATH_REGISTER, {
            ...arg.data,
            passwordConfirmation: arg.data.passwordConfirmation,
            accessToken: arg.data.accessToken,
        })

        arg.onSuccess?.(response)
        return response
    } catch (e: any) {
        arg.onError?.(e.response)
        throw e
    }
})

export const loginAction = createAsyncThunk<
    ILogout,
    {
        data: ILogout
        onSuccess?: (response: ILogout) => void
        onError?: (e: any) => void
    }
>('user/login', async arg => {
    try {
        const { data: response } = await apiClient.post<ILogout>(R.consts.API_PATH_LOGIN, {
            ...arg.data,
        })

        arg.onSuccess?.(response)
        return response
    } catch (e: any) {
        arg.onError?.(e.response)
        throw e
    }
})

export const resetPasswordAction = createAsyncThunk<
    IPasswordReset,
    {
        data: IPasswordReset
        onSuccess?: (response: IPasswordReset) => void
        onError?: (e: any) => void
    }
>('user/forgot', async arg => {
    try {
        const { data: response } = await apiClient.post<IPasswordReset>(R.consts.API_PATH_RESET_PASSWORD, {
            ...arg.data,
        })

        arg.onSuccess?.(response)
        return response
    } catch (e: any) {
        arg.onError?.(e.response)
        throw e
    }
})

export const postConfirmCode = createAsyncThunk<
    IConfirmCode,
    {
        data: IConfirmCode
        onSuccess?: (response: IConfirmCode) => void
        onError?: (e: any) => void
    }
>('user/confir', async arg => {
    try {
        const { data: response } = await apiClient.post<IConfirmCode>(R.consts.API_PATH_CONFIRM_CODE, arg.data)

        arg.onSuccess?.(response)
        return response
    } catch (e: any) {
        arg.onError?.(e.response)
        throw e
    }
})

export const postRole = createAsyncThunk<
    IRole,
    {
        data: IRole
        onSuccess?: (response: IRole) => void
        onError?: (e: any) => void
    }
>('user/role', async arg => {
    try {
        const { data: response } = await apiClient.post<IRole>(R.consts.API_PATH_ROLE, arg.data)

        arg.onSuccess?.(response)
        return response
    } catch (e: any) {
        arg.onError?.(e.response)
        throw e
    }
})

export const ClientDataAction = createAsyncThunk<
    IClientDateRes,
    {
        data: IClientDateRes
        onSuccess?: (response: IClientDateRes) => void
        onError?: (e: any) => void
    }
>('user/dataClient', async arg => {
    try {
        const { data: response } = await apiClient.post<IClientDateRes>(R.consts.API_PATH_CLIENT_SETTING, arg.data)

        arg.onSuccess?.(response)
        return response
    } catch (e: any) {
        arg.onError?.(e.response)
        throw e
    }
})

