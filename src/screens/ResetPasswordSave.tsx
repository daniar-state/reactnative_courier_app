import React from 'react'
import { StyleSheet, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Button from '../components/common/Button'
import { useNavigation } from '@react-navigation/native'
import AuthInput from '../components/common/AuthInput'
import Body from '../components/common/Body'
import Header from '../components/Header'

export default function ResetPasswordSave() {
    const safeAreaInsets = useSafeAreaInsets()
    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <Header title="Придумайте новый пароль" />

            <AuthInput label="Пароль*" secureTextEntry placeholder="Введите новый пароль" position="top" />

            <AuthInput
                secureTextEntry
                containerStyle={{ marginBottom: 17 }}
                label="Повторите пароль*"
                placeholder="Повторите новый пароль"
                position="bottom"
            />

            <Button onPress={() => navigation.navigate('Login')} text="СОХРАНИТЬ" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 15,
    },
    resetPassword: {
        marginTop: 12,
        marginBottom: 16,
    },
    socialMediaButton: {
        width: 86,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'rgba(0, 0, 0, 0.09)',
        borderWidth: 1,
        borderRadius: 5,
    },
    socialButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
})
