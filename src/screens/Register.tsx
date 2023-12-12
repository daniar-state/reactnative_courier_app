import React, { useState } from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import { AppleLogo, FacebookLogo, GoogleLogo } from '../components/common/Svgs'
import { useNavigation } from '@react-navigation/native'
import AuthInput from '../components/common/AuthInput'
import Header from '../components/Header'
import { Formik } from 'formik'
import { IRegistr } from '../types/data'
import { FormButton } from '../components/common/FormButton/FormButton'
import { Space } from '../components/common/Space'
import useAppDispatch from '../hooks/useAppDispatch'
import { registerAction } from '../state/user/action'
import { getUser } from '../state/user/selectors'
import R from '../res'
import useAppSelector from '../hooks/useAppSelector'
import { requir, validator, email, tel } from '../utils/validators'
import Body from '../components/common/Body'
import { register } from '../api/methods/register'

export default function Register() {
    const [error, setError] = useState('')
    const navigation = useNavigation()
    const dispatch = useAppDispatch()
    const { loading } = useAppSelector(getUser)

    const initialValues: IRegistr = {
        email: '',
        phone: '',
        password: '',
        passwordConfirmation: '',
    }

    const submit = async (data: IRegistr) => {
        const [response, error] = await register(data.email, data.phone, data.password);

        if (error) {
            setError('Failed to register')
        } else {
            dispatch(registerAction({
                data,
                onSuccess: () => {
                    //@ts-ignore
                    navigation.navigate(R.routes.CONFIRM_EMAIL);
                },
                onError: (errorResponse) => {
                    setError(errorResponse?.data?.message || 'Error during registration.');
                }
            }));
        }
    }

    return (
        <Formik initialValues={initialValues} onSubmit={submit}>
            {({ handleSubmit }) => (
                <View style={styles.container}>
                    <Header title="Регистрация" />

                    <AuthInput
                        label="E-mail*"
                        placeholder="Введите e-mail"
                        keyboardType="email-address"
                        position="top"
                        name="email"
                        validate={validator(email)}
                    />

                    <AuthInput
                        label="Номер телефона*"
                        placeholder="Введите номер телефона"
                        keyboardType="phone-pad"
                        position="center"
                        name="phone"
                        maxLength={11}
                        validate={validator(tel)}
                    />
                    <AuthInput
                        label="Пароль*"
                        placeholder="Введите пароль"
                        secureTextEntry
                        position="center"
                        name="password"
                        validate={validator(requir)}
                    />
                    <AuthInput
                        label="Повторите пароль*"
                        placeholder="Повторите пароль"
                        secureTextEntry
                        position="bottom"
                        name="passwordConfirmation"
                        validate={validator(requir)}
                    />

                    <Body size={12} bold>
                        {error}
                    </Body>

                    <Space height={20} />

                    <FormButton text="ЗАРЕГИСТРИРОВАТЬСЯ" onPress={handleSubmit} loading={loading} />

                    <Space height={20} />

                    <View style={styles.socialButtonsContainer}>
                        <View style={styles.socialMediaButton}>
                            <FacebookLogo />
                        </View>

                        <View style={[styles.socialMediaButton, { marginHorizontal: 9 }]}>
                            <GoogleLogo />
                        </View>

                        <TouchableOpacity onPress={() => navigation.navigate('TabScreen')}>
                            <View style={styles.socialMediaButton}>
                                <AppleLogo />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            )}
        </Formik>
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
