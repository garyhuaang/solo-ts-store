import SubmitButton from '@/components/Buttons/SubmitButton'
import { NavLogo } from '@/components/Navigation/InteractiveIcons'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { loginUser } from '@/features/user/userSlice'
import { useAppDispatch } from '@/hooks'
import { User } from '@/lib'
import { Form, Link, useNavigate } from 'react-router-dom'

function Login() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleLoginGuest = () => {
    const guestUser: User = {
      jwt: 'guestuser',
      identifier: 'Guest User',
    }
    dispatch(loginUser(guestUser))
    navigate('/')
  }

  return (
    <div className="flex w-screen h-screen justify-center items-center">
      <Card className="w-96 h-[30rem] place-content-center">
        <Form method="POST" className=" flex flex-col gap-4 p-6">
          <div className="flex flex-col justify-center  pb-4">
            <NavLogo size="default" variant="ghost" />
            <h1 className=" text-3xl text-center font-bold">Login</h1>
          </div>

          <Input type="email" name="identifier" placeholder="Email" />
          <Input type="password" name="password" placeholder="Password" />

          <div className="flex flex-col gap-4 w-full pt-4">
            <SubmitButton text="Login" />
            <Button
              type="button"
              variant="secondary"
              onClick={handleLoginGuest}
            >
              Guest User
            </Button>
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
