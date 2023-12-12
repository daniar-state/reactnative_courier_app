import React from 'react'
import { Image, ScrollView, StyleSheet, View } from 'react-native'
import DropShadow from 'react-native-drop-shadow'

import { s, vs } from 'react-native-size-matters'
import { ICategoryData } from '../../api/ClientHomeData'
import Body from '../../components/common/Body'
import Button from '../../components/common/Button'
import { Space } from '../../components/common/Space'
import Header from '../../components/Header'

import { Formik } from 'formik'

interface IProps {
    route: {
        params: {
            item: ICategoryData
        }
    }
}

export default function Detail({ route }: IProps) {
    const { item } = route.params


    return (
        <Formik 
        initialValues={{}} 
        onSubmit={()=>{}}
        >
            {() => (
        <View style={{ flex: 1 }}>
            <View style={styles.imageCard}>
                <Header title="" />
                <Image source={item.image} style={styles.image} resizeMode="stretch" />
            </View>

            <View style={styles.centerSection}>
                <Space height={25} />

                <Body size={25} semiBold center color="rgba(36, 55, 87, 1)">
                    {item.title}
                </Body>

                <Space height={25} />

                <View style={styles.hr} />

                <Space height={22} />

                <Body center size={25} bold>
                    {item.price}
                </Body>

                <ScrollView style={{ height: 100, marginTop: 20 }}>
                    <Body size={16}>
                        Налоговая отчетность включает в себя совокупность документов, отражающих сведения об исчислении
                        и уплате налогов физическими лицами, индивидуальными предпринимателями и организациями. К
                        налоговой отчетности относится налоговая декларация и налоговый расчет авансового платежа.
                    </Body>
                </ScrollView>

                <DropShadow style={styles.drop}>
                    <Button text="Оформить заказ" style={styles.button} buttonType={2} />
                </DropShadow>
            </View>
        </View>
        )}
        </Formik>
    )
}

const styles = StyleSheet.create({
    card: {
        // marginTop: vs(20),
        marginHorizontal: s(15),
        borderRadius: s(10),
        borderColor: '#E8E8F0',
        paddingVertical: vs(10),
    },
    image: {},
    imageCard: {
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingBottom: 76,
        backgroundColor: '#F7F9FD',
    },
    centerSection: {
        borderTopEndRadius: 10,
        borderTopStartRadius: 10,
        paddingHorizontal: 15,
    },
    hr: {
        borderWidth: 0.5,
        borderColor: 'rgba(161, 173, 191, 0.6)',
    },
    button: {},
    text: {
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10,
    },
    drop: {
        shadowColor: 'white',
        shadowOffset: {
            width: -10,
            height: -55,
        },
        shadowOpacity: 5,
        shadowRadius: 20,
        marginTop: 20,
    },
})
