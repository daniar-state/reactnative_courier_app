import React, { useState } from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { AppleLogo, FacebookLogo, GoogleLogo } from '../components/common/Svgs'
import { Formik } from 'formik'
import Body from '../components/common/Body'
import Button from '../components/common/Button'
import { useNavigation } from '@react-navigation/native'
import AuthInput from '../components/common/AuthInput'
import Header from '../components/Header'
import { FormButton } from '../components/common/FormButton/FormButton'
import { Space } from '../components/common/Space'
import useAppDispatch from '../hooks/useAppDispatch'
import { getUser } from '../state/user/selectors'
import R from '../res'
import useAppSelector from '../hooks/useAppSelector'
import { requir, validator, email, tel } from '../utils/validators'
import { login } from '../api/methods/login'
import { ILogout } from '../types/data'
import { loginAction } from '../state/user/action'

export default function Login() {
    const [error, setError] = useState('');
    const dispatch = useAppDispatch()
    const navigation = useNavigation()
    const safeAreaInsets = useSafeAreaInsets()

    const initialValues: ILogout = {
        email: '',
        password: '',
    }
    /*
    const submit = async ({ email, password }) => {
        const [response, error] = await login(email, password);
        if (response) {
            navigation.navigate('TabScreen');
        } else {
            setError('Предоставленный код не совпадает или истек срок действия');
            console.error(error);
        }
    }*/

    const submit = async (data: ILogout) => {
        const [response, error] = await login(data.email, data.password);

        if (error) {
            setError('Failed to Login')
        } else {
            dispatch(loginAction({
                data,
                onSuccess: () => {
                    //@ts-ignore
                    navigation.navigate('TabScreen');
                },
                onError: (errorResponse) => {
                    setError(errorResponse?.data?.message || 'Error during login.');
                }
            }));
        }
    }
    
    return (
        <Formik initialValues={initialValues} onSubmit={submit}>
            {({ handleSubmit }) => (
                <View style={styles.container}>
                    <Header title="Войти" />

                    <AuthInput
                        label='E-mail*'
                        placeholder='Введите e-mail'
                        keyboardType='email-address'
                        position='top'
                        name='email'
                        validate={validator(email)}
                    />
                    <AuthInput
                        label='Пароль'
                        placeholder='Введите пароль'
                        secureTextEntry
                        position='bottom'
                        name='password'
                        validate={validator(requir)}
                    />

                    <TouchableOpacity
                        //@ts-ignore
                        onPress={() => navigation.navigate('ResetPasswordEmail')}
                        style={{ alignSelf: 'flex-end' }}>
                        <Body style={styles.resetPassword} color="rgba(47, 128, 237, 1)">
                            Восстановить пароль
                        </Body>
                    </TouchableOpacity>

                    <Body size={12} bold>
                        {error}
                    </Body>

                    <Space height={20} />

                    <FormButton text="ВОЙТИ" onPress={handleSubmit} />

                    <Space height={20} />

                    <View style={styles.socialButtonsContainer}>
                        <View style={styles.socialMediaButton}>
                            <FacebookLogo />
                        </View>

                        <View style={[styles.socialMediaButton, { marginHorizontal: 9 }]}>
                            <GoogleLogo />
                        </View>

                        <View style={styles.socialMediaButton}>
                            <AppleLogo />
                        </View>
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
