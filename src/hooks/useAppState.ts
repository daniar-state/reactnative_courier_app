import AppStateContext from 'contexts/AppStateContext'
import { useContext } from 'react'

export const useAppState = () => {
  const state = useContext(AppStateContext)

  return state
}
