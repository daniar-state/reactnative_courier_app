import React, { useState } from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import { s, vs } from 'react-native-size-matters'
import AuthSelect from './common/AuthSelect'
import Body from './common/Body'
import ToggleSwitch from 'toggle-switch-react-native'
const backImage = require('../assets/bank.png')

// interface IData {
//     id: number
//     text?: string
//     chosen?: boolean
// }

// interface IKo {
//     item: IData
// }

export default function SettingProfile() {
    const [data, setData] = useState([
        { id: 1, title: 'Курьер подходит к дому', chosen: false },
        { id: 2, title: 'Курьер опаздывает', chosen: false },
        { id: 3, title: 'Курьер взял мой заказ', chosen: false },
    ])

    const pressButton = (id: number) => {
        const newData = data.map(i => {
            if (i.id === id) {
                return { ...i, chosen: !i.chosen }
            } else {
                return i
            }
        })
        setData(newData)
    }

    // const handPress = (item) => {
    //     const newItem = teleg.map((val) => {
    //         if (val.id === item.id) {
    //             return { ...val, completed: !val.completed }
    //         } else {
    //             return val
    //         }
    //     })
    //     setTeleg(newItem)

    return (
        <View style={styles.card}>
            <Text style={styles.courierRatingText}>Банковская карта</Text>

            <ImageBackground source={backImage} style={styles.back} resizeMode="stretch">
                <Body size={11} color="white">
                    Master Card
                </Body>

                <Body size={24} bold color="white">
                    **** **** **** 0329
                </Body>
            </ImageBackground>

            <AuthSelect label="Часовой пояс" placeholder="(UTC +03:00) Россия / Москва" />

            <Body size={20} semiBold style={styles.title}>
                Уведомления
            </Body>

            {data.map(item => (
                <View style={styles.SwitchCard} key={item.id}>
                    <Body size={16} style={styles.text}>
                        {item.title}
                    </Body>

                    <ToggleSwitch
                        isOn={item.chosen}
                        onColor="rgba(94, 98, 223, 1)"
                        thumbOnStyle={styles.on}
                        thumbOffStyle={styles.of}
                        trackOnStyle={styles.ton}
                        trackOffStyle={styles.tOff}
                        offColor="#E8E8F0"
                        labelStyle={styles.swipe}
                        size="medium"
                        onToggle={() => pressButton(item.id)}
                    />
                </View>
            ))}
            {/* <View style={styles.SwitchCard}>
                <Body size={16} style={styles.text}>
                    Курьер подходит к дому
                </Body>

                <ToggleSwitch
                    isOn={tog}
                    onColor="rgba(94, 98, 223, 1)"
                    thumbOnStyle={styles.on}
                    thumbOffStyle={styles.of}
                    trackOnStyle={styles.ton}
                    trackOffStyle={styles.tOff}
                    offColor="#E8E8F0"
                    labelStyle={styles.swipe}
                    size="medium"
                    onToggle={pressButton}
                />
            </View> */}

            {/* <View style={styles.SwitchCard}>
                <Body size={16} style={styles.text}>
                    Курьер подходит к дому
                </Body>

                <ToggleSwitch
                    isOn={tog}
                    onColor="rgba(94, 98, 223, 1)"
                    thumbOnStyle={styles.on}
                    thumbOffStyle={styles.of}
                    trackOnStyle={styles.ton}
                    trackOffStyle={styles.tOff}
                    offColor="#E8E8F0"
                    labelStyle={styles.swipe}
                    size="medium"
                    onToggle={()=>pressButton(item.id)}
                />
            </View>

            <View style={styles.SwitchCard}>
                <Body size={16} style={styles.text}>
                    Курьер подходит к дому
                </Body>

                <ToggleSwitch
                    isOn={tog}
                    onColor="rgba(94, 98, 223, 1)"
                    thumbOnStyle={styles.on}
                    thumbOffStyle={styles.of}
                    trackOnStyle={styles.ton}
                    trackOffStyle={styles.tOff}
                    offColor="#E8E8F0"
                    labelStyle={styles.swipe}
                    size="medium"
                    onToggle={()=>pressButton(item.id)}
                />
            </View> */}
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        marginHorizontal: s(15),
    },
    courierRatingText: {
        marginTop: vs(20),
        lineHeight: 24,
        fontWeight: '600',
        fontSize: 24,
        color: 'rgba(36, 55, 87, 1)',
        fontFamily: 'Gilroy-SemiBold',
    },
    back: {
        paddingHorizontal: s(24),
        paddingVertical: vs(18),
        borderRadius: s(10),
        marginVertical: vs(16),
    },
    title: {
        marginTop: vs(29),
    },
    SwitchCard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    text: {
        marginVertical: vs(19),
    },
    swipe: {
        color: 'black',
        fontFamily: 'Gilroy-Medium',
        fontWeight: '400',
        fontSize: 16,
        marginRight: 120,
    },
    on: {
        backgroundColor: 'white',
        padding: 12,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: 'rgba(94, 98, 223, 1)',
    },
    of: {
        backgroundColor: 'white',
        padding: 12,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: '#E8E8F0',
    },
    ton: {
        backgroundColor: 'rgba(94, 98, 223, 1)',
        padding: 12,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: 'rgba(94, 98, 223, 1)',
    },
    tOff: {
        backgroundColor: '#E8E8F0',
        padding: 12,
        borderRadius: 100,
    },
})
