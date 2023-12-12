import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { BackArrow } from './Svgs'
import { useNavigation } from '@react-navigation/native'

export default function BackButton() {
    const navigation = useNavigation()

    return (
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.button} activeOpacity={0.7}>
            <BackArrow width={18} height={18} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        width: 34,
        height: 34,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        backgroundColor: '#E8E8F0',
    },
})
