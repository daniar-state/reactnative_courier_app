import React from 'react'
import { FlatList, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import Body from '../common/Body'
import OrdersData from '../../api/OrdersData'
import OrdersITEM from './OrdersITEM'

const data = [
    { id: 1, name: 'Все', active: true },
    { id: 2, name: 'Паспорт', active: false },
    { id: 3, name: 'Налоги', active: false },
    { id: 4, name: 'СНИЛС', active: false },
    { id: 5, name: 'Военный билет', active: false },
]

export default function CompleteOrders() {
    return (
        <View style={styles.container}>
            <ScrollView
                showsHorizontalScrollIndicator={false}
                horizontal
                contentContainerStyle={{ paddingRight: 35, paddingHorizontal: 16 }}>
                {data?.map(item => (
                    <TouchableOpacity
                        key={item?.id}
                        activeOpacity={0.7}
                        style={[styles.box, { backgroundColor: item?.active ? '#F1F0FE' : '#F7F9FD' }]}>
                        <Body medium color={item?.active ? '#937AEA' : '#A1ADBF'} style={styles.text}>
                            {item.name}
                        </Body>
                    </TouchableOpacity>
                ))}
            </ScrollView>

            <FlatList
                data={OrdersData}
                keyExtractor={item => item.id.toString()}
                style={{ marginBottom: 35 }}
                //@ts-ignore
                renderItem={({ item }) => <OrdersITEM item={item} />}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 18,
    },
    box: {
        height: 28,
        paddingHorizontal: 12,
        justifyContent: 'center',
        borderRadius: 24,
        marginRight: 8,
    },
    text: {
        fontSize: 14,
        letterSpacing: -0.32,
    },
})
