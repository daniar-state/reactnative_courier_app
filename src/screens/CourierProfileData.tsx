import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import Button from '../components/common/Button'
import { useNavigation } from '@react-navigation/native'
import AuthInput from '../components/common/AuthInput'
import Header from '../components/Header'
import AuthSelect from '../components/common/AuthSelect'
import ImageInput from '../components/common/ImageInput'
import CustomCheckbox from '../components/common/CustomCheckbox'
import { Formik } from 'formik'
import { ClientRegistData } from '../types/data'

export default function CourierProfileData() {
    const navigation = useNavigation()

    const initialValues: ClientRegistData = {
        name: '',
        reg: '',
        city: '',
        street: '',
        home: '',
        room: '',
    }

    const submit = () => {}

    return (
        <View style={styles.container}>
            <Formik initialValues={initialValues} onSubmit={submit}>
                {() => (
                    <ScrollView>
                        <Header title="Персональные данные" />
                        <AuthInput
                            name="name"
                            label="Фамилия имя отчество*"
                            placeholder="Введите фамилию имя отчество"
                            position="top"
                        />
                        <AuthSelect label="Регион*" placeholder="Выберите свой регион" position="center" />
                        <AuthSelect label="Город*" placeholder="Выберите свой город" position="center" />
                        <AuthInput name="street" label="Улица*" placeholder="Укажите вашу улицу" position="center" />
                        <AuthInput name="home" label="Дом*" placeholder="Укажите номер вашего дома" position="center" />

                        <AuthInput
                            containerStyle={{ borderBottomWidth: 0 }}
                            label="Квартира"
                            placeholder="Укажите номер вашей квартиры"
                            position="center"
                            name="room"
                        />

                        <ImageInput
                            containerStyle={{ borderTopWidth: 1 }}
                            label="Разворот документа, удостоверяющего личность с фото"
                            position="center"
                        />

                        <ImageInput label="Второй разворот документа, удостоверяющего личность *" position="bottom" />
                        <CustomCheckbox
                            label={`Подтверждаю корректность введенных${'\n'} данных`}
                            style={{ marginTop: 10 }}
                        />

                        <Button
                            containerStyle={{ marginTop: 15 }}
                            //@ts-ignore
                            onPress={() => navigation.navigate('SigningAnAgreement')}
                            text="Отправить данные на проверку"
                        />
                    </ScrollView>
                )}
            </Formik>
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
