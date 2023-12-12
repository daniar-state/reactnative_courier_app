import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'

import { s, vs } from 'react-native-size-matters'
import SecondAuthInput from './common/SecondAutInput'

export default function DataProfile() {
    return (
        <ScrollView style={styles.card} showsVerticalScrollIndicator={false}>
            <SecondAuthInput label="Фамилия имя отчество*" placeholder="Голованов Игорь Аркадьевич " position="top" />
            <SecondAuthInput label="E-mail*" placeholder="bystrov-vladimir@mail.ru" position="center" />
            <SecondAuthInput label="Номер телефона*" placeholder="+7 932-32-32-14" position="center" />
            <SecondAuthInput label="Регион*" placeholder="Москва и московская область" position="center" />
            <SecondAuthInput label="Город*" placeholder="Москва" position="center" />
            <SecondAuthInput label="Улица*" placeholder="Гоголя" position="center" />
            <SecondAuthInput label="Дом*" placeholder="14" position="center" />
            <SecondAuthInput label="Квартира*" placeholder="113" position="bottom" />
        </ScrollView>
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
})
