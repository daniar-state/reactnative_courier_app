import React from 'react'
import Body from './common/Body'
import { StyleSheet, View } from 'react-native'
import Button from './common/Button'

interface IProps {
    onDismissFilterModal: () => void
}

export default function FilterModal({ onDismissFilterModal }: IProps) {
    return (
        <View>
            <View style={styles.container}>
                <Body color="#243757" style={styles.title}>
                    Фильтр
                </Body>
            </View>

            <View style={{ marginHorizontal: 30, marginVertical: 21 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Body color="#243757" style={styles.item}>
                        Город
                    </Body>

                    <Body color="#937AEA" style={[styles.item, { fontWeight: '500' }]}>
                        Москва
                    </Body>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 15 }}>
                    <Body color="#243757" style={styles.item}>
                        Район
                    </Body>

                    <Body color="#243757" style={[styles.item, { fontWeight: '500' }]}>
                        Любой
                    </Body>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 15 }}>
                    <Body color="#243757" style={styles.item}>
                        Тип посылки
                    </Body>

                    <Body color="#243757" style={[styles.item, { fontWeight: '500' }]}>
                        Любой
                    </Body>
                </View>
            </View>

            <View style={{ marginHorizontal: 15, marginTop: 27 }}>
                <Button onPress={() => onDismissFilterModal()} buttonType={1} text="ПРИМЕНИТЬ" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 30,
        paddingTop: 33,
    },
    title: {
        fontSize: 20,
        fontWeight: '600',
        lineHeight: 24.5,
    },
    item: {
        fontSize: 16,
        fontWeight: '400',
    },
})
