import SubmitButton from '@/components/Buttons/SubmitButton'
import { NavLogo } from '@/components/Navigation/InteractiveIcons'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { loginUser } from '@/features/userSlice'
import customFetch from '@/lib/utils/customFetch'
import { ReduxStore } from '@/store'
import { AxiosResponse } from 'axios'
import { ActionFunction, Form, Link, redirect } from 'react-router-dom'

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
      const username = response.data.user.username
      const jwt = response.data.jwt
      store.dispatch(loginUser({ username, jwt }))
      return redirect('/')
    } catch (error) {
      console.log(error)

      return null
    }
  }

function Login() {
  return (
    <div className="h-screen grid place-items-center">
      <Card className="w-96 p-6">
        <CardHeader>
          <NavLogo size="default" variant="ghost" />
          <CardTitle className="text-center">Login</CardTitle>
        </CardHeader>

        <Form method="POST">
          <Input type="email" placeholder="Email" className="mb-2" />
          <Input type="password" placeholder="Password" />

          <div className="flex flex-col gap-2 w-full h-full pt-6">
            <SubmitButton text="Login" />
            <Button variant="secondary">Guest User</Button>
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
