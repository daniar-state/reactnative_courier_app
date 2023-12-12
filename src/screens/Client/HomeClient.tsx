import React, { useState } from 'react'
import { ScaledSheet } from 'react-native-size-matters/extend'
import { Dimensions, TextInput, TouchableOpacity, View, Platform, FlatList } from 'react-native'
import FastImage from 'react-native-fast-image'
import { FlagIcon, SearchIcon } from '../../components/common/Svgs'
import { colors } from '../../theme/themes'
import DropShadow from 'react-native-drop-shadow'
import { useSharedValue } from 'react-native-reanimated'
import { Slider } from 'react-native-awesome-slider'
import CategoryData from '../../api/ClientHomeData'

const user = require('../../assets/use.png')
const header = require('../../assets/head.png')
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import Body from '../../components/common/Body'
import Button from '../../components/common/Button'
import HomeClientItems from '../../components/HomeClientItems'
import { useNavigation } from '@react-navigation/native'

const { width } = Dimensions.get('window')

export default interface IData {
    id?: number
    title?: string
}

export default function HomeClient() {
    const progress = useSharedValue(3)
    const min = useSharedValue(0)
    const max = useSharedValue(100)

    const [tips, setTips] = useState(false)
    const [text, setText] = useState<string>('')
    const safeAreaInsets = useSafeAreaInsets()

    const navigation = useNavigation()

    const pressNewOreder = () => {
        //@ts-ignore
        navigation.navigate('ContactDetails')
    }

    async function handleChange(e: string) {
        setText(e)
    }

    return (
        <View>
            <View style={{ alignItems: 'center' }}>
                <FastImage source={header} style={styles.headerImage} />

                <View style={[styles.userBox, { top: 18 + safeAreaInsets.top }]}>
                    <View style={{ flexDirection: 'column' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <FastImage source={user} style={styles.image} />

                            <View style={{ marginLeft: 14 }}>
                                <Body color="white" style={{ fontSize: 20, fontWeight: '700' }}>
                                    Ирина З.
                                </Body>
                            </View>
                        </View>

                        <View style={{ marginLeft: 80, marginTop: -20 }}>
                            <TouchableOpacity onPress={() => setTips(!tips)} activeOpacity={0.7}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Body color="white" style={styles.title}>
                                        Москва, Российская улица, 161/3
                                    </Body>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>

            <View style={{ paddingHorizontal: 16, marginTop: -88 }}>
                <DropShadow style={styles.orderBox}>
                    <View style={styles.orderBoxContainer}>
                        <View>
                            <Body color="#243757" bold style={styles.currentOrdersText}>
                                Заказ в процессе!
                            </Body>
                        </View>

                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                            }}>
                            <TouchableOpacity onPress={() => navigation.navigate('OrderDetail')}>
                                <Body color="#A1ADBF" style={styles.openOrdersText}>
                                    Посмотреть детали
                                </Body>
                            </TouchableOpacity>
                            <View style={{ position: 'absolute', right: 0, top: 8 }}>
                                <FlagIcon width={24} height={24} color="#A0ACBE" />
                            </View>
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
                            sliderHeight={10}
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
                </DropShadow>
            </View>
            <FlatList
                data={CategoryData}
                columnWrapperStyle={styles.flatColumn}
                showsVerticalScrollIndicator={false}
                numColumns={2}
                keyExtractor={item => item.id.toString()}
                //@ts-ignore
                renderItem={({ item }) => <HomeClientItems data={item} />}
                ListFooterComponent={() => <View style={{ paddingBottom: 300 }} />}
                ListHeaderComponent={() => (
                    <View style={{ marginHorizontal: 20 }}>
                        <Button buttonType={2} text="Новый заказ" style={styles.btn} onPress={pressNewOreder} />

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

                        <Body size={20} bold>
                            Документы
                        </Body>
                    </View>
                )}
            />
        </View>
    )
}

const styles = ScaledSheet.create({
    container: {
        alignItems: 'center',
    },
    userBox: {
        flexDirection: 'row',
        borderRadius: 10000,
        // justifyContent: 'center',
        left: 25,
        position: 'absolute',
    },
    image: {
        width: '51@vs',
        height: '51@vs',
        marginTop: '20@vs',
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
        marginBottom: '10@vs',
    },
    orderBoxContainer: {
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        borderRadius: 10,
        backgroundColor: colors.white,
        paddingVertical: '10@vs',
        paddingBottom: '35@vs',
    },
    currentOrdersText: {
        fontSize: 17,

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
        marginTop: '0@vs',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F7F9FD',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#E8E8F0',
        paddingLeft: 14,
        paddingHorizontal: 21,
        overflow: 'hidden',
        marginBottom: 15,
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
    sliderButton: {
        borderWidth: 1,
        flex: 1,

        width: width,
        position: 'absolute',
        bottom: 20,
        transform: [{ scaleX: 1 }, { scaleY: 5 }],
        borderRadius: '40@s',
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
        margin: '5@s',
        padding: '4@s',
    },
    btn: {
        marginTop: '10@vs',
    },
    flatColumn: {
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginTop: 10,
    },
    flatContent: {
        // marginTop: '10@s',
        // marginBottom: '100@s',
        // paddingBottom: '30@vs',
        paddingHorizontal: '15@s',
        // backgroundColor: 'red',
        paddingVertical: 10,
    },

    card: {
        height: '100%',
        // backgroundColor: 'red',
        padding: '20@s',
        marginTop: '5@s',
        marginBottom: '20@s',
        marginVertical: '50@vs',
    },

    //
})
