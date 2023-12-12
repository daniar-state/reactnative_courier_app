import React, { ReactChild, ReactElement, ReactNode } from 'react'
import { View } from 'react-native'
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters/extend'

interface IProps {
    children?: ReactNode | ReactChild | ReactElement
    height?: number
    width?: number
    marginTop?: number
    marginBottom?: number
    marginLeft?: number
    marginRight?: number
    margin?: number
    style?: object
}

export const Space = (props: IProps) => {
    const {
        children,
        style,
        margin = 0,
        marginRight = 0,
        marginTop = 0,
        marginBottom = 0,
        marginLeft = 0,
        height = 0,
        width = 0,
    } = props

    const styleProps = {
        margin: moderateScale(margin, 1),
        marginRight: moderateScale(marginRight, 1),
        marginTop: moderateVerticalScale(marginTop, 1),
        marginBottom: moderateVerticalScale(marginBottom, 1),
        marginLeft: moderateScale(marginLeft, 1),
        height: moderateVerticalScale(height, 1),
        width: moderateScale(width, 1),
    }

    return <View style={[styleProps, style]}>{children}</View>
}
