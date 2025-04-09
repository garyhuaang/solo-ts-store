// loginAction.ts
import { store } from '@/store'
import { loginUserThunk } from './userThunk'
import { ActionFunction, redirect } from 'react-router-dom'
import { LoginCredentials } from '@/lib'

const loginAction: ActionFunction = async ({ request }) => {
  const formData = await request.formData()
  const credentials = Object.fromEntries(formData) as LoginCredentials

  try {
    await store.dispatch(loginUserThunk(credentials)).unwrap()
    return redirect('/')
  } catch (error) {
    return { error: 'Login failed. Please check credentials.' }
  }
}

export default loginAction
