import { configureStore } from '@reduxjs/toolkit'
import themesSliceReducer from './features/themeSlice'

export const store = configureStore({
  reducer: {
    themesSliceReducer,
  },
})

export type RootApp = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
