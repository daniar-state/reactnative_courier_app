import React from 'react'
import { ColorValue } from 'react-native'
import { s, vs } from 'react-native-size-matters'
import Svg, { Path } from 'react-native-svg'

interface IProps {
    color?: ColorValue
    width?: number
    height?: number
}

const ApplyIcon = (props: IProps) => {
    const { color = '#243757', width = 13, height = 15 } = props

    return (
        <Svg width="17" height="17" viewBox="0 0 17 17" fill="none">
            <Path
                opacity="0.5"
                d="M5 8.5L8 11L12 6M8.5 15.5C4.63401 15.5 1.5 12.366 1.5 8.5C1.5 4.63401 4.63401 1.5 8.5 1.5C12.366 1.5 15.5 4.63401 15.5 8.5C15.5 12.366 12.366 15.5 8.5 15.5Z"
                stroke={color}
                stroke-width="1.5"
            />
        </Svg>
    )
}

export default ApplyIcon
