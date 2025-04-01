import { RootApp, AppDispatch } from './store'
import {
  useDispatch,
  useSelector,
  type TypedUseSelectorHook,
} from 'react-redux'

export const useAppSelector: TypedUseSelectorHook<RootApp> = useSelector
export const useAppDispatch: () => AppDispatch = useDispatch
