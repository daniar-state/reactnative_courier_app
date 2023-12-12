import React, { useState } from 'react'
import { StyleSheet, TextProps, View } from 'react-native'
import Body from './Body'
import { ChevronBottom } from './Svgs'
import { Picker } from '@react-native-picker/picker'

interface IProps extends TextProps {
    placeholder?: string
    containerStyle?: object
    label?: string
    position?: 'top' | 'center' | 'bottom'
}

const AuthSelect: React.FC<IProps> = ({ placeholder, label, containerStyle, position = '' }) => {
    const [selectedLanguage, setSelectedLanguage] = useState()

    const containerStyles = [
        styles.container,
        {
            backgroundColor: '#FAFAFA',
            borderTopLeftRadius: ['bottom', 'center'].includes(position) ? 0 : 10,
            borderTopRightRadius: ['bottom', 'center'].includes(position) ? 0 : 10,
            borderTopWidth: ['bottom', 'center'].includes(position) ? 0 : 1,

            borderBottomLeftRadius: ['top', 'center'].includes(position) ? 0 : 10,
            borderBottomRightRadius: ['top', 'center'].includes(position) ? 0 : 10,
        },
        containerStyle,
    ]

    return (
        <View style={containerStyles}>
            {label && (
                <Body size={13} color="rgba(87, 87, 87, 1)" medium style={styles.label}>
                    {label}
                </Body>
            )}

            <View style={styles.contentContainer}>
                <Body color="rgba(0, 0, 0, 0.46)" style={styles.content}>
                    {placeholder}
                </Body>

                <ChevronBottom />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 76,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#E8E8F0',
    },
    contentContainer: {
        paddingTop: 36,
        paddingBottom: 18,
        paddingLeft: 31,
        paddingRight: 20,
        flexDirection: 'row',
    },
    content: {
        fontSize: 15,
        color: 'rgba(36, 55, 87, 1)',
        flex: 1,
        fontFamily: 'Gilroy-Light',
    },
    label: {
        position: 'absolute',
        left: 31,
        top: 10,
    },
})

export default AuthSelect
