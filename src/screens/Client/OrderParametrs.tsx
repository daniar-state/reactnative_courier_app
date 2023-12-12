import React, { useState } from 'react'
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import Header from '../../components/Header'
import Body from '../../components/common/Body'
import { ArrowRight, Ellipses } from '../../components/common/Svgs'
import CustomCheckbox from '../../components/common/CustomCheckbox'
import Button from '../../components/common/Button'
import AuthSelect from '../../components/common/AuthSelect'
import TextAreaInput from '../../components/common/TextAreaInput'
import { useNavigation } from '@react-navigation/native'
import { Space } from '../../components/common/Space'

export default function OrderParametrs() {
    const navigat = useNavigation()

    const [data, setData] = useState([
        { id: 1, title: 'Документы', select: false },
        { id: 2, title: 'Груз', select: true },
    ])

    const pressButton = (id: number) => {
        const newData = data.map(i => {
            if (i.id === id) {
                return { ...i, select: (i.select = false) }
            } else {
                return { ...i, select: (i.select = true) }
            }
        })
        setData(newData)
    }

    const goRate = () => {
        //@ts-ignore
        navigat.navigate('Rate')
    }

    return (
        <View style={{ flex: 1 }}>
            <Header title="Параметры заказа" />

            <ScrollView>
                <Body semiBold size={17} style={{ paddingLeft: 17 }}>
                    Тип отправления
                </Body>

                <ScrollView
                    contentContainerStyle={{ paddingLeft: 17 }}
                    horizontal
                    showsHorizontalScrollIndicator={false}>
                    <View style={{ flexDirection: 'row' }}>
                        {data.map(item => (
                            <TouchableOpacity
                                key={item.id}
                                style={item.select ? styles.senderSecondItem : styles.senderItem}
                                onPress={() => pressButton(item.id)}>
                                <View>
                                    <Body color={item.select ? 'black' : 'white'} style={{ marginRight: 10 }}>
                                        {item.title}
                                    </Body>
                                    <Space height={4} />
                                </View>
                                <View style={{ marginTop: 3 }}>
                                    <Ellipses color={item.select ? 'rgba(160, 172, 190, 1)' : 'white'} />
                                </View>
                            </TouchableOpacity>
                        ))}
                    </View>
                </ScrollView>

                <View style={styles.recipientFormContainer}>
                    <Body semiBold size={17} style={{ marginBottom: 15 }}>
                        Параметры
                    </Body>

                    <AuthSelect label="Тип документа*" placeholder="Введите фамилию имя отчество" position="top" />
                    <TextAreaInput label="Комментарий" placeholder="Введите комментарий для заказа" position="center" />

                    <CustomCheckbox label="От двери до двери" style={{ marginTop: 16 }} />

                    <View style={{ alignItems: 'center' }}>
                        <Button
                            renderContent={() => (
                                <>
                                    <Body style={{ marginRight: 80 }} semiBold color="rgba(255, 255, 255, 1)" size={15}>
                                        ДАЛЕЕ
                                    </Body>

                                    <ArrowRight />
                                </>
                            )}
                            buttonType={3}
                            text="Скачать договор"
                            onPress={goRate}
                            containerStyle={{ width: 259, marginTop: 20 }}
                        />
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    recipientFormContainer: {
        paddingHorizontal: 17,
        marginTop: 30,
    },
    senderItem: {
        padding: 20,
        backgroundColor: 'rgba(147, 122, 234, 1)',
        borderRadius: 10,
        marginTop: 12,
        flexDirection: 'row',
        marginRight: 10,
    },
    senderSecondItem: {
        padding: 20,
        backgroundColor: 'rgba(247, 249, 253, 1)',
        borderRadius: 10,
        marginTop: 12,
        flexDirection: 'row',
        marginRight: 10,
        // justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'rgba(232, 232, 240, 1)',
    },
    row: {
        flexDirection: 'row',
    },
    rowInput: {
        flex: 1,
    },
    input: {
        borderWidth: 1,
        paddingBottom: 30,
    },
})
