import * as React from 'react'
import { useWindowDimensions } from 'react-native'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view'
import { colors } from '../theme/themes'
import Body from './common/Body'
import MyOrders from './MyOrders'
import FindOrder from './FindOrder'
import SettingProfile from './SettingProfile'
import DataProfile from './DataProfile'
import ParolProfile from './ParolProfile'
import ActiveOrders from './Client/ActiveOreders'
import AllOrders from './Client/AllOrders'
import CompleteOrders from './Client/CompleteOreders'

const FirstRoute = () => <MyOrders />

const SecondRoute = () => <FindOrder />

const Setting = () => <SettingProfile />

const Data = () => <DataProfile />

const Parol = () => <ParolProfile />

//client

const AllOrder = () => <AllOrders />

const ActiveOrder = () => <ActiveOrders />

const CompleteOrder = () => <CompleteOrders />

const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    Setting,
    Data,
    Parol,
    all: AllOrder,
    active: ActiveOrder,
    complete: CompleteOrder,
})

interface IProps {
    routes: any
    index: number
    setIndex: (value: number) => void
}

export default function TabViewExample({ index, setIndex, routes }: IProps) {
    const layout = useWindowDimensions()

    return (
        <TabView
            renderTabBar={props => (
                <TabBar
                    {...props}
                    renderLabel={title => (
                        <Body color={title?.focused ? '#937AEA' : '#A1ADBF'} size={15} style={{ fontWeight: '400' }}>
                            {title?.route?.title}
                        </Body>
                    )}
                    style={{ backgroundColor: colors.white, marginHorizontal: 1, elevation: 0 }}
                    indicatorStyle={{ backgroundColor: '#937AEA' }}
                    labelStyle={{ color: '#937AEA', fontSize: 16, fontWeight: '500' }}
                />
            )}
            style={{ marginTop: 10 }}
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
        />
    )
}
