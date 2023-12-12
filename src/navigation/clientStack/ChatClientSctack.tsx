import { createStackNavigator } from '@react-navigation/stack'

import React from 'react'
import Messages from '../../screens/Messages'

const ChatClientStack = () => {
    const Stack = createStackNavigator()

    return (
        <Stack.Navigator>
            <Stack.Screen
                component={Messages}
                name={'Messages'}
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    )
}

export default ChatClientStack
