import React from 'react'
import Body from './common/Body'
import { StyleSheet, View } from 'react-native'
import Button from './common/Button'

interface IProps {
    onDismissSortingModal: () => void
}

export default function SortingModal({ onDismissSortingModal }: IProps) {
    return (
        <View>
            <View style={styles.container}>
                <Body color="#243757" style={styles.title}>
                    Сортировать
                </Body>

                <Body color="#A1ADBF" style={styles.description}>
                    По убыванию
                </Body>
            </View>

            <View style={{ marginHorizontal: 30, marginVertical: 21 }}>
                <Body color="#243757" style={styles.item}>
                    Названию
                </Body>

                <Body color="#243757" style={[styles.item, { marginTop: 15 }]}>
                    Цене
                </Body>

                <Body color="#243757" style={[styles.item, { marginTop: 15 }]}>
                    Новизне
                </Body>

                <Body color="#243757" style={[styles.item, { marginTop: 15 }]}>
                    Времени на доставку
                </Body>
            </View>

            <View style={{ marginHorizontal: 15, marginTop: 25 }}>
                <Button onPress={() => onDismissSortingModal()} buttonType={1} text="ПРИМЕНИТЬ" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 30,
        paddingTop: 33,
    },
    title: {
        fontSize: 20,
        fontWeight: '600',
        lineHeight: 24.5,
    },
    description: {
        fontSize: 15,
        fontWeight: '400',
    },
    item: {
        fontSize: 16,
        fontWeight: '400',
    },
})
