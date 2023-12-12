import React, { useState } from 'react'
import { TextInput, TouchableOpacity, View } from 'react-native'
import { SearchIcon } from '../../components/common/Svgs'
import { ScaledSheet } from 'react-native-size-matters/extend'
import TabViewExample from '../../components/TabView'
import Header from '../../components/Header'
import { Formik } from 'formik'

export default function ClientOrder() {
    const [text, setText] = useState<string>('')
    const [index, setIndex] = useState(0)

    const routes = [
        { key: 'all', title: 'Все' },
        { key: 'active', title: 'Активные' },
        { key: 'complete', title: 'Завершеные' },
    ]

    async function handleChange(e: string) {
        setText(e)
    }

    return (
        <Formik 
        initialValues={{}} 
        onSubmit={()=>{}}
        >
            {() => (
        <>
            <View style={styles.container}>
                <Header title={routes[index]?.title} />

                <View style={styles.inputBox}>
                    <TouchableOpacity activeOpacity={0.8}>
                        <SearchIcon width={22} height={22} />
                    </TouchableOpacity>

                    <TextInput
                        style={styles.input}
                        onChangeText={handleChange}
                        value={text}
                        placeholder="Поиск по всему сервису"
                        placeholderTextColor="#A1ADBF"
                    />
                </View>
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
    inputBox: {
        width: '100%',
        height: 52,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F7F9FD',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#E8E8F0',
        paddingLeft: 14,
        paddingHorizontal: 21,
        overflow: 'hidden',
    },
    input: {
        width: '100%',
        fontSize: 15,
        backgroundColor: '#F7F9FD',
        color: '#424242',
        paddingLeft: 11,
        paddingRight: 15,
    },
})
