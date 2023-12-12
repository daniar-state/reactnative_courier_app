import React from 'react'
import { StyleSheet, TextProps, View } from 'react-native'
import Body from './Body'
import { SelectFileSvg } from './Svgs'

interface IProps extends TextProps {
    label?: string
    containerStyle?: object
    position?: 'top' | 'center' | 'bottom'
}

const ImageInput: React.FC<IProps> = ({ label, containerStyle, position = '' }) => {
    const containerStyles = [
        styles.container,
        {
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
            <Body light color="rgba(87, 87, 87, 1)" size={15} style={styles.content}>
                {label}
            </Body>

            <View style={styles.icon}>
                <SelectFileSvg />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e8e8f0',
        width: '100%',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'rgba(209, 209, 219, 1)',

        paddingTop: 18,
        paddingBottom: 22,
        paddingLeft: 31,
        paddingRight: 20,
        flexDirection: 'row',
    },
    content: {
        fontSize: 15,
        flex: 1,
    },
    icon: {
        marginTop: 9,
        marginLeft: 20,
    },
})

export default ImageInput
