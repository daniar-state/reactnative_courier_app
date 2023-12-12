import React, { useState } from 'react'
import { ScaledSheet } from 'react-native-size-matters/extend'
import { Dimensions, ScrollView, TextInput, TouchableOpacity, View, Platform } from 'react-native'
import FastImage from 'react-native-fast-image'
import { EyeActive, OrderIcon, SearchIcon } from '../components/common/Svgs'
import { colors } from '../theme/themes'
import DropShadow from 'react-native-drop-shadow'
const user = require('../assets/user.png')

const header = require('../assets/header.png')
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import CourierRating from '../components/CourierRating'
import Body from '../components/common/Body'
import HomeSlider from '../components/HomeSlider'
import sliderData from '../api/SliderData'

const { width } = Dimensions.get('window')

export default function Home() {
    const [overallBalance, setOverallBalance] = useState(false)
    const [tips, setTips] = useState(false)
    const [fines, setFines] = useState(false)
    const [text, setText] = useState<string>('')
    const safeAreaInsets = useSafeAreaInsets()

    async function handleChange(e: string) {
        setText(e)
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100 }}>
            <View style={{ alignItems: 'center' }}>
                <FastImage source={header} style={styles.headerImage} />

                <View style={[styles.userBox, { top: 18 + safeAreaInsets.top }]}>
                    <View style={{ flexDirection: 'column' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <FastImage source={user} style={styles.image} />

                            <View style={{ marginLeft: 14 }}>
                                <Body color="#243757" style={{ fontSize: 20, fontWeight: '700' }}>
                                    Дмитрий П.
                                </Body>
                            </View>
                        </View>

                        <View style={{ marginLeft: 80, marginTop: -10 }}>
                            <TouchableOpacity onPress={() => setTips(!tips)} activeOpacity={0.7}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Body color="#243757" style={styles.title}>
                                        Чаевые за сегодня
                                    </Body>

                                    <EyeActive width={11} height={8} />
                                </View>

                                {!tips ? (
                                    <Body color="#243757" style={styles.priceOne}>
                                        187 ₽
                                    </Body>
                                ) : (
                                    <Body color="#243757" style={[styles.priceOne, { fontSize: 10 }]}>
                                        ＊＊＊＊＊＊
                                    </Body>
                                )}
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ marginLeft: 41, justifyContent: 'flex-end' }}>
                        <TouchableOpacity onPress={() => setOverallBalance(!overallBalance)} activeOpacity={0.7}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Body color="#243757" style={styles.title}>
                                    Общий баланс
                                </Body>
                                <EyeActive width={11} height={8} />
                            </View>

                            {!overallBalance ? (
                                <Body color="#243757" style={styles.priceTwo}>
                                    3 000 ₽
                                </Body>
                            ) : (
                                <Body color="#243757" style={[styles.priceTwo, { fontSize: 14 }]}>
                                    ＊＊＊＊＊＊
                                </Body>
                            )}
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => setFines(!fines)} activeOpacity={0.7}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Body color="#243757" style={styles.title}>
                                    Штрафы
                                </Body>

                                <EyeActive width={11} height={8} />
                            </View>

                            {!fines ? (
                                <Body color="#243757" style={styles.priceOne}>
                                    0 ₽
                                </Body>
                            ) : (
                                <Body color="#243757" style={[styles.priceOne, { fontSize: 10 }]}>
                                    ＊＊＊＊＊＊
                                </Body>
                            )}
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <View style={{ paddingHorizontal: 16, marginTop: -58 }}>
                <DropShadow style={styles.orderBox}>
                    <View style={styles.orderBoxContainer}>
                        <View>
                            <Body color="#243757" style={styles.currentOrdersText}>
                                Текущие заказы
                            </Body>
                            <Body color="#A1ADBF" style={styles.openOrdersText}>
                                Открыть заказы
                            </Body>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <OrderIcon width={24} height={24} color="#A0ACBE" />

                            <Body color="#243757" style={styles.count}>
                                2
                            </Body>
                        </View>
                    </View>
                </DropShadow>

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

            {/* <ScrollView
                contentContainerStyle={{ paddingRight: 15 }}
                showsHorizontalScrollIndicator={false}
                style={{ flexDirection: 'row', paddingLeft: 15, marginTop: 17 }}
                horizontal>
                <FastImage source={sliderImage} style={styles.slider}>
                    <Body color="#ecdffc" style={styles.freeCourseText}>
                        Бесплатный мини курс
                    </Body>
                    <Body color={colors.white} style={styles.freeCourseDescription}>
                        «Идеальный курьер»
                    </Body>
                </FastImage>

                <FastImage source={sliderIm} style={styles.sliderIm}>
                    <Body color="#ecdffc" style={styles.freeCourseText}>
                        Бесплатный мини курс
                    </Body>
                    <Body color={colors.white} style={styles.freeCourseDescription}>
                        «Идеальный курьер»
                    </Body>
                </FastImage>

                <FastImage source={sliderImage} style={styles.slider}>
                    <Body color="#ecdffc" style={styles.freeCourseText}>
                        Бесплатный мини курс
                    </Body>
                    <Body color={colors.white} style={styles.freeCourseDescription}>
                        «Идеальный курьер»
                    </Body>
                </FastImage>
            </ScrollView> */}
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingRight: 15 }}
                style={{ flexDirection: 'row', paddingLeft: 15, marginTop: 17 }}>
                {sliderData.map(item => (
                    <HomeSlider item={item} key={item.id} />
                ))}
            </ScrollView>

            <View style={{ alignItems: 'center', marginTop: 26 }}>
                <CourierRating />
            </View>
        </ScrollView>
    )
}

const styles = ScaledSheet.create({
    container: {
        alignItems: 'center',
    },
    userBox: {
        flexDirection: 'row',
        borderRadius: 10000,
        justifyContent: 'center',
        position: 'absolute',
    },
    image: {
        width: '51@vs',
        height: '51@vs',
    },
    headerImage: {
        width: '100%',
        height: Platform.OS === 'ios' ? width * 0.63 : width * 0.6,
    },
    title: {
        fontSize: 12,
        marginRight: 5,
        lineHeight: 24,
        fontWeight: '400',
    },
    priceOne: {
        fontSize: 15,
        fontWeight: '500',
        lineHeight: 14,
    },
    priceTwo: {
        fontSize: 25,
        lineHeight: 24,
        marginTop: 2,
        fontWeight: '600',
    },
    orderBox: {
        elevation: 8,
        shadowColor: '#5D60DF',
        shadowOffset: { width: 0, height: 12 },
        shadowOpacity: 0.24,
        shadowRadius: 40,
    },
    orderBoxContainer: {
        width: '100%',
        height: '73@vs',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        borderRadius: 10,
        backgroundColor: colors.white,
    },
    currentOrdersText: {
        fontSize: 17,
        fontWeight: '600',
        lineHeight: 20.83,
    },
    openOrdersText: {
        fontSize: 12,
        fontWeight: '400',
        lineHeight: 14.4,
        marginTop: 1,
    },
    count: {
        marginLeft: 15,
        fontSize: 20,
        fontWeight: '600',
        marginBottom: 4,
    },
    inputBox: {
        width: '100%',
        height: 52,
        marginTop: '20@vs',
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
    searchText: {
        fontWeight: '400',
        fontSize: 15,
        color: '#5B5B5B',
    },
    slider: {
        width: 187,
        height: 189,
        marginRight: 10,
        borderRadius: 10,
        alignItems: 'center',
        paddingTop: 21,
    },
    freeCourseText: {
        fontSize: 11,
        fontWeight: '500',
    },
    freeCourseDescription: {
        fontSize: 15.5,
        fontWeight: '600',
        marginTop: 2,
    },
    sliderIm: {
        width: 187,
        height: 189,
    },
    flat: {
        borderWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 4,
    },
})
