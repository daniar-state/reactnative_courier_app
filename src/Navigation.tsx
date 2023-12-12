import React from 'react'
import { StatusBar, StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { DefaultTheme, NavigationContainer } from '@react-navigation/native'
import Home from './screens/Home'
import Profile from './screens/Profile'
import {
    HomeActive,
    HomeDefault,
    MessageActive,
    MessageDefault,
    OrderActive,
    OrderDefault,
    ProfileActive,
    ProfileDefault,
} from './components/common/Svgs'
import Orders from './screens/Orders'
import Messages from './screens/Messages'
import { colors } from './theme/themes'
import AuthNavigator from './screens/AuthNavigator'
import OrderDetail from './screens/OrderDetail'
import Login from './screens/Login'
import Register from './screens/Register'
import ResetPasswordEmail from './screens/ResetPasswordEmail'
import ResetPasswordSave from './screens/ResetPasswordSave'
import ConfirmEmail from './screens/ConfirmEmail'
import ProfileType from './screens/ProfileType'
import CourierProfileData from './screens/CourierProfileData'
import SigningAnAgreement from './screens/SigningAnAgreement'
import ClientRegistrArgumet from './screens/Client/RegistrArgument'
import Detail from './screens/Client/Detail'
import ClientHomeStack from './StackHomeClient'
import ClientOrder from './screens/Client/ClientOrders'
import { MessageScreen } from './components/messages/MessageScreen'

const Stack = createStackNavigator()

const Tab = createBottomTabNavigator()

export const Navigation = () => {
    const theme = { ...DefaultTheme, colors: { ...DefaultTheme.colors, background: colors.white } }

    return (
        <>
            <StatusBar translucent backgroundColor="transparent" />

            <NavigationContainer theme={theme}>
                <Stack.Navigator initialRouteName="AuthNavigator" screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="AuthNavigator" component={AuthNavigator} />
                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="Register" component={Register} />
                    <Stack.Screen name="ConfirmEmail" component={ConfirmEmail} />
                    <Stack.Screen name="ResetPasswordEmail" component={ResetPasswordEmail} />
                    <Stack.Screen name="ResetPasswordSave" component={ResetPasswordSave} />
                    <Stack.Screen name="ProfileType" component={ProfileType} />
                    <Stack.Screen name="CourierProfileData" component={CourierProfileData} />
                    <Stack.Screen name="SigningAnAgreement" component={SigningAnAgreement} />
                    {/*/@ts-ignore/*/}
                    <Stack.Screen name="Detail" component={Detail} />

                    <Stack.Screen name="ClientRegistrArgumet" component={ClientRegistrArgumet} />
                    {/*/@ts-ignore/*/}
                    <Stack.Screen name="MessageScreen" component={MessageScreen} />
                    <Stack.Screen name="TabScreen" component={TabScreen} />
                    <Stack.Screen name="ClientTabScreen" component={ClientTabScreen} />
                    <Stack.Screen name="OrderDetail" component={OrderDetail} />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    )
}

function TabScreen() {
    return (
        <Tab.Navigator screenOptions={{ tabBarStyle: styles.tabHeader, tabBarShowLabel: false }}>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'flex-end', marginTop: -7 }}>
                            {focused ? (
                                <HomeActive width={42} height={43} color={'#EEFFED'} />
                            ) : (
                                <HomeDefault width={28} height={43} color="#A0ACBE" />
                            )}
                        </View>
                    ),
                }}
            />

            <Tab.Screen
                name="Orders"
                component={Orders}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'flex-end', marginTop: -7 }}>
                            <View style={[styles.notificationBox, !focused && { right: -7 }]}>
                                <Text style={styles.notificationText}>2</Text>
                            </View>

                            {focused ? (
                                <OrderActive width={42} height={43} color={'#EEFFED'} />
                            ) : (
                                <OrderDefault width={28} height={43} color="#A0ACBE" />
                            )}
                        </View>
                    ),
                }}
            />

            <Tab.Screen
                name="Messages"
                component={Messages}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'flex-end', marginTop: -7 }}>
                            {focused ? (
                                <MessageActive width={42} height={43} color={'#EEFFED'} />
                            ) : (
                                <MessageDefault width={28} height={43} color="#A0ACBE" />
                            )}
                        </View>
                    ),
                }}
            />

            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'flex-end', marginTop: -7 }}>
                            {focused ? (
                                <ProfileActive width={42} height={43} color={'#EEFFED'} />
                            ) : (
                                <ProfileDefault width={28} height={43} color="#A0ACBE" />
                            )}
                        </View>
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    tabHeader: {
        width: '100%',
        height: 70,
        paddingBottom: 20,
        borderTopWidth: 0,
        backgroundColor: '#f7f9fd',
    },
    notificationBox: {
        width: 17,
        height: 17,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10000,
        backgroundColor: colors.darkBlue,
        position: 'absolute',
        marginTop: 4,
        zIndex: 100,
    },
    notificationText: {
        fontSize: 10,
        color: colors.white,
        fontWeight: '500',
    },
})

function ClientTabScreen() {
    return (
        <Tab.Navigator screenOptions={{ tabBarStyle: styless.tabHeader, tabBarShowLabel: false }}>
            <Tab.Screen
                name="ClientHomeStack"
                component={ClientHomeStack}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'flex-end', marginTop: -7 }}>
                            {focused ? (
                                <HomeActive width={42} height={43} color={'#EEFFED'} />
                            ) : (
                                <HomeDefault width={28} height={43} color="#A0ACBE" />
                            )}
                        </View>
                    ),
                }}
            />

            <Tab.Screen
                name="ClientOrder"
                component={ClientOrder}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'flex-end', marginTop: -7 }}>
                            <View style={[styless.notificationBox, !focused && { right: -7 }]}>
                                <Text style={styless.notificationText}>2</Text>
                            </View>

                            {focused ? (
                                <OrderActive width={42} height={43} color={'#EEFFED'} />
                            ) : (
                                <OrderDefault width={28} height={43} color="#A0ACBE" />
                            )}
                        </View>
                    ),
                }}
            />

            <Tab.Screen
                name="Messages"
                component={Messages}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'flex-end', marginTop: -7 }}>
                            {focused ? (
                                <MessageActive width={42} height={43} color={'#EEFFED'} />
                            ) : (
                                <MessageDefault width={28} height={43} color="#A0ACBE" />
                            )}
                        </View>
                    ),
                }}
            />

            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'flex-end', marginTop: -7 }}>
                            {focused ? (
                                <ProfileActive width={42} height={43} color={'#EEFFED'} />
                            ) : (
                                <ProfileDefault width={28} height={43} color="#A0ACBE" />
                            )}
                        </View>
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

const styless = StyleSheet.create({
    tabHeader: {
        width: '100%',
        height: 70,
        paddingBottom: 20,
        borderTopWidth: 0,
        backgroundColor: '#f7f9fd',
    },
    notificationBox: {
        width: 17,
        height: 17,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10000,
        backgroundColor: colors.darkBlue,
        position: 'absolute',
        marginTop: 4,
        zIndex: 100,
    },
    notificationText: {
        fontSize: 10,
        color: colors.white,
        fontWeight: '500',
    },
})
