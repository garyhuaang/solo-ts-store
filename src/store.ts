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
