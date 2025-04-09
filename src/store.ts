import { configureStore } from '@reduxjs/toolkit'
import themesSliceReducer from './features/theme/themeSlice'
import userSliceReducer from './features/user/userSlice'

export const store = configureStore({
  reducer: {
    theme: themesSliceReducer,
    user: userSliceReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
