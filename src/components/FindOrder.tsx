import React, { useRef, useState } from 'react'
import { Platform, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import Body from './common/Body'
import { CheckIcon, FilterIcon, Hourglass } from './common/Svgs'
import Button from './common/Button'
import { BottomSheetModal } from '@gorhom/bottom-sheet'
import SortingModal from './SortingModal'
import BottomSheetComponent from './common/BottomSheetModal'
import FilterModal from './FilterModal'
import { useDispatch } from 'react-redux'
import { setInputDisable } from '../state/user/action'
import { useBottomSheetBackHandler } from './common/BottomSheetHandler'

const data = [
    { id: 1, name: 'Все', active: true },
    { id: 2, name: 'Паспорт', active: false },
    { id: 3, name: 'Налоги', active: false },
    { id: 4, name: 'СНИЛС', active: false },
    { id: 5, name: 'Военный билет', active: false },
]

export default function FindOrder() {
    const dispath = useDispatch()

    const [pressSort, setPressSort] = useState(true)
    const [pressFilter, setPressFilter] = useState(true)

    const bottomSheetModalSorting = useRef<BottomSheetModal>(null)
    const bottomSheetModalFilter = useRef<BottomSheetModal>(null)
    const { handleSheetPositionChange } = useBottomSheetBackHandler(bottomSheetModalSorting)
    const { handleSheetPositionChanges } = useBottomSheetBackHandler(bottomSheetModalFilter)
    //---------------------------------------------//
    const showSortingModal = () => {
        setPressFilter(false)
        bottomSheetModalSorting.current?.present()

        dispath(setInputDisable(false))
        setInterval(() => {
            setPressFilter(true)
        }, 2000)
    }

    const onDismissSortingModal = () => {
        bottomSheetModalSorting.current?.dismiss()
        setPressFilter(true)
        dispath(setInputDisable(true))
    }

    //-----------------------------------------//

    const showFilterModal = () => {
        setPressSort(false)
        bottomSheetModalFilter.current?.present()

        dispath(setInputDisable(false))
        setInterval(() => {
            setPressSort(true)
        }, 2000)
    }

    const onDismissFilterModal = () => {
        bottomSheetModalFilter.current?.dismiss()
        setPressSort(true)
        dispath(setInputDisable(true))
    }

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

            <ScrollView
                contentContainerStyle={{ paddingBottom: 150 }}
                showsVerticalScrollIndicator={false}
                style={{ marginHorizontal: 15, marginTop: 23 }}>
                <TouchableOpacity activeOpacity={0.7} style={styles.cardOneBox}>
                    <View>
                        <Body color="#243757" style={[styles.cardTitle, { marginTop: 12 }]}>
                            Военный билет
                        </Body>

                        <Body color="#243757" style={styles.cardOneDescription}>
                            Москва, Малая Юшуньская улица, 1к1
                        </Body>
                    </View>

                    <View style={styles.cardRightBox}>
                        <Hourglass width={15} height={15} />

                        <Body color="#243757" style={styles.clock}>
                            21:10
                        </Body>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.7} style={styles.cardOneBox}>
                    <View>
                        <Body color="#243757" style={[styles.cardTitle, { marginTop: 12 }]}>
                            СНИЛС
                        </Body>

                        <Body color="#243757" style={styles.cardOneDescription}>
                            Москва, Малая Юшуньская улица, 1к1
                        </Body>
                    </View>

                    <View style={styles.cardRightBox}>
                        <Hourglass width={15} height={15} />

                        <Body color="#243757" style={styles.clock}>
                            11:31
                        </Body>
                    </View>
                </TouchableOpacity>

                <View style={styles.cardTwoBox}>
                    <View>
                        <View style={{ flexDirection: 'row', marginTop: 12, alignItems: 'center' }}>
                            <View style={{ marginRight: 9 }}>
                                <CheckIcon width={16} height={16} />
                            </View>

                            <Body color="#243757" style={styles.cardTitle}>
                                Паспорт
                            </Body>
                        </View>

                        <Body color="#243757" style={styles.cardOneDescription}>
                            Москва, Малая Юшуньская улица, 1к1
                        </Body>
                    </View>

                    <View style={{ marginRight: 18, marginTop: 15 }}>
                        <Body color="#243757" style={styles.price}>
                            1 341 ₽
                        </Body>

                        <Body color="#243757" style={styles.deliveredText}>
                            Доставлен
                        </Body>
                    </View>
                </View>

                <View style={styles.cardTwoBox}>
                    <View>
                        <View style={{ flexDirection: 'row', marginTop: 12, alignItems: 'center' }}>
                            <View style={{ marginRight: 9 }}>
                                <CheckIcon width={16} height={16} />
                            </View>

                            <Body color="#243757" style={styles.cardTitle}>
                                Паспорт
                            </Body>
                        </View>

                        <Body color="#243757" style={styles.cardOneDescription}>
                            Москва, Малая Юшуньская улица, 1к1
                        </Body>
                    </View>

                    <View style={{ marginRight: 18, marginTop: 15 }}>
                        <Body color="#243757" style={styles.price}>
                            1 341 ₽
                        </Body>

                        <Body color="#243757" style={styles.deliveredText}>
                            Доставлен
                        </Body>
                    </View>
                </View>

                <View style={styles.cardTwoBox}>
                    <View>
                        <View style={{ flexDirection: 'row', marginTop: 12, alignItems: 'center' }}>
                            <View style={{ marginRight: 9 }}>
                                <CheckIcon width={16} height={16} />
                            </View>

                            <Body color="#243757" style={styles.cardTitle}>
                                Паспорт
                            </Body>
                        </View>

                        <Body color="#243757" style={styles.cardOneDescription}>
                            Москва, Малая Юшуньская улица, 1к1
                        </Body>
                    </View>

                    <View style={{ marginRight: 18, marginTop: 15 }}>
                        <Body color="#243757" style={styles.price}>
                            1 341 ₽
                        </Body>

                        <Body color="#243757" style={styles.deliveredText}>
                            Доставлен
                        </Body>
                    </View>
                </View>

                <View style={styles.cardTwoBox}>
                    <View>
                        <View style={{ flexDirection: 'row', marginTop: 12, alignItems: 'center' }}>
                            <View style={{ marginRight: 9 }}>
                                <CheckIcon width={16} height={16} />
                            </View>

                            <Body color="#243757" style={styles.cardTitle}>
                                Паспорт
                            </Body>
                        </View>

                        <Body color="#243757" style={styles.cardOneDescription}>
                            Москва, Малая Юшуньская улица, 1к1
                        </Body>
                    </View>

                    <View style={{ marginRight: 18, marginTop: 15 }}>
                        <Body color="#243757" style={styles.price}>
                            1 341 ₽
                        </Body>

                        <Body color="#243757" style={styles.deliveredText}>
                            Доставлен
                        </Body>
                    </View>
                </View>
            </ScrollView>

            <View style={{ flexDirection: 'row', marginHorizontal: 15, position: 'absolute', bottom: 24 }}>
                <View style={{ width: '79.3%' }}>
                    {pressSort === true ? (
                        <Button onPress={() => showSortingModal()} buttonType={1} text="СОРТИРОВКА" />
                    ) : (
                        <Button buttonType={1} text="СОРТИРОВКА" />
                    )}
                </View>

                {pressFilter === true ? (
                    <TouchableOpacity onPress={() => showFilterModal()} activeOpacity={0.7} style={styles.filterButton}>
                        <FilterIcon width={21} height={25} />
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity activeOpacity={0.7} style={styles.filterButton}>
                        <FilterIcon width={21} height={25} />
                    </TouchableOpacity>
                )}
            </View>

            <BottomSheetComponent
                onChange={handleSheetPositionChange}
                handleOff
                snapPoints={Platform.OS === 'ios' ? ['40%'] : ['47%']}
                ref={bottomSheetModalSorting}>
                <SortingModal onDismissSortingModal={onDismissSortingModal} />
            </BottomSheetComponent>

            <BottomSheetComponent
                handleOff
                onChange={handleSheetPositionChanges}
                snapPoints={Platform.OS === 'ios' ? ['37%'] : ['42%']}
                ref={bottomSheetModalFilter}>
                <FilterModal onDismissFilterModal={onDismissFilterModal} />
            </BottomSheetComponent>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 18,
    },
    box: {
        height: 28,
        backgroundColor: '#F1F0FE',
        paddingHorizontal: 12,
        justifyContent: 'center',
        borderRadius: 24,
        marginRight: 8,
    },
    text: {
        fontSize: 14,
        letterSpacing: -0.32,
    },
    cardOneBox: {
        width: '100%',
        height: 75,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 5,
        backgroundColor: '#dce8ff',
        paddingLeft: 22,
        marginTop: 10,
    },
    cardTitle: {
        fontSize: 20,
        fontWeight: '600',
        lineHeight: 24,
    },
    cardOneDescription: {
        fontSize: 12,
        fontWeight: '400',
        lineHeight: 24,
    },
    clock: {
        marginTop: 7,
        fontSize: 17,
        fontWeight: '600',
        lineHeight: 20.83,
    },
    cardRightBox: {
        width: 84,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#CEDEFF',
        borderRadius: 5,
    },
    cardTwoBox: {
        width: '100%',
        height: 75,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 5,
        backgroundColor: '#F5F5F5',
        paddingLeft: 22,
        marginTop: 10,
        borderWidth: 1,
        borderColor: '#E8E8F0',
    },
    price: {
        fontSize: 17,
        fontWeight: '600',
        lineHeight: 20.83,
        textAlign: 'right',
    },
    deliveredText: {
        fontSize: 12,
        fontWeight: '400',
        lineHeight: 24,
    },
    filterButton: {
        width: '19.3%',
        height: 66,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#243757',
        borderRadius: 10,
        marginLeft: 5,
    },
})
