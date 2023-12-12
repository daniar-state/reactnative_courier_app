import AsyncStorage from '@react-native-community/async-storage'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PersistConfig, persistReducer } from 'redux-persist'

import { UserState } from '../confirmFirstLogin/types'
import { confirmOnBoarding } from './action'

const initialState: UserState = {
    onBoard: false,
}

const firstLogin = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: {
        [confirmOnBoarding.type]: (state, action: PayloadAction<boolean>) => {
            state.onBoard = action.payload
        },
    },
})

const persistConfig: PersistConfig<UserState> = {
    key: 'board',
    storage: AsyncStorage,
    whitelist: ['onBoard'],
}

export const firstLoginReducer = persistReducer(persistConfig, firstLogin.reducer)
