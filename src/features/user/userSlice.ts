import { User, UserState } from '@/lib'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const getUserFromLocalStorage = () => {
  const user = localStorage.getItem('user') || null
  return user ? JSON.parse(user) : null
}

export const initialState: UserState = {
  user: getUserFromLocalStorage(),
}

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    loginUser: (state, action: PayloadAction<User>) => {
      const user = action.payload
      state.user = user
      localStorage.setItem('user', JSON.stringify(action.payload))
    },
    logoutUser: (state) => {
      state.user = null
      localStorage.removeItem('user')
    },
  },
})

export const { loginUser, logoutUser } = userSlice.actions

export default userSlice.reducer
