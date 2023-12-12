import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { RootState } from 'state'

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default useAppSelector
