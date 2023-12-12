import { createStackNavigator } from '@react-navigation/stack'

import React from 'react'
import ContactDetails from '../../screens/Client/ContactDetails'
import Detail from '../../screens/Client/Detail'
import HomeClient from '../../screens/Client/HomeClient'
import OrderParametrs from '../../screens/Client/OrderParametrs'
import PayClient from '../../screens/Client/PayClien'
import Rate from '../../screens/Client/Rate'

const HomeClientStack = () => {
    const Stack = createStackNavigator()

    return (
        <Stack.Navigator>
            <Stack.Screen
                component={HomeClient}
                name={'HomeClient'}
                options={{
                    headerShown: false,
                }}
            />

            <Stack.Screen
                //@ts-ignore
                component={Detail}
                name={'Detail'}
                options={{
                    headerShown: false,
                }}
            />

            <Stack.Screen
                component={ContactDetails}
                name={'ContactDetails'}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                component={OrderParametrs}
                name={'OrderParametrs'}
                options={{
                    headerShown: false,
                }}
            />

            <Stack.Screen
                component={Rate}
                name={'Rate'}
                options={{
                    headerShown: false,
                }}
            />

            <Stack.Screen
                component={PayClient}
                name={'PayClient'}
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    )
}

export default HomeClientStack
