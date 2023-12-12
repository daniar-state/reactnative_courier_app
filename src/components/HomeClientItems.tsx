import React from 'react'
import Body from './common/Body'
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import { ICategoryData } from '../api/ClientHomeData'
import { useNavigation } from '@react-navigation/native'
import { Space } from './common/Space'

const HomeClientItems = ({ data }: { data: ICategoryData }) => {
    const navigation = useNavigation()

    const goDetail = () => {
        //@ts-ignore
        navigation.navigate('Detail', { item: data })
    }

    return (
        <View
            style={{
                borderWidth: 1,
                marginBottom: 15,
                width: '48%',

                borderRadius: 5,
                borderColor: 'rgba(232, 232, 240, 1)',
            }}>
            <View>
                <View style={styles.imageCard}>
                    <TouchableOpacity style={styles.imagePlusCard} onPress={goDetail}>
                        <Image source={require('../assets/plus.png')} style={styles.pluseImage} />
                    </TouchableOpacity>

                    <Image source={data.image} style={styles.image} resizeMode="stretch" />

                    {data.promo ? (
                        <View style={styles.promo}>
                            <Body size={13}>-10%</Body>
                        </View>
                    ) : null}
                </View>

                <Body size={14} style={styles.price}>
                    {data.title}
                </Body>
                <Space height={2} />
                <View style={styles.priceStyle}>
                    <Body size={17} semiBold>
                        189 ₽
                    </Body>

                    {data.promo ? (
                        <Body size={13} color="#A1ADBF" style={styles.promoStyle}>
                            289 ₽
                        </Body>
                    ) : null}
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    imageCard: {
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#E8E8F0',
        backgroundColor: '#F7F9FD',
        borderColor: '#E8E8F0',
        paddingBottom: 20,
        paddingTop: 30,
    },
    image: {
        width: 54,
        height: 77.98,
    },
    priceStyle: {
        paddingBottom: 17,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    pluseImage: {
        width: 24,
        height: 24,
    },
    imagePlusCard: {
        position: 'absolute',
        top: 10,
        right: 15,
        paddingBottom: 30,
        paddingLeft: 30,
    },
    price: {
        paddingLeft: 10,
        marginTop: 10,
        // borderWidth: 1,
    },
    promo: {
        position: 'absolute',
        top: 9,
        left: 12,
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 3,
        backgroundColor: '#D1EA7A',
    },
    promoStyle: {
        fontSize: 13,
        marginLeft: 15,
        textDecorationLine: 'line-through',
    },
})

export default HomeClientItems
