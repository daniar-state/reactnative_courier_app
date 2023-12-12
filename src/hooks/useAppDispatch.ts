import { useDispatch } from 'react-redux'
import { AppDispatch } from 'state'

const useAppDispatch = () => useDispatch<AppDispatch>()

export default useAppDispatch
