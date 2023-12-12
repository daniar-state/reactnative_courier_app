import { StackNavigationOptions } from '@react-navigation/stack'
import { Platform } from 'react-native'
import { s, vs } from 'react-native-size-matters'
import R from '../res'
import { TThemeColors } from '../res/theme'

export const getDefaultScreenOptions = (colors: TThemeColors): StackNavigationOptions => ({
    headerTitleStyle: {
        color: colors.textPrimary,
        fontSize: s(16),
    },
    headerStyle: {
        backgroundColor: colors.textPrimary,
        elevation: 0,
        shadowOpacity: 0,
    },
    headerTintColor: colors.backroundPrimary,
    headerRightContainerStyle: {
        paddingRight: Platform.select({ ios: s(10) }),
    },
    headerBackTitle: ' ',
})

export const getLogoScreenOptions = (colors: TThemeColors): StackNavigationOptions => ({
    headerTitleStyle: {
        color: colors.textPrimary,

        fontSize: s(16),
    },
    headerStyle: {
        backgroundColor: colors.textPrimary,
        elevation: 0,
        shadowOpacity: 0,
        height: Platform.select({ android: vs(65) }),
    },
    headerTintColor: colors.backroundPrimary,
    headerRightContainerStyle: {
        paddingRight: Platform.select({ ios: s(10) }),
    },
    headerBackTitle: ' ',
})

export const getFastTransitionParams = (): StackNavigationOptions => ({
    transitionSpec: {
        open: {
            animation: 'timing',
            config: {
                duration: 200,
            },
        },
        close: {
            animation: 'timing',
            config: {
                duration: 100,
            },
        },
    },
    cardStyleInterpolator: ({ current: { progress } }) => ({
        cardStyle: {
            opacity: progress.interpolate({
                inputRange: [0, 0.5, 0.9, 1],
                outputRange: [0, 0.5, 0.9, 1],
            }),
        },
    }),
})

export const getTabRouteById = (tabId: string) => {
    switch (tabId) {
        case 'home':
            return R.routes.STACK_HOME
        default:
            return R.routes.STACK_HOME
    }
}
