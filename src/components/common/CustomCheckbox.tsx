import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import Body from './Body'
import CheckBox from '@react-native-community/checkbox'

interface IProps {
    label: string
    style?: object
}

const CustomCheckbox = ({ label, style }: IProps) => {
    const [toggleCheckBox, setToggleCheckBox] = useState(false)

    return (
        <View style={[styles.container, style]}>
            <CheckBox
                style={styles.checkbox}
                value={toggleCheckBox}
                tintColors={{ true: 'rgba(94, 98, 223, 1)', false: 'rgba(232, 232, 240, 1)' }}
                onValueChange={newValue => setToggleCheckBox(newValue)}
            />

            <Body color="rgba(36, 55, 87, 1)" medium style={{ marginTop: 5 }}>
                {label}
            </Body>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    checkbox: {
        borderColor: 'rgba(232, 232, 240, 1)',
        marginRight: 10,
    },
})

export default CustomCheckbox
