import React, { useRef, useState } from 'react'
import { Animated, Dimensions, StyleSheet, TouchableOpacity, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Body from '../components/common/Body'
import { useNavigation } from '@react-navigation/native'
import PagerView from 'react-native-pager-view'
import LinearGradient from 'react-native-linear-gradient'
import FastImage from 'react-native-fast-image'
import Button from '../components/common/Button'
import { ArrowRight } from '../components/common/Svgs'
import { postRole } from '../state/user/action'
// import { useDispatch } from 'react-redux'
import { useAppDispatch } from '../hooks/redux'
import { userTypeEnum } from '../enums'
// import { IRole } from '../types/data'

const { height } = Dimensions.get('window')

const courier = require('../assets/courier.png')
const client = require('../assets/client.png')

export default function ProfileType() {
    const [currentPage, setCurrentPage] = useState(1)
    const [colorValue] = useState(new Animated.Value(0))

    const safeAreaInsets = useSafeAreaInsets()
    const navigation = useNavigation()
    const pagerRef = useRef<PagerView | null>(null)
    const dispatch = useAppDispatch()

    // const submit = (data: IRole) => {
    //     dispatch(
    //         postRole({
    //             data,
    //             onSuccess: () => {
    //                 //@ts-ignore
    //                 navigation.navigate(R.routes.PROFILE_TYPE)
    //             },

    //         }),
    //     )
    // }

    const goClient = () => {
        dispatch(postRole({ data: { role: userTypeEnum.CLIENT } }))
        //@ts-ignore
        navigation.navigate('ClientRegistrArgumet')
    }

    const goCurier = () => {
        dispatch(postRole({ data: { role: userTypeEnum.COURIER } }))
        //@ts-ignore
        navigation.navigate('CourierProfileData')
    }

    // const changeUserType = () => {
    //     if (currentPage === 1) {
    //         dispatch(userType(false))
    //     } else {
    //         dispatch(userType(true))
    //     }
    // }

    // useEffect(() => {
    //     changeUserType
    // }, [])

    const titleColor = colorValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['rgba(36, 55, 87, 1)', 'rgba(255, 255, 255, 1)'],
    })

    const tabBarRunner = colorValue.interpolate({
        inputRange: [0, 1],
        outputRange: [4, 133],
    })

    const tabBarRunnerBackgroundColor = colorValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['rgba(209, 234, 122, 1)', 'rgba(173, 134, 240, 1)'],
    })

    const tabBarRunnerColor = colorValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['#000', '#fff'],
    })

    function onPageSelected(e: any) {
        Animated.timing(colorValue, {
            toValue: e.nativeEvent.position + 1 === 1 ? 0 : 1,
            duration: 200,
            useNativeDriver: false,
        }).start()

        setCurrentPage(e.nativeEvent.position + 1)
    }

    function onPageScroll(e: any) {
        Animated.timing(colorValue, {
            toValue: e.nativeEvent.position + 1 === 1 ? e.nativeEvent.offset : 1 - e.nativeEvent.offset,
            duration: 0,
            useNativeDriver: false,
        }).start()

        setCurrentPage(e.nativeEvent.position + 1)
    }

    return (
        <View style={[styles.container, { paddingTop: safeAreaInsets.top + 26 }]}>
            <Animated.Text style={[styles.title, { color: titleColor }]}>
                Выберите тип{'\n'}вашего профиля
            </Animated.Text>

            <View style={styles.tabBar}>
                <Animated.View
                    style={[styles.tabBarRunner, { left: tabBarRunner, backgroundColor: tabBarRunnerBackgroundColor }]}
                />

                <TouchableOpacity onPress={() => pagerRef.current?.setPage(0)} style={styles.tabBarItem}>
                    <Body semiBold color="rgba(36, 55, 87, 1)">
                        Курьер
                    </Body>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => pagerRef.current?.setPage(1)} style={styles.tabBarItem}>
                    <Animated.Text style={{ fontFamily: 'Gilroy-SemiBold', color: tabBarRunnerColor }}>
                        Пользователь
                    </Animated.Text>
                </TouchableOpacity>
            </View>

            <View style={[styles.pagerContainer, { height: height + safeAreaInsets.top }]}>
                <PagerView
                    onPageSelected={onPageSelected}
                    onPageScroll={onPageScroll}
                    style={styles.pagerView}
                    initialPage={0}
                    ref={r => (pagerRef.current = r)}>
                    <View key="1">
                        <LinearGradient
                            colors={['#D1EA7A', '#BED962']}
                            angle={90}
                            useAngle
                            locations={[0.5, 0.9]}
                            style={styles.page}>
                            <FastImage source={courier} style={styles.courierImage} resizeMode="contain" />
                        </LinearGradient>
                    </View>

                    <View key="2">
                        <View style={[styles.page, { backgroundColor: '#AD86F0' }]}>
                            <FastImage source={client} style={styles.clientImage} resizeMode="contain" />
                        </View>
                    </View>
                </PagerView>
            </View>

            <Button
                onPress={currentPage === 1 ? goCurier : goClient}
                renderContent={() => (
                    <>
                        <Body style={{ marginRight: 80 }} semiBold color="rgba(255, 255, 255, 1)" size={15}>
                            ДАЛЕЕ
                        </Body>

                        <ArrowRight />
                    </>
                )}
                buttonType={3}
                text="Далее"
                containerStyle={styles.nextButton}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    pagerContainer: {
        width: '100%',
        flex: 1,
        position: 'absolute',
    },
    tabBarItem: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    tabBarRunner: {
        width: 125,
        height: '100%',
        borderRadius: 6,
        position: 'absolute',
        top: 4,
        left: 4,
    },
    tabBar: {
        backgroundColor: 'white',
        width: 262,
        borderRadius: 10,
        padding: 4,
        height: 44,
        zIndex: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 26,
        marginBottom: 20,
        zIndex: 10,
        textAlign: 'center',
        fontFamily: 'Gilroy-Bold',
    },
    container: {
        flex: 1,
        alignItems: 'center',
    },
    pagerView: {
        flex: 1,
    },
    page: {
        flex: 1,
        alignItems: 'center',
        top: 0,
    },
    courierImage: {
        width: 258,
        height: '63%',
        position: 'absolute',
        bottom: 91,
    },
    clientImage: {
        width: 310,
        height: '55%',
        position: 'absolute',
        bottom: 91,
    },
    nextButton: {
        position: 'absolute',
        bottom: 10,
        width: 258,
    },
})
