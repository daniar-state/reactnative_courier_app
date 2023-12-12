import React, { useEffect } from 'react'
import { Navigation } from '../src/navigation/index'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { AppStateProvider } from './contexts/AppStateContext'
import { persistor, store } from './state'
import { UIManager, Platform, LogBox, StyleSheet } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import AppLogic from './AppLogic'

const App = () => {
    if (__DEV__) {
        import('./reactotron').then(() => console.log('Reactotron Configured'))
    }

    LogBox.ignoreLogs(['new NativeEventEmitter', 'RCTBridge', '[react-native-gesture-handler]'])

    useEffect(() => {
        if (Platform.OS === 'android') {
            if (UIManager.setLayoutAnimationEnabledExperimental) {
                UIManager.setLayoutAnimationEnabledExperimental(true)
            }
        }
    }, [])

    return (
        <>
            <GestureHandlerRootView style={styles.container}>
                <Provider store={store}>
                    <PersistGate loading={null} persistor={persistor}>
                        <AppStateProvider>
                            <AppLogic>
                                <Navigation />
                            </AppLogic>
                        </AppStateProvider>
                    </PersistGate>
                </Provider>
            </GestureHandlerRootView>
        </>
    )
}

export default App

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})
