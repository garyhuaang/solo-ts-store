import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export type Theme = 'light' | 'dark' | 'system'

export type ThemeLinks = { label: Theme }[]

export const applyTheme = (theme: Theme) => {
  const root = window.document.documentElement
  root.classList.remove('light', 'dark')

  if (theme === 'system') {
    const systemTheme = window.matchMedia('(prefers-color-scheme:dark)').matches
      ? 'dark'
      : 'light'
    root.classList.add(systemTheme)
    return
  }
  root.classList.add(theme)
}

const initializeState = () => {
  const currTheme = localStorage.getItem('theme') || 'system'
  applyTheme(currTheme as Theme)
  return currTheme
}

const initialState = {
  theme: initializeState(),
}

const themeSlice = createSlice({
  name: 'theme',
  initialState: initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<Theme>) => {
      state.theme = action.payload
      applyTheme(action.payload)
      localStorage.setItem('theme', action.payload)
    },
  },
})

export const { setTheme } = themeSlice.actions

export default themeSlice.reducer
