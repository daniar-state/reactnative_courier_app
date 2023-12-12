import React, { useState } from 'react'
import { FlatList, StyleSheet, View, ImageSourcePropType, TouchableOpacity, TextInput } from 'react-native'
import Header from '../components/Header'
import { Space } from '../components/common/Space'
import ChatItem from '../components/ChatItem'
import { SearchIcon } from '../components/common/Svgs'

export interface IChatData {
    id?: string | number
    name?: string
    message?: string
    image?: ImageSourcePropType
    read?: boolean
    messenger?: boolean
}

export default function Messages() {
    const [text, setText] = useState<string>('')

    async function handleChange(e: string) {
        setText(e)
    }

    const [data] = useState([
        {
            id: 0,
            name: 'Служба поддержки',
            message: 'Здравствуйте, обращайтесь',
            image: require('../assets/messenger.png'),
            read: false,
            messenger: true,
        },
        {
            id: 1,
            name: 'Jone',
            message: 'Здравствуйте, вы скоро там?',
            image: require('../assets/jon.png'),
            read: true,
        },
        {
            id: 2,
            name: 'Jone',
            message: 'Здравствуйте, вы скоро там?',
            image: require('../assets/masse.png'),
            read: false,
        },
        {
            id: 3,
            name: 'Jone',
            message: 'Здравствуйте, вы скоро там?',
            image: require('../assets/jon.png'),
            read: false,
        },
        {
            id: 4,
            name: 'Jone',
            message: 'Здравствуйте, вы скоро там?',
            image: require('../assets/jon.png'),
            read: false,
        },
        {
            id: 6,
            name: 'Jone',
            message: 'Здравствуйте, вы скоро там?',
            image: require('../assets/jon.png'),
            read: false,
        },
    ])
    return (
        <View style={{ flex: 1 }}>
            <Header title="Чат" icon={true} style={{ paddingRight: 40, marginBottom: 0 }} />
            {/* <Body center style={styles.offLine} size={14} color="gba(0, 0, 0, 0.44)" light>
                Офлайн: 3 часа
            </Body>

            <Space height={19} />

            <Body light center>
                Перейти в закал Доставка письма...
            </Body>

            <Space height={19} />

            <Body size={15} bold center>
                31 марта
            </Body>

            <Space height={19} /> */}
            <Space height={27} />
            <View style={styles.inputBox}>
                <TouchableOpacity activeOpacity={0.8}>
                    <SearchIcon width={22} height={22} />
                </TouchableOpacity>

                <TextInput
                    style={styles.input}
                    onChangeText={handleChange}
                    value={text}
                    placeholder="Поиск по всему сервису"
                    placeholderTextColor="#A1ADBF"
                />
            </View>

            <FlatList
                // scrollEventThrottle={16}
                alwaysBounceHorizontal={false}
                alwaysBounceVertical={false}
                data={data}
                // overScrollMode="never"
                // onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollA } } }])}
                keyExtractor={(item, index) => index.toString()}
                //@ts-ignore
                renderItem={({ item }) => <ChatItem item={item} key={item.id} />}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    recipientFormContainer: {
        paddingHorizontal: 17,
    },

    row: {
        flexDirection: 'row',
    },
    rowInput: {
        flex: 1,
    },
    offLine: {
        // position: 'absolute',
    },
    inputBox: {
        width: '100%',
        height: 52,
        marginTop: 0,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F7F9FD',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#E8E8F0',
        paddingLeft: 14,
        paddingHorizontal: 21,
        overflow: 'hidden',
        marginBottom: 15,
        marginHorizontal: 15,
    },
    input: {
        width: '100%',
        fontSize: 15,
        backgroundColor: '#F7F9FD',
        color: '#424242',
        paddingLeft: 11,
        paddingRight: 15,
    },
    searchText: {
        fontWeight: '400',
        fontSize: 15,
        color: '#5B5B5B',
    },
    main: {
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#E8E8F0',
        marginHorizontal: 15,
        paddingTop: 17,
        paddingBottom: 21,
        paddingHorizontal: 11,
        flexDirection: 'row',
        marginVertical: 0,
        backgroundColor: 'rgba(249, 252, 238, 1)',
    },
    image: {
        width: 25,
        height: 25,
    },
})
