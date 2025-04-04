import SubmitButton from '@/components/Buttons/SubmitButton'
import { NavLogo } from '@/components/Navigation/InteractiveIcons'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'

import { loginUser } from '@/features/userSlice'
import { useAppDispatch } from '@/hooks'
import customFetch from '@/lib/utils/customFetch'
import { ReduxStore } from '@/store'
import { AxiosResponse } from 'axios'
import {
  ActionFunction,
  Form,
  Link,
  redirect,
  useNavigate,
} from 'react-router-dom'

export const action =
  (store: ReduxStore): ActionFunction =>
  async ({ request }): Promise<Response | null> => {
    const formData = await request.formData()
    const data = Object.fromEntries(formData)

    try {
      const response: AxiosResponse = await customFetch.post(
        '/auth/local',
        data
      )
      const jwt = response.data.jwt
      const username = response.data.user.username
      store.dispatch(loginUser({ jwt, username }))

      return redirect('/')
    } catch (error) {
      console.log('🚀 ~ error:\n', error)
      return null
    }
  }

function Login() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const loginAsGuest = async (): Promise<void> => {
    try {
      const response: AxiosResponse = await customFetch.post('/auth/local', {
        identifier: 'test@test.com',
        password: 'secret',
      })
      const jwt = response.data.jwt
      const username = response.data.user.username

      dispatch(loginUser({ jwt, username }))
      navigate('/')
    } catch (error) {
      console.log('🚀 ~ loginAsGuest ~ error:\n', error)
    }
  }

  return (
    <div className="h-screen grid place-items-center">
      <Card className="w-96 p-6">
        <CardHeader>
          <NavLogo size="default" variant="ghost" />
          <CardTitle className="text-center">Login</CardTitle>
        </CardHeader>

        <Form method="POST" className="flex flex-col gap-2">
          <Input type="email" name="identifier" placeholder="Email" />
          <Input type="password" name="password" placeholder="Password" />

          <div className="flex flex-col gap-2 mt-6">
            <SubmitButton text="Login" />
            <Button type="button" variant="secondary" onClick={loginAsGuest}>
              Guest User
            </Button>
          </div>

          <p className="text-center pt-10">
            Not a member yet?
            <Button asChild variant="link" size="lg">
              <Link to="/register">Reigster</Link>
            </Button>
          </p>
        </Form>
      </Card>
    </div>
  )
}

export default Login
