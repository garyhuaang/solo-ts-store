import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export type User = {
  username: string
  jwt: string
}

type UserState = {
  user: User | null
}

const getUserFromLocalStorage = () => {
  const user = localStorage.getItem('user')
  return !user ? null : JSON.parse(user)
}

const initialState: UserState = {
  user: getUserFromLocalStorage(),
}

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    loginUser: (state, action: PayloadAction<User>) => {
      const user = action.payload
      state.user = user
      localStorage.setItem('user', JSON.stringify(user))
      alert('Login successful')
    },
    logoutUser: (state) => {
      state.user = null
      localStorage.removeItem('user')
      alert('Logged out!')
    },
  },
})

export const { loginUser, logoutUser } = userSlice.actions

export default userSlice.reducer
