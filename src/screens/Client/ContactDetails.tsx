import React, { useState } from 'react'
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import Header from '../../components/Header'
import Body from '../../components/common/Body'
import { ArrowRight, Ellipses } from '../../components/common/Svgs'
import AuthInput from '../../components/common/AuthInput'
import CustomCheckbox from '../../components/common/CustomCheckbox'
import Button from '../../components/common/Button'
import { useNavigation } from '@react-navigation/native'
import { Space } from '../../components/common/Space'

export default function ContactDetails() {
    const navigation = useNavigation()

    const [data, setData] = useState([
        { id: 1, title: 'Я', select: false },
        { id: 2, title: 'Глебов И.', select: true },
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

    const goOrderParams = () => {
        //@ts-ignore
        navigation.navigate('OrderParametrs')
    }

    return (
        <View style={{ flex: 1 }}>
            <Header title="Контактные данные" />

            <ScrollView>
                <Body semiBold size={17} style={{ paddingLeft: 17 }}>
                    Отправитель
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

                    <TouchableOpacity style={styles.senderItemm}>
                        <View>
                            <Body color={'black'} style={{ marginRight: 10 }}>
                                Добавить нового
                            </Body>
                            <Space height={4} />
                        </View>
                        <View style={{ marginTop: 3 }}>
                            <Ellipses color="white" />
                        </View>
                    </TouchableOpacity>
                </ScrollView>

                <View style={styles.recipientFormContainer}>
                    <Body semiBold size={17} style={{ marginBottom: 15 }}>
                        Получатель
                    </Body>

                    <AuthInput
                        label="Фамилия имя отчество*"
                        placeholder="Введите фамилию имя отчество"
                        position="top"
                    />
                    <AuthInput label="Телефон*" placeholder="Введите телефон" position="center" />
                    <AuthInput label="Населенный пункт*" placeholder="Введите название" position="center" />
                    <AuthInput label="Улица*" placeholder="Введите название" position="center" />

                    <View style={styles.row}>
                        <AuthInput
                            containerStyle={[styles.rowInput, { borderRightWidth: 0 }]}
                            label="Дом*"
                            placeholder="Введите номер"
                            position="center"
                        />
                        <AuthInput
                            containerStyle={styles.rowInput}
                            label="Квартира*"
                            placeholder="Введите номер"
                            position="center"
                        />
                    </View>

                    <View style={styles.row}>
                        <AuthInput
                            containerStyle={[styles.rowInput, { borderRightWidth: 0 }]}
                            label="Подъезд*"
                            placeholder="Введите номер"
                            position="center"
                        />
                        <AuthInput
                            containerStyle={styles.rowInput}
                            label="Домофон или код*"
                            placeholder="Введите номер"
                            position="center"
                        />
                    </View>

                    <CustomCheckbox label="Согласие на обработку персональных данных" style={{ marginTop: 16 }} />

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
                            containerStyle={{ width: 259, marginTop: 20 }}
                            onPress={goOrderParams}
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
    senderItemm: {
        padding: 20,
        backgroundColor: 'rgba(232, 232, 240, 1)',
        borderRadius: 10,
        marginTop: 12,
        flexDirection: 'row',
        marginRight: 10,
    },
})
