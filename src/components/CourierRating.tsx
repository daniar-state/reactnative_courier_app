import React, { useState } from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { ArrowBottom, ArrowTop, Minus } from './common/Svgs'
import { colors } from '../theme/themes'
import Body from './common/Body'

export default function CourierRating() {
    const [chek, setChek] = useState(false)

    const showAllRating = () => {
        setChek(!chek)
    }
    return (
        <>
            <Body color="#243757" style={styles.courierRatingText}>
                Рейтинг курьеров
            </Body>

            <View style={{ paddingHorizontal: 15, width: '100%' }}>
                <View style={styles.ratingBox}>
                    <View style={[styles.tableBox, { borderRadius: 5 }]}>
                        <View style={{ flexDirection: 'row' }}>
                            <Body color="#243757" style={styles.tableNumber}>
                                566
                            </Body>

                            <Body color="#243757" style={[styles.tableName, { marginLeft: 40 }]}>
                                Аркадий Ф.
                            </Body>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <ArrowBottom width={13} height={12} />

                            <Body color="#243757" style={[styles.tableName, { marginLeft: 13 }]}>
                                85
                            </Body>
                        </View>
                    </View>

                    <View style={[styles.tableBox, { backgroundColor: '#DCE8FF' }]}>
                        <View style={{ flexDirection: 'row' }}>
                            <Body color="#243757" style={styles.tableNumber}>
                                567
                            </Body>

                            <Body color="#243757" style={[styles.tableName, { marginLeft: 40 }]}>
                                Игорь Г.
                            </Body>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <ArrowTop width={13} height={12} />

                            <Body color="#243757" style={[styles.tableName, { marginLeft: 13 }]}>
                                83
                            </Body>
                        </View>
                    </View>

                    <View style={styles.tableBox}>
                        <View style={{ flexDirection: 'row' }}>
                            <Body color="#243757" style={styles.tableNumber}>
                                568
                            </Body>

                            <Body color="#243757" style={[styles.tableName, { marginLeft: 40 }]}>
                                Дмитрий П.
                            </Body>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Minus width={13} height={3} />

                            <Body color="#243757" style={[styles.tableName, { marginLeft: 13 }]}>
                                80
                            </Body>
                        </View>
                    </View>

                    {chek ? (
                        <>
                            <View style={styles.tableBox}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Body color="#243757" style={styles.tableNumber}>
                                        568
                                    </Body>

                                    <Body color="#243757" style={[styles.tableName, { marginLeft: 40 }]}>
                                        Дмитрий П.
                                    </Body>
                                </View>

                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Minus width={13} height={3} />

                                    <Body color="#243757" style={[styles.tableName, { marginLeft: 13 }]}>
                                        80
                                    </Body>
                                </View>
                            </View>
                            <View style={styles.tableBox}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Body color="#243757" style={styles.tableNumber}>
                                        568
                                    </Body>

                                    <Body color="#243757" style={[styles.tableName, { marginLeft: 40 }]}>
                                        Дмитрий П.
                                    </Body>
                                </View>

                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Minus width={13} height={3} />

                                    <Body color="#243757" style={[styles.tableName, { marginLeft: 13 }]}>
                                        80
                                    </Body>
                                </View>
                            </View>
                            <View style={styles.tableBox}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Body color="#243757" style={styles.tableNumber}>
                                        568
                                    </Body>

                                    <Body color="#243757" style={[styles.tableName, { marginLeft: 40 }]}>
                                        Дмитрий П.
                                    </Body>
                                </View>

                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Minus width={13} height={3} />

                                    <Body color="#243757" style={[styles.tableName, { marginLeft: 13 }]}>
                                        80
                                    </Body>
                                </View>
                            </View>

                            <View style={styles.tableBox}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Body color="#243757" style={styles.tableNumber}>
                                        568
                                    </Body>

                                    <Body color="#243757" style={[styles.tableName, { marginLeft: 40 }]}>
                                        Дмитрий П.
                                    </Body>
                                </View>

                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Minus width={13} height={3} />

                                    <Body color="#243757" style={[styles.tableName, { marginLeft: 13 }]}>
                                        80
                                    </Body>
                                </View>
                            </View>

                            <View style={styles.tableBox}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Body color="#243757" style={styles.tableNumber}>
                                        568
                                    </Body>

                                    <Body color="#243757" style={[styles.tableName, { marginLeft: 40 }]}>
                                        Дмитрий П.
                                    </Body>
                                </View>

                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Minus width={13} height={3} />

                                    <Body color="#243757" style={[styles.tableName, { marginLeft: 13 }]}>
                                        80
                                    </Body>
                                </View>
                            </View>

                            <View style={styles.tableBox}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Body color="#243757" style={styles.tableNumber}>
                                        568
                                    </Body>

                                    <Body color="#243757" style={[styles.tableName, { marginLeft: 40 }]}>
                                        Дмитрий П.
                                    </Body>
                                </View>

                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Minus width={13} height={3} />

                                    <Body color="#243757" style={[styles.tableName, { marginLeft: 13 }]}>
                                        80
                                    </Body>
                                </View>
                            </View>
                        </>
                    ) : null}
                </View>
            </View>

            <TouchableOpacity activeOpacity={0.7} onPress={showAllRating}>
                <Body color={colors.blue} style={styles.linkText}>
                    Открыть полный рейтинг
                </Body>
            </TouchableOpacity>
        </>
    )
}

const styles = StyleSheet.create({
    courierRatingText: {
        fontSize: 20,
        fontWeight: '600',
    },
    ratingBox: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#E8E8F0',
        borderRadius: 5,
        paddingVertical: 10,
        backgroundColor: '#f8f9fd',
        marginTop: 16,
    },
    tableBox: {
        height: 26,
        paddingHorizontal: 18,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    tableNumber: {
        fontSize: 16,
        fontWeight: '400',
    },
    tableName: {
        fontSize: 16,
        fontWeight: '500',
    },
    linkText: {
        marginTop: 10,
        fontWeight: '500',
        fontSize: 12,
    },
})
