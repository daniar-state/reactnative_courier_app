import { createStackNavigator } from '@react-navigation/stack'

import React from 'react'
import ClientOrder from '../../screens/Client/ClientOrders'
import ClientOrderDetail from '../../screens/Client/ClientOrederDetal'

const OrdersClientStack = () => {
    const Stack = createStackNavigator()

    return (
        <Stack.Navigator>
            <Stack.Screen
                component={ClientOrder}
                name={'ClientOrder'}
                options={{
                    headerShown: false,
                }}
            />

            <Stack.Screen
                component={ClientOrderDetail}
                name={'ClientOrderDetail'}
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    )
}

export default OrdersClientStack
