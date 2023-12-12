import * as RN from 'react-native'
import { ImageStyle as DefaultImageStyle, StyleProp, TextStyle } from 'react-native'
import { ImageStyle } from 'react-native-fast-image'
import { NamedStyles, StringifiedStyles } from 'react-native-size-matters'
import { ScaledSheet } from 'react-native-size-matters/extend'
import R from '../res'
import { TThemeColors } from '../res/theme'

export type createStylesType = <U, T = NamedStyles<U> | NamedStyles<any>>(
    callback: (colors: TThemeColors, isDark: boolean) => T,
) => (
        colors: TThemeColors,
        isDark: boolean,
    ) => {
            [P in keyof T]: RN.RegisteredStyle<T[P] & Record<Extract<keyof T[P], keyof StringifiedStyles>, number>> &
            StyleProp<TextStyle> &
            StyleProp<ImageStyle> &
            StyleProp<DefaultImageStyle>
        }

export const createStyles: createStylesType =
    callback => (colors: TThemeColors, fonts: typeof R.fonts, isDark: boolean) =>
        ScaledSheet.create(callback(colors, fonts, isDark))
