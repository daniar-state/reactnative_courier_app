import { createStackNavigator } from '@react-navigation/stack'

import React from 'react'
import Home from '../../screens/Home'

const HomeStack = () => {
    const Stack = createStackNavigator()

    return (
        <Stack.Navigator>
            <Stack.Screen
                component={Home}
                name={'HomeClient'}
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    )
}

export default HomeStack
