import { createAsyncThunk } from '@reduxjs/toolkit'
import { LoginCredentials, User } from '@/lib'
import axios, { AxiosResponse } from 'axios'
import { loginUser } from './userSlice'
import api from '@/utils/api'

export const loginUserThunk = createAsyncThunk(
  'user/login',
  async (credentials: LoginCredentials, thunkAPI) => {
    try {
      const response: AxiosResponse = await api.post('/auth/local', credentials)
      const user: User = {
        jwt: response.data.jwt,
        identifier: response.data.user.username,
      }

      thunkAPI.dispatch(loginUser(user))
      return user
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        return thunkAPI.rejectWithValue(
          error.response?.data?.error?.message || 'Authentication failed'
        )
      }
      return thunkAPI.rejectWithValue(
        'An unexpected error occurred during login'
      )
    }
  }
)
