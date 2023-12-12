import React from 'react'
import { TouchableOpacity, View, ViewStyle } from 'react-native'
import Body from './common/Body'
// import MyOrders from './MyOrders'
// import FindOrder from './FindOrder'
import BackButton from './common/BackButton'
import { ScaledSheet } from 'react-native-size-matters/extend'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Dots } from './common/Svgs'

// const FirstRoute = () => <MyOrders />

// const SecondRoute = () => <FindOrder />

// const renderScene = SceneMap({
//     first: FirstRoute,
//     second: SecondRoute,
// })

interface IProps {
    title: string
    style?: ViewStyle
    icon?: boolean
}

export default function Header({ title, style, icon = false }: IProps) {
    const safeAreaInsets = useSafeAreaInsets()

    return (
        <View style={[styles.container, { marginTop: safeAreaInsets.top + 26 }, style]}>
            <BackButton />

            <Body color="rgba(36, 55, 87, 1)" center size={25} bold style={styles.title}>
                {title}
            </Body>

            {icon ? (
                <TouchableOpacity style={styles.icon}>
                    <Dots />
                </TouchableOpacity>
            ) : (
                <View style={{ width: 50, height: 10 }} />
            )}
        </View>
    )
}

const styles = ScaledSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 15,
        marginBottom: 30,
    },
    title: {
        maxWidth: '75%',
        flex: 0,
    },
    icon: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 20,
    },
})
