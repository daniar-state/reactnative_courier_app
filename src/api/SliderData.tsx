import { ImageSourcePropType } from 'react-native'

export interface ISLiderData {
    id?: number
    title?: string
    text?: string
    image?: ImageSourcePropType
    imageBack?: ImageSourcePropType
}

const sliderData = [
    {
        id: 1,
        title: ' «Идеальный курьер»',
        text: 'Бесплатный мини курс',
        imageBack: require('../assets/sliderImage.png'),
    },
    {
        id: 2,
        title: 'Правила сервиса',
        imageBack: require('../assets/backSlider.png'),
        image: require('../assets/sliderIm.png'),
    },
    {
        id: 3,
        title: ' «Идеальный курьер»',
        text: 'Бесплатный мини курс',
        imageBack: require('../assets/sliderImage.png'),
    },
    {
        id: 4,
        title: ' «Идеальный курьер»',
        text: 'Бесплатный мини курс',
        imageBack: require('../assets/sliderImage.png'),
    },
]

export default sliderData
