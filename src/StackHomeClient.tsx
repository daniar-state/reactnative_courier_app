import { createStackNavigator } from '@react-navigation/stack'

import React from 'react'
import Detail from './screens/Client/Detail'
import HomeClient from './screens/Client/HomeClient'

const ClientHomeStack = () => {
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
        </Stack.Navigator>
    )
}

export default ClientHomeStack
