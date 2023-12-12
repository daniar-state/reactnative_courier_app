import { DefaultTheme } from '@react-navigation/native'

const theme = {
    light: {
        dark: true,
        colors: {
            ...DefaultTheme.colors,
            // Default background color, prevents flickering
            backroundPrimary: '#F5F5F5',
            backroundSecondary: '#F5F8F9',
            main: '#2BB0AD',
            textPrimary: '#061A1A',
            textSecondary: '#6D7986',
            textTertiary: '#B0B6BE',
            black: 'black',
            white: '#FFFFFF',
            lightGrey: '#F5F8F9',
            red: '#F54D3F',
            title: '#B3C2CB',

            iconPrimary: '#B3C2CB',
            iconSecondary: '#6D7986',
            iconLine: '#E5E7E9',
            textColor: '#8E8E93',
            border: '#EDEFEF',
        },
    },
    dark: {
        dark: false,
        colors: {
            ...DefaultTheme.colors,
            // Default background color, prevents flickering
            backroundPrimary: '#F5F5F5',
            backroundSecondary: '#F5F8F9',
            main: '#2BB0AD',
            black: 'black',
            white: '#FFFFFF',
            lightGrey: '#F5F8F9',
            red: '#F54D3F',
            title: '#B3C2CB',

            textPrimary: '#061A1A',
            textSecondary: '#6D7986',
            textTertiary: '#B0B6BE',

            iconPrimary: '#B3C2CB',
            iconSecondary: '#6D7986',
            iconLine: '#E5E7E9',
            textColor: '#8E8E93',
            border: '#EDEFEF',
        },
    },
}

export type TTheme = typeof theme.light & typeof theme.dark
export type TThemeColors = typeof theme.light.colors & typeof theme.dark.colors

export default theme
