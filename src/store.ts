import { configureStore } from '@reduxjs/toolkit'
import themesSliceReducer from './features/themeSlice'
import userSliceReducer from './features/userSlice'

export const store = configureStore({
  reducer: {
    themesSliceReducer,
    userSliceReducer,
  },
})

export type RootApp = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// we define this type explicitely for the store itself.
// we want to work directly with the store object, not our defined component-level interactions
export type ReduxStore = {
  getState: () => RootApp
  dispatch: AppDispatch
}
