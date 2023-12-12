import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import AuthInput from '../components/common/AuthInput'
import Header from '../components/Header'
import { Formik } from 'formik'
import { IPasswordReset } from '../types/data'
import { FormButton } from '../components/common/FormButton/FormButton'
import { Space } from '../components/common/Space'
import useAppDispatch from '../hooks/useAppDispatch'
import { resetPasswordAction } from '../state/user/action'
import { getUser } from '../state/user/selectors'
import R from '../res'
import useAppSelector from '../hooks/useAppSelector'
import { email, validator } from '../utils/validators'
import Body from '../components/common/Body'
import { resetPassword } from '../api/methods/resetPassword'

export default function ResetPasswordEmail() {
    const [error, setError] = useState('')
    const navigation = useNavigation()
    const dispatch = useAppDispatch()

    const initialValues: IPasswordReset = {
        email: '',
    }

    const submit = async(data: IPasswordReset) => {
        const [response, error] = await resetPassword(data.email);

        if (error) {
            setError('Failed to reset password')
        } else {
            dispatch(resetPasswordAction({
                data,
                onSuccess: () => {
                    //@ts-ignore
                    navigation.navigate('ResetPasswordSave');
                },
                onError: (errorResponse) => {
                    setError(errorResponse?.data?.message || 'Error during password reset.');
                }
            }));
        }
    }

    return (
        <Formik initialValues={initialValues} onSubmit={submit}>
            {({ handleSubmit }) => (
                <View style={styles.container}>
                    <Header title="Восстановить пароль" />

                    <AuthInput
                        containerStyle={{ marginBottom: 17 }}
                        label="E-mail*"
                        placeholder="Enter e-mail"
                        keyboardType="email-address"
                        name="email"
                        validate={validator(email)}
                    />

                    <Body size={12} bold>
                        {error}
                    </Body>

                    <Space height={20} />

                    <FormButton text="ВОССТАНОВИТЬ ПАРОЛЬ" onPress={handleSubmit} />

                    <Space height={20} />
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

