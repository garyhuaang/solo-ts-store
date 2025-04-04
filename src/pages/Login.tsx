import SubmitButton from '@/components/Buttons/SubmitButton'
import { NavLogo } from '@/components/Navigation/InteractiveIcons'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Form, Link } from 'react-router-dom'

function Login() {
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
