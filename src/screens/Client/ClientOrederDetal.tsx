import React, { useState } from 'react'
import { ScrollView, TouchableOpacity, View } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters/extend'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import Body from '../../components/common/Body'
import BackButton from '../../components/common/BackButton'
import { Flag, FlagIcon, MessageIcon, MoreIcon, OrderIconActive, PhoneIcon } from '../../components/common/Svgs'
import FastImage from 'react-native-fast-image'
import { Slider } from 'react-native-awesome-slider'
import { useSharedValue } from 'react-native-reanimated'
// import { useNavigation } from '@react-navigation/native'
// import R from '../../res'

const map = require('../../assets/map.png')

export default function ClientOrderDetail() {
    const safeAreaInsets = useSafeAreaInsets()
    // const navigation = useNavigation()
    const [order] = useState(false)
    const progress = useSharedValue(3)
    const min = useSharedValue(0)
    const max = useSharedValue(100)

    const goMessage = () => {
        //@ts-ignore
        // navigation.navigate(R.routes.MESSAGE_SCREEN)
    }
    return (
        <View style={[styles.container, { marginTop: safeAreaInsets.top + 23 }]}>
            <View style={styles.header}>
                <BackButton />

                <View style={{ marginLeft: 17 }}>
                    <Body color="#243757" style={styles.title}>
                        Налоговые отчеты
                    </Body>

                    <Body color="#243757" style={styles.description}>
                        Заказ SEAD: 031285438312
                    </Body>

                    <View style={styles.priceBox}>
                        <Body color="#243757" style={styles.priceText}>
                            315.00 ₽
                        </Body>
                    </View>
                </View>

                <TouchableOpacity style={{ marginTop: 7 }} activeOpacity={0.7} onPress={goMessage}>
                    <MessageIcon width={28} height={28} />
                </TouchableOpacity>

                <TouchableOpacity style={{ marginLeft: 14, marginTop: 7 }} activeOpacity={0.7}>
                    <PhoneIcon width={27} height={27} />
                </TouchableOpacity>

                <TouchableOpacity style={{ marginLeft: 14, marginTop: 7 }} activeOpacity={0.7}>
                    <MoreIcon width={25} height={25} />
                </TouchableOpacity>
            </View>

            <View>
                <Body center semiBold>
                    Еще 15-20 минут
                </Body>

                <View style={{ position: 'absolute', right: 0, bottom: 15 }}>
                    <Flag />
                </View>

                <Slider
                    style={styles.tabbar}
                    progress={progress}
                    minimumValue={min}
                    maximumValue={max}
                    bubbleMaxWidth={3}
                    bubbleWidth={0}
                    disableTrackFollow
                    bubbleTranslateY={3}
                    disable
                    sliderHeight={7}
                    renderThumb={() => (
                        <View style={styles.dotCard}>
                            <View style={styles.dot} />
                        </View>
                    )}
                    theme={{
                        disableMinTrackTintColor: 'rgba(147, 122, 234, 1)',
                        maximumTrackTintColor: 'rgba(235, 235, 236, 1)',
                        minimumTrackTintColor: '#000',
                        cacheTrackTintColor: '#333',
                        bubbleBackgroundColor: '#666',
                    }}
                />
            </View>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 150 }}>
                <FastImage source={map} style={styles.image} />

                <View style={styles.orderDetailBox}>
                    {!order && (
                        <View>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <OrderIconActive width={25} height={25} />

                                <Body color="#243757" style={[styles.orderDetailText, { marginLeft: 14 }]}>
                                    Забрать посылку
                                </Body>
                            </View>

                            <Body color="rgba(0, 0, 0, 0.36)" style={styles.orderDetailDescription}>
                                Антонов Власий Борисович
                            </Body>

                            <Body color="#243757" style={[styles.orderDetailText, { marginTop: 3 }]}>
                                Москва, Малая Юшуньская улица, 1к1
                            </Body>
                        </View>
                    )}

                    <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
                        <View style={!order ? { marginTop: 30 } : { marginTop: 9 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <OrderIconActive width={25} height={25} />

                                <Body color="#243757" style={[styles.orderDetailText, { marginLeft: 14 }]}>
                                    Доставить посылку
                                </Body>
                            </View>

                            <Body color="rgba(0, 0, 0, 0.36)" style={styles.orderDetailDescription}>
                                Орехов Вадим Агафонович
                            </Body>

                            <Body color="#243757" style={[styles.orderDetailText, { marginTop: 3 }]}>
                                Москва, Малая Юшуньская улица, 15к1
                            </Body>
                        </View>

                        {order && (
                            <View style={{ marginBottom: 30 }}>
                                <FlagIcon width={20} height={20} />
                            </View>
                        )}
                    </View>

                    <View style={{ marginTop: 40, flexDirection: 'row' }}>
                        <Body color="rgba(0, 0, 0, 0.36)" style={[styles.orderDetailText, { marginTop: 3 }]}>
                            Тариф
                        </Body>

                        <Body color="#243757" style={[styles.orderDetailText, { marginTop: 3 }]}>
                            Срочный
                        </Body>
                    </View>

                    <View style={{ marginTop: 8, flexDirection: 'row' }}>
                        <Body color="rgba(0, 0, 0, 0.36)" style={[styles.orderDetailText, { marginTop: 3 }]}>
                            Срок доставки
                        </Body>

                        <Body color="#243757" style={[styles.orderDetailText, { marginTop: 3 }]}>
                            Срок доставки
                        </Body>
                    </View>

                    <FastImage source={require('../../assets/arr.png')} style={styles.arr} resizeMode="center" />
                </View>
            </ScrollView>
        </View>
    )
}

const styles = ScaledSheet.create({
    container: {
        marginHorizontal: 15,
    },
    header: {
        height: '12%',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: '700',
        marginRight: 23,
    },
    description: {
        fontSize: 12,
        fontWeight: '400',
    },
    priceBox: {
        width: 65,
        height: 27,
        backgroundColor: '#D1EA7A',
        borderRadius: 3,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },
    priceText: {
        fontSize: 13,
        marginHorizontal: 8,
        fontWeight: '600',
    },
    timeBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    timeText: {
        fontSize: 16,
        fontWeight: '400',
    },
    time: {
        fontSize: 17,
        fontWeight: '600',
    },
    image: {
        width: '100%',
        height: 309,
        borderRadius: 10,
        marginTop: 12,
    },
    orderDetailBox: {
        width: '100%',
        backgroundColor: '#F7F9FD',
        marginTop: 16,
        paddingTop: 20,
        paddingLeft: 33,
        paddingBottom: 24,
    },
    orderDetailText: {
        fontSize: 16,
        fontWeight: '600',
        width: 239,
    },
    orderDetailDescription: {
        fontSize: 16,
        fontWeight: '400',
        marginTop: 7,
    },
    buttonShadow: {
        shadowColor: '#243757',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.22,
        shadowRadius: 19,
        elevation: 5,
    },
    button: {
        width: '100%',
        height: 66,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#243757',
        borderRadius: 10,
        marginTop: 16,
    },
    buttonText: {
        fontSize: 15,
        fontWeight: '600',
    },
    arr: {
        width: 29,
        height: 136,
        position: 'absolute',
        right: 20,
        zIndex: 1,
        top: 30,
    },
    tabbar: {
        borderWidth: 1,
        marginTop: 20,
        borderRadius: 100,
    },
    dotCard: {
        backgroundColor: 'rgba(100, 129, 220, 1)',
        borderRadius: '100@s',
    },
    dot: {
        backgroundColor: 'white',
        borderRadius: '100@s',
        margin: '4@s',
        padding: '3@s',
    },
})
