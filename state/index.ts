// import { combineReducers, configureStore, PayloadAction } from '@reduxjs/toolkit'
// import { persistStore } from 'redux-persist'
// import Reactotron from 'reactotron-react-native'
// // import { initialStateUser, userReducer } from './user/slice'
// import { firstLoginReducer } from './confirmFirstLogin/slice'

// const combinedReducer = combineReducers({
//     // user: userReducer,
//     fistLogin: firstLoginReducer,
// })

// //TODO: find how to give type for function
// // @ts-ignore
// const rootReducer: typeof combinedReducer = (state: any, action: PayloadAction) => {
//     // if (action.type === 'user/signOut') {
//     //     state = {
//     //         user: {
//     //             ...initialStateUser,
//     //             location: state.user.location,
//     //             firstJoin: state.user.firstJoin,
//     //             subscriptionInfo: state.user.subscriptionInfo,
//     //             _persist: state.user._persist,
//     //         },
//     //     }
//     // }

//     return combinedReducer(state, action)
// }

// const setupStore = () => {
//     return configureStore({
//         reducer: rootReducer,
//         enhancers: [
//             // @ts-ignore
//             Reactotron.createEnhancer(),
//         ],
//     })
// }

// const store = setupStore()

// const persistor = persistStore(store)

// export { persistor, store }

// export type RootState = ReturnType<typeof rootReducer>
// export type AppStore = ReturnType<typeof setupStore>
// export type AppDispatch = AppStore['dispatch']
