import React from 'react'
import { View, Text, StyleSheet, TextInput, Platform, TouchableOpacity } from 'react-native'

interface IProps {
    value?: string
    setValue?: () => void
    onPress?: () => void
}

const ChatInput = ({ value, setValue, onPress }: IProps) => {
    return (
        <View style={styles.innerContainer}>
            <View style={styles.inputAndMicrophone}>
                <TextInput
                    multiline
                    placeholder={'Type something...'}
                    style={styles.input}
                    value={value}
                    onChangeText={setValue}
                />
                <TouchableOpacity style={styles.rightIconButtonStyle} onPress={onPress}>
                    <Text>send</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    innerContainer: {
        // paddingHorizontal: 10,
        // marginHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingVertical: 10,
    },
    inputAndMicrophone: {
        flexDirection: 'row',
        backgroundColor: 'green',
        flex: 3,
        // marginRight: 10,
        paddingVertical: Platform.OS === 'ios' ? 10 : 0,
        // borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    input: {
        backgroundColor: 'transparent',
        paddingLeft: 20,
        color: 'green',
        flex: 3,
        fontSize: 15,
        height: 50,
        alignSelf: 'center',
    },
    rightIconButtonStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: 15,
        paddingLeft: 10,
        borderLeftWidth: 1,
        borderLeftColor: '#fff',
    },
})

export default ChatInput
