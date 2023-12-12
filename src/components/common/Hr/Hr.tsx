import React from 'react'
import { ColorValue, StyleSheet, View } from 'react-native'

import Body from '../Body'

interface IProps {
    text?: string | string[]
    textColor?: string
    style?: object
    space?: number
    topSpace?: number
    bottomSpace?: number
    color?: ColorValue
    vertical?: boolean
}

const Hr = ({ style, textColor, text, topSpace, bottomSpace, space, color, vertical = false }: IProps) => {
    return text ? (
        <View
            style={[
                styles.hrWithText,
                {
                    marginTop: topSpace,
                    marginBottom: bottomSpace,
                    marginVertical: space,
                },
                color ? { backgroundColor: color } : {},
                style,
            ]}>
            <View style={[styles.hr, styles.hrText]} />
            <Body size={12} style={styles.text} color={textColor}>
                {text}
            </Body>
            <View style={[styles.hr, styles.hrText]} />
        </View>
    ) : (
        <View
            style={[
                styles.hr,
                {
                    marginTop: topSpace,
                    marginBottom: bottomSpace,
                    marginVertical: space,
                },
                color ? { backgroundColor: color } : {},
                vertical && styles.hrVertical,
                style,
            ]}
        />
    )
}

export default Hr

const styles = StyleSheet.create({
    hr: {
        width: '100%',
        height: 1,
        backgroundColor: '#F5F5F5',
    },
    hrVertical: {
        height: '100%',
        width: 1,
    },
    hrText: {
        flex: 1,
    },
    hrWithText: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        marginHorizontal: 20,
    },
})
