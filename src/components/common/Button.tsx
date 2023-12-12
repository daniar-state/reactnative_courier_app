import React, { ReactNode } from 'react'
import { StyleSheet, TextProps, TouchableOpacity, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Body from './Body'

interface IProps extends TextProps {
    buttonType?: 1 | 2 | 3
    text?: string
    containerStyle?: object
    renderContent?: () => ReactNode
}

const Button: React.FC<IProps> = ({ onPress, buttonType = 1, text, containerStyle, renderContent }) => {
    let configurations: {
        backgroundColors: string[]
        color: string
        angle: number
        locations: number[]
    } = {
        backgroundColors: [],
        color: '#000',
        angle: 0,
        locations: [],
    }

    if (buttonType === 1) {
        configurations = {
            ...configurations,
            backgroundColors: ['#AD86F0', '#5E62DF'],
            color: 'white',
            angle: 15,
            locations: [0.2, 0.65],
        }
    }

    if (buttonType === 2) {
        configurations = {
            ...configurations,
            backgroundColors: ['#D1EA7A', '#BED962'],
            color: '#243757',
            angle: 90,
            locations: [0.5, 0.9],
        }
    }

    if (buttonType === 3) {
        configurations = {
            ...configurations,
            backgroundColors: ['rgba(36, 55, 87, 1)'],
            color: 'rgba(255, 255, 255, 1)',
        }
    }

    const Component = ({ children }: { children: ReactNode }) =>
        configurations.backgroundColors.length > 1 ? (
            <LinearGradient
                colors={configurations.backgroundColors}
                angle={configurations.angle}
                useAngle={!!configurations.angle}
                locations={configurations.locations}
                style={styles.button}>
                {children}
            </LinearGradient>
        ) : (
            <View style={[styles.button, { backgroundColor: configurations.backgroundColors[0] }]}>{children}</View>
        )

    return (
        <TouchableOpacity
            activeOpacity={0.7}
            onPress={onPress}
            style={[{ marginBottom: 15, width: '100%' }, containerStyle]}>
            <Component>
                {renderContent ? (
                    renderContent()
                ) : (
                    <Body semiBold color={configurations.color} size={15}>
                        {text}
                    </Body>
                )}
            </Component>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        height: 66,
        justifyContent: 'center',
        borderRadius: 10,
        width: '100%',
        alignItems: 'center',
        flexDirection: 'row',
    },
})

export default Button
