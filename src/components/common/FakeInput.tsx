import { BottomSheetTextInput } from '@gorhom/bottom-sheet'
import { useField } from 'formik'
import React, { ReactElement, useCallback, useRef, useState } from 'react'
import { TextInput, TextInputProps, View } from 'react-native'

import Body from './Body'

export interface IInputProps extends TextInputProps {
    name: string
    label?: string | React.ReactNode
    validate?: (value: string) => string | undefined
    inputStyle?: Object
    leftIcon?: ReactElement
    rightIcon?: ReactElement
    rightIconPress?: () => void
    secondaryErrorStyle?: boolean
    hideError?: boolean
    turnOffFocusStyle?: boolean
    bottomSheetInput?: boolean
    closeIcon?: ReactElement
    closeIconPress?: () => void
}

const FakeInput = ({
    label,
    name,
    validate,

    autoCapitalize = 'none',
    autoCorrect = false,
    placeholderTextColor,

    bottomSheetInput = false,
    ...attributes
}: IInputProps) => {
    const [field, meta, helpers] = useField({ name, validate })
    const [leftFocus, setLeftFocus] = useState(false)
    const ref = useRef<TextInput>(null)

    const onFocus = useCallback(() => {
        setLeftFocus(false)
        helpers.setTouched(true)
    }, [])

    const onBlur = useCallback(() => {
        setLeftFocus(true)
    }, [])

    const onChangeText = useCallback(async (value: string) => {
        helpers.setValue(value)
    }, [])

    const InputComponent = bottomSheetInput ? BottomSheetTextInput : TextInput

    return (
        <View>
            {label ? (
                <Body size={16} color="elementPrimary">
                    {label}
                </Body>
            ) : null}

            <View>
                <InputComponent
                    // style={[
                    //     styles.input,
                    //     !turnOffFocusStyle && ref?.current?.isFocused() ? styles.activeInput : {},
                    //     leftIcon && styles.inputLeftIcon,
                    //     rightIcon && styles.inputRightIcon,
                    //     secondaryErrorStyle && showError ? styles.errorInputSecondary : {},
                    //     inputStyle,
                    // ]}
                    // @ts-ignore
                    ref={ref}
                    autoCorrect={autoCorrect}
                    autoCapitalize={autoCapitalize}
                    onChangeText={onChangeText}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    value={String(field.value)}
                    placeholderTextColor={placeholderTextColor ? placeholderTextColor : 'red'}
                    {...attributes}
                />
            </View>
        </View>
    )
}

export default FakeInput
