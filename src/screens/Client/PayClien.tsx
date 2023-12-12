import React, { useState } from 'react'
import { Image, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import Header from '../../components/Header'
import Body from '../../components/common/Body'
import { Ellipses } from '../../components/common/Svgs'

import { Space } from '../../components/common/Space'
import Button from '../../components/common/Button'

export default function PayClient() {
    const [data, setData] = useState([
        { id: 1, title: 'По QR-коду', select: false },
        { id: 2, title: '**** **** **** 5670', select: true },
        { id: 3, title: 'Криптовалюты', select: true },
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
        // setCheck(!check)
    }

    return (
        <View style={{ flex: 1 }}>
            <Header title="Тариф" />

            <ScrollView style={{ paddingBottom: 60 }}>
                <Body semiBold size={17} style={{ paddingLeft: 17 }}>
                    Тип отправления
                </Body>

                <View style={{ marginHorizontal: 15 }}>
                    <View style={{ flexDirection: 'column' }}>
                        {data.map(item => (
                            <TouchableOpacity
                                key={item.id}
                                style={item.select ? styles.senderSecondItem : styles.senderItem}
                                onPress={() => pressButton(item.id)}>
                                <View style={{ marginTop: 3 }}>
                                    <Ellipses color={item.select ? 'rgba(160, 172, 190, 1)' : 'white'} />
                                </View>

                                <Space width={18} />
                                <View>
                                    <Body color={item.select ? 'black' : 'white'} style={{ marginRight: 10 }}>
                                        {item.title}
                                    </Body>
                                </View>

                                {item.title === '**** **** **** 5670' ? (
                                    <Image source={require('../../assets/visa.png')} style={styles.image} />
                                ) : null}
                            </TouchableOpacity>
                        ))}
                    </View>

                    <Space height={20} />

                    <Button text="Оплатить" buttonType={2} />

                    <Space height={10} />
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
        // justifyContent: 'center',
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
    image: {
        width: 40,
        height: 23,
        position: 'absolute',
        right: 30,
        top: 12,
    },
})
