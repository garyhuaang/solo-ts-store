import SubmitButton from '@/components/Buttons/SubmitButton'
import { NavLogo } from '@/components/Navigation/InteractiveIcons'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { useAppDispatch } from '@/hooks'
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
      //   toast({ description: 'Login Failed' });
      return null
    }
  }

function Login() {
  const dispatch = useAppDispatch()

  return (
    <div className="flex w-screen h-screen justify-center items-center">
      <Card className="w-96 h-[30rem] place-content-center">
        <Form className=" flex flex-col gap-4 p-6" method="POST">
          <div className="flex flex-col justify-center  pb-4">
            <NavLogo size="default" variant="ghost" />
            <h1 className=" text-3xl text-center font-bold">Login</h1>
          </div>

          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password" />

          <div className="flex flex-col gap-4 w-full h-full pt-4">
            <SubmitButton text="Login" />
            <Button variant="secondary">Guest User</Button>
          </div>

          <div className="text-center text-sm pt-10">
            Not a member yet?
            <Button asChild variant="link" size="lg">
              <Link to="/register">Reigster</Link>
            </Button>
          </div>
        </Form>
      </Card>
    </div>
  )
}

export default Login
