import { ImageSourcePropType } from 'react-native'

export interface ICategoryData {
    id?: number
    title?: string
    price?: number
    image?: ImageSourcePropType
    promo?: string
}

const CategoryData = [
    {
        id: 1,
        title: 'Налоговые отчеты',
        price: 189,
        image: require('../assets/125.png'),
    },
    {
        id: 2,
        title: 'Паспорт',
        price: 189,
        promo: 289,
        image: require('../assets/1.png'),
    },
    {
        id: 3,
        title: 'СНИЛС',
        price: 120,
        image: require('../assets/3.png'),
    },
    {
        id: 4,
        title: 'Военный билет',
        price: 200,
        image: require('../assets/125.png'),
    },
    {
        id: 5,
        title: 'Военный билет',
        price: 200,
        image: require('../assets/125.png'),
    },
    {
        id: 6,
        title: 'Военный билет',
        price: 200,
        image: require('../assets/125.png'),
    },
    {
        id: 7,
        title: 'Военный билет',
        price: 200,
        image: require('../assets/125.png'),
    },
]

export default CategoryData
