import React, { useState } from 'react'
import { View } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters/extend'
import TabViewExample from '../components/TabView'
import Header from '../components/Header'
import Body from '../components/common/Body'
import { useNavigation } from '@react-navigation/native'
import { Formik } from 'formik'
import { Space } from '../components/common/Space'
import useAppDispatch from '../hooks/useAppDispatch'
import { getUser } from '../state/user/selectors'
import R from '../res'
import useAppSelector from '../hooks/useAppSelector'

export default function Profile() {
    const [text, setText] = useState<string>('')
    const [index, setIndex] = useState(1)

    const [error, setError] = useState('')
    const navigation = useNavigation()
    const dispatch = useAppDispatch()

    const routes = [
        { key: 'Setting', title: 'Настройки' },
        { key: 'Data', title: 'Личные данные' },
        { key: 'Parol', title: 'Пароль' },
    ]

    return (
        <Formik 
        initialValues={{}} 
        onSubmit={()=>{}}
        >
            {() => (
                <>
                    <View style={styles.container}>
                        {index === 1 ? <Header title="Igor Golovanov" /> : <Header title={routes[index]?.title} />}
                        {index === 1 ? (
                            <View style={styles.dataHeader}>
                                <Body size={12}>Checked</Body>
                            </View>
                        ) : null}
                    </View>
                    
                    <TabViewExample routes={routes} setIndex={setIndex} index={index} />
                </>
            )}
        </Formik>
    )
}

const styles = ScaledSheet.create({
    container: {
        alignItems: 'center',
        marginHorizontal: 15,
    },
    dataHeader: {
        position: 'absolute',
        bottom: 0,
        paddingVertical: 6,
        paddingHorizontal: 8,
        backgroundColor: '#D1EA7A',
        borderRadius: 3,
        lineHeight: 14,
    },
})
