export interface ICategoryDataType {
    id?: number
    category?: string
    active?: boolean
    activeMinute?: number
    price?: number
}

const OrdersData = [
    {
        id: 1,
        category: 'Налоговые отчеты',
        active: true,
        activeMinute: 15 - 20,
        price: 190,
    },
    {
        id: 2,
        category: 'Налоговые отчеты',
        active: false,
        activeMinute: 15 - 20,
        price: 190,
    },
    {
        id: 3,
        category: 'Налоговые отчеты',
        active: false,
        activeMinute: 15 - 20,
        price: 190,
    },
    {
        id: 4,
        category: 'Налоговые отчеты',
        active: false,
        activeMinute: 15 - 20,
        price: 190,
    },
    {
        id: 5,
        category: 'Налоговые отчеты',
        active: false,
        activeMinute: 15 - 20,
        price: 190,
    },
    {
        id: 6,
        category: 'Налоговые отчеты',
        active: true,
        activeMinute: 15 - 20,
        price: 190,
    },
]

export default OrdersData
