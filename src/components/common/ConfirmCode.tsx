import React, { useEffect, useRef, useState } from 'react'
import { Keyboard, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Body from './Body'
import { Backspace } from './Svgs'
// import { useNavigation } from '@react-navigation/native'
import BackgroundTimer from 'react-native-background-timer'
import { postConfirmCode } from '../../state/user/action'
import { useAppDispatch } from '../../hooks/redux'
import R from '../../res'
import useSmartNavigation from '../../hooks/useSmartNavigation'

// interface IProps {
//     confirmCode: string
//     setConfirmCode: (confirmCode: string) => void
// }

const ConfirmCodeField = () => {
    const [confirmCode, setConfirmCode] = useState('')
    const [remainingTime, setRemainingTime] = useState(60)
    const dispatch = useAppDispatch()
    const [keyboardStatus, setKeyboardStatus] = useState('')
    const [error, setError] = useState('')

    const blocks = useRef<TextInput[]>([])
    const navigation = useSmartNavigation()

    useEffect(() => {
        BackgroundTimer.runBackgroundTimer(() => {
            setRemainingTime(prevTime => {
                return prevTime - 1
            })
        }, 1000)
    }, [])

    useEffect(() => {
        const showSubscription = Keyboard.addListener('keyboardDidShow', () => setKeyboardStatus('display'))
        const hideSubscription = Keyboard.addListener('keyboardDidHide', () => setKeyboardStatus('none'))
        return () => {
            showSubscription.remove()
            hideSubscription.remove()
        }
    }, [])

    const handleResendConfirmation = () => {
        setRemainingTime(60)
    }

    const handleCodeChange = (text: string, index: number) => {
        if (index > 3) {
            return
        }

        const newConfirmCode = [...confirmCode]
        newConfirmCode[index] = text
        setConfirmCode(newConfirmCode.join(''))

        if (newConfirmCode.length === 4) {
            //@ts-ignore
            console.log('OTPku', newConfirmCode.join(''))
            dispatch(
                postConfirmCode({
                    data: { code: newConfirmCode.join('') },
                    onSuccess: async () => {
                        // @ts-ignore
                        navigation.navigate(R.routes.PROFILE_TYPE)
                    },
                    onError: async () => {
                        setError('Предоставленный код не совпадает или истек срок действия')
                        //@ts-ignore
                        // navigation.navigate(R.routes.PROFILE_TYPE)
                    },
                }),
            )
        }

        if (index < 3 && text.length === 1) {
            blocks.current[index + 1].focus()
        }
    }

    const handleKeyPress = (e: any, index: number) => {
        if (e.nativeEvent.key === 'Backspace' && index > 0) {
            blocks.current[index - 1].focus()
        }
    }

    const handleKeyboardPress = (value: string) => {
        const index = confirmCode.length

        if (value === 'del') {
            setConfirmCode(confirmCode.slice(0, -1))
            blocks.current[Math.max(index - 2, 0)].focus()
            return
        }

        handleCodeChange(value, index)
    }

    const renderBlock = (index: number) => (
        <TextInput
            showSoftInputOnFocus={false}
            key={index}
            style={[styles.block, { backgroundColor: !confirmCode[index] ? '#F7F9FD' : 'transparent' }]}
            maxLength={1}
            onChangeText={text => handleCodeChange(text, index)}
            onKeyPress={e => handleKeyPress(e, index)}
            value={confirmCode[index]}
            keyboardType="number-pad"
            ref={ref => (blocks.current[index] = ref as TextInput)}
        />
    )

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                {renderBlock(0)}
                {renderBlock(1)}
                {renderBlock(2)}
                {renderBlock(3)}
            </View>

            <View style={styles.keyboardContainer}>
                {remainingTime > 0 ? (
                    <Body center color="#243757">
                        Повторная отправка будет возможна через: {remainingTime} секунд
                    </Body>
                ) : (
                    <TouchableOpacity style={styles.resendButton} onPress={handleResendConfirmation}>
                        <Body color="rgba(85, 85, 85, 1)">Получить новый код</Body>
                    </TouchableOpacity>
                )}

                <Text>{error}</Text>
                <CustomKeyboard handleKeyboardPress={handleKeyboardPress} />
            </View>
        </View>
    )
}

const CustomKeyboard = ({ handleKeyboardPress }: { handleKeyboardPress: (value: string, index: number) => void }) => {
    const keys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '', '0', 'del']

    return (
        <View style={styles.keyboard}>
            {keys.map((key, index) => {
                if (!key) {
                    return <View style={{ flexBasis: '33%' }} />
                }

                return (
                    <TouchableOpacity key={index} style={styles.key} onPress={() => handleKeyboardPress(key, index)}>
                        {key === 'del' ? (
                            <Backspace />
                        ) : (
                            <Body semiBold color="black" size={29}>
                                {key}
                            </Body>
                        )}
                    </TouchableOpacity>
                )
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    resendButton: {
        backgroundColor: '#F7F9FD',
        paddingVertical: 8,
        paddingHorizontal: 20,
        alignSelf: 'center',
    },
    inputContainer: {
        flexDirection: 'row',
        marginHorizontal: 23,
    },
    keyboardContainer: {
        position: 'absolute',
        bottom: 30,
    },
    block: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        textAlign: 'center',
        marginHorizontal: 5,

        flex: 1,
        height: 76,

        color: '#243757',
        fontFamily: 'Gilroy-SemiBold',
        fontSize: 29,
    },
    keyboard: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        flexWrap: 'wrap',
    },
    key: {
        alignItems: 'center',
        fontSize: 20,
        flexBasis: '33%',
        marginBottom: 42,
    },
})

export default ConfirmCodeField
