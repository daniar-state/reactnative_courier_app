import React, { useState, useCallback } from 'react'
import { StyleSheet, View } from 'react-native'
import { renderBubble, renderMessageText } from './feyk'
import { GiftedChat } from 'react-native-gifted-chat'
import { IChatData } from '../../screens/Messages'
import Body from '../common/Body'
import { Space } from '../common/Space'
import Header from '../Header'

interface IProps {
    route: {
        params: {
            item: IChatData
        }
    }
}

export const MessageScreen = ({ route }: IProps) => {
    const { item } = route.params
    const [messages, setMessages] = useState([])

    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    }, [])

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <Header title="Егор Т." icon={true} style={styles.header} />
            <Body center light color="rgba(0, 0, 0, 0.44)">
                Офлайн: 3 часа
            </Body>
            <Space height={19} />

            <Body size={16} color="rgba(85, 85, 85, 1)" center>
                Перейти в закал Доставка письма...
            </Body>

            <GiftedChat
                minInputToolbarHeight={33}
                maxInputLength={32}
                // renderMessage={() => (
                //     <View style={{ backgroundColor: 'red', height: 30 }}>
                //         <Body>dadada</Body>
                //     </View>
                // )}
                // renderCustomView={BubbleChat}

                // renderChatEmpty={BubbleChat}
                // renderMessageText={renderMessageText}
                // renderSystemMessage={customSystemMessage}
                renderBubble={renderBubble}
                // renderInputToolbar={() => (
                //     <View style={{}}>
                //         <Body>dadasd</Body>
                //     </View>
                // )}
                // scrollToBottomComponent={() => <Body>dasda</Body>}
                alwaysShowSend={true}
                isKeyboardInternallyHandled={true}
                showUserAvatar={true}
                showAvatarForEveryMessage={true}
                messagesContainerStyle={styles.messeg}
                quickReplyStyle={styles.quik}
                scrollToBottomStyle={styles.quik}
                renderAvatarOnTop={true}
                messages={messages}
                onSend={messages => onSend(messages)}
                user={{
                    _id: 1,
                    name: 'dada',
                    avatar: require('../../assets/use.png'),
                }}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    hashtag: {
        borderWidth: 1,
    },
    messeg: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
    },
    quik: {
        height: 30,
    },
    header: {
        paddingRight: 30,
        marginBottom: 0,
    },
    textHead: {},
    chatMain: {
        borderWidth: 1,
        backgroundColor: 'red',
    },
    wrapper: {
        borderWidth: 1,
    },
})
