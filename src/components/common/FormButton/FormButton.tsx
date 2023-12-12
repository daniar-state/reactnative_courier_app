import { useFormikContext } from 'formik'
import React from 'react'
import { ActivityIndicator, StyleSheet, TouchableOpacity, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Body from '../Body'

interface IProps {
    text: string | string[]
    onPress?: (() => void) | undefined
    style?: object
    textStyle?: object
    loading?: boolean
    disabled?: boolean
    disableSubmit?: boolean
    transparent?: boolean
}

export const FormButton = ({
    text,
    onPress,
    style,
    loading = false,
    disabled = false,
    disableSubmit = false,
}: IProps) => {
    const form = useFormikContext()

    let configurations: {
        backgroundColors: string[]
        color: string
        angle: number
        locations: number[]
    } = {
        backgroundColors: ['#D1EA7A', '#BED962'],
        color: '#243757',
        angle: 90,
        locations: [0.5, 0.9],
    }

    const onSubmitPress = () => {
        if (!disableSubmit) {
            form.handleSubmit()
        }

        if (onPress) {
            onPress()
        }
    }

    return (
        <TouchableOpacity onPress={onSubmitPress} disabled={disabled || loading}>
            <View style={[styles.button, disabled ? styles.disabled : {}, style]}>
                <LinearGradient
                    colors={configurations.backgroundColors}
                    angle={configurations.angle}
                    useAngle={!!configurations.angle}
                    locations={configurations.locations}
                    style={styles.button}>
                    {loading ? (
                        <ActivityIndicator />
                    ) : (
                        <Body semiBold color={configurations.color} size={15}>
                            {text}
                        </Body>
                    )}
                </LinearGradient>
            </View>
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
    disabled: {
        shadowOpacity: 0,
        elevation: 0,
        opacity: 0.4,
    },
})
