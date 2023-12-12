import React, { useState } from 'react'
import { Dimensions, Image, StyleSheet, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Logo } from '../components/common/Svgs'
import Body from '../components/common/Body'
import { colors } from '../theme/themes'
import Button from '../components/common/Button'
import { useNavigation } from '@react-navigation/native'

const image = require('../assets/auth-container-image.png')
const { width, height } = Dimensions.get('window')

export default function AuthNavigator() {
    const safeAreaInsets = useSafeAreaInsets()
    const navigation = useNavigation()
    const [navi, setNavi] = useState('1')
    const [regi, setregi] = useState('2')

    // const pressNavi = () => {
    //     if (!navi) {
    //         //@ts-ignore
    //         navigation.navigate('Login')
    //         setNavi(true)
    //     } else {
    //         //@ts-ignore
    //         navigation.navigate('Register')
    //         setNavi(false)
    //     }
    // }

    const pressLogin = async () => {
        setNavi('1')
        setregi('0')
        await navigation.navigate('Login')
        setregi('2')
    }

    const pressRegister = async () => {
        setregi('2')
        setNavi('0')
        await navigation.navigate('Register')
        setNavi('1')
    }

    return (
        <View style={[styles.container, { paddingTop: safeAreaInsets.top + 33 }]}>
            <Logo width={53} height={58} />

            <Body style={{ marginTop: 14, paddingHorizontal: 20 }} center bold size={36} color="#fff">
                Название приложения
            </Body>

            <Image
                resizeMode="contain"
                source={image}
                style={[
                    styles.image,
                    {
                        top: height < width * 1.55 + 200 ? 220 : undefined,
                        bottom: height < width * 1.55 + 200 ? undefined : 0,
                    },
                ]}
            />

            <View style={styles.buttonsContainer}>
                {/*// @ts-ignore*/}
                <Button onPress={navi === '1' ? pressLogin : pressRegister} buttonType={1} text="ВОЙТИ" />
                {/*// @ts-ignore*/}
                <Button onPress={regi === '2' ? pressRegister : pressLogin} buttonType={2} text="ЗАРЕГИСТРИРОВАТЬСЯ" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.lavender,
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: width * 1.55,
        position: 'absolute',
    },
    buttonsContainer: {
        position: 'absolute',
        bottom: height < width * 1.55 + 200 ? 10 : 35,
        width: '100%',
        paddingHorizontal: 16,
    },
})
