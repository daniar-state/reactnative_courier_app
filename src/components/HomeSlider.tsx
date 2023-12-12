import React from 'react'
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { ISLiderData } from '../api/SliderData'

interface iData {
    item: ISLiderData
}

export default function HomeSlider({ item }: iData) {
    return (
        <TouchableOpacity style={styles.card} activeOpacity={0.7}>
            <ImageBackground source={item.imageBack} style={styles.image} resizeMethod={'auto'}>
                <View style={{ marginTop: 20 }}>
                    {item.text ? <Text style={styles.miniText}>{item.text}</Text> : null}
                    <Text style={[styles.text, item.id === 2 ? { color: 'black' } : { color: 'white' }]}>
                        {item.title}
                    </Text>
                    {item.image ? <Image source={item.image} style={styles.kart} /> : null}
                </View>
            </ImageBackground>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        marginRight: 10,
        borderRadius: 35,
        width: 190,
    },
    input: {
        // backgroundColor: 'red',
    },
    image: {
        height: 199,
    },
    text: {
        // paddingTop: 28,
        textAlign: 'center',
        fontSize: 15,
        fontFamily: 'Gilroy-Medium',
    },
    miniText: {
        fontSize: 13,
        fontFamily: 'Gilroy-Light',
        color: 'rgba(255, 255, 255, 0.76)',
        textAlign: 'center',
    },
    kart: {
        width: 173,
        height: 149,
        marginTop: 10,
    },
})
