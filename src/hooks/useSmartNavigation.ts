import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { TNavigationParams } from '../types/navigation'

const useSmartNavigation = () => {
    const navigation = useNavigation<StackNavigationProp<TNavigationParams>>()

    return navigation
}

export default useSmartNavigation
