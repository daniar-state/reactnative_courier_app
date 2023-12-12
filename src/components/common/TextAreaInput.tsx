import React, { useState } from 'react'
import { KeyboardTypeOptions, StyleSheet, TextInput, TextProps, View } from 'react-native'
import Body from './Body'

interface IProps extends TextProps {
    placeholder?: string
    containerStyle?: object
    label?: string
    backgroundColor?: string
    container2Style?: object
    parolInput?: boolean
    keyboardType?: KeyboardTypeOptions
    secureTextEntry?: boolean
    position?: 'top' | 'center' | 'bottom'
}

const TextAreaInput: React.FC<IProps> = ({
    placeholder,
    secureTextEntry,
    keyboardType,
    label,
    containerStyle,
    // parolInput = false,
    position = '',
    ...attributes
}) => {
    const [isFocused, setIsFocused] = useState(false)

    const containerStyles = [
        styles.inputBox,
        {
            backgroundColor: !isFocused ? '#FAFAFA' : 'transparent',
            borderTopLeftRadius: ['bottom', 'center'].includes(position) ? 0 : 10,
            borderTopRightRadius: ['bottom', 'center'].includes(position) ? 0 : 10,
            borderTopWidth: ['bottom', 'center'].includes(position) ? 0 : 1,

            borderBottomLeftRadius: ['top', 'center'].includes(position) ? 0 : 10,
            borderBottomRightRadius: ['top', 'center'].includes(position) ? 0 : 10,
        },
        containerStyle,
    ]

    // const container2Styles = [
    //     styles.inputBox2,
    //     {
    //         backgroundColor: !isFocused ? '#E8E8F0' : 'transparent',
    //         borderTopLeftRadius: ['bottom', 'center'].includes(position) ? 0 : 10,
    //         borderTopRightRadius: ['bottom', 'center'].includes(position) ? 0 : 10,
    //         borderTopWidth: ['bottom', 'center'].includes(position) ? 0 : 1,

    //         borderBottomLeftRadius: ['top', 'center'].includes(position) ? 0 : 10,
    //         borderBottomRightRadius: ['top', 'center'].includes(position) ? 0 : 10,
    //     },
    // ]

    return (
        <View style={containerStyles}>
            {label && (
                <Body
                    size={13}
                    color={isFocused ? 'rgba(161, 173, 191, 1)' : 'rgba(87, 87, 87, 1)'}
                    medium
                    style={styles.label}>
                    {label}
                </Body>
            )}

            <TextInput
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                style={styles.input}
                placeholder={placeholder}
                secureTextEntry={secureTextEntry}
                autoCapitalize="none"
                placeholderTextColor="rgba(0, 0, 0, 0.46)"
                keyboardType={keyboardType}
                {...attributes}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    inputBox: {
        width: '100%',
        height: 200,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#E8E8F0',
    },
    inputBox2: {
        width: '100%',
        height: 76,
        borderWidth: 0.5,
        borderRadius: 10,
        borderColor: 'gray',
    },
    input: {
        fontSize: 15,
        color: 'rgba(36, 55, 87, 1)',
        width: '100%',
        // height: '100%',
        paddingTop: 36,
        paddingBottom: 18,
        paddingHorizontal: 31,
        fontFamily: 'Gilroy-Light',
    },
    label: {
        position: 'absolute',
        left: 31,
        top: 10,
    },
})

export default TextAreaInput
