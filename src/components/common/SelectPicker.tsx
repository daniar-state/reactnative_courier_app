import { Picker } from '@react-native-picker/picker'
import React from 'react'

export const PickerInp = () => {
    const [selectedLanguage, setSelectedLanguage] = React.useState()

    const pickerRef = React.useRef(null)

    function open() {
        pickerRef.current?.dis()
    }

    function close() {
        pickerRef.current?.blur()
    }

    return (
        <Picker
            ref={pickerRef}
            selectedValue={selectedLanguage}
            onValueChange={(itemValue, itemIndex) => setSelectedLanguage(itemValue)}>
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" />
        </Picker>
    )
}
