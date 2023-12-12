import React from 'react'
import { StyleSheet, View } from 'react-native'
import { s, vs } from 'react-native-size-matters'
import AuthInput from './common/AuthInput'
import Button from './common/Button'

export default function ParolProfile() {
    return (
        <View style={styles.card}>
            <AuthInput
                label="Старый пароль*"
                placeholder="Введите пароль"
                position="top"
                secureTextEntry
                name='revertpassword'
                containerStyle={styles.input}
                parolInput={true}
            />
            <AuthInput label="Пароль*" placeholder="Введите новый пароль" secureTextEntry position="center" name='password' parolInput={true} />
            <AuthInput
                label="Повторите пароль*"
                placeholder="Повторите новый пароль"
                secureTextEntry
                position="bottom"
                name='newpassword'
                parolInput={true}
            />

            <Button containerStyle={{ marginTop: 15 }} text="Сменить пароль" />
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        marginTop: vs(20),
        marginHorizontal: s(15),
        borderRadius: s(10),
        borderColor: '#E8E8F0',
        paddingVertical: vs(10),
    },
    input: {
        // backgroundColor: 'red',
    },
})
