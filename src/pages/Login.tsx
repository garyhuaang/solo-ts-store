import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Form } from 'react-router-dom'

function Login() {
  return (
    <div className="flex w-screen h-screen justify-center items-center">
      <Card className="w-96 h-[26rem] place-content-center">
        <Form className=" flex flex-col gap-4 p-6">
          <h1 className="pb-4 text-3xl text-center">Login</h1>

          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password" />

          <div className="flex flex-col gap-4 w-full h-full pt-4">
            <Button variant="default">Login</Button>
            <Button variant="secondary">Guest User</Button>
          </div>

          <div className="text-center pt-10">
            Not a member yet? <Button variant="link">Register</Button>
          </div>
        </Form>
      </Card>
    </div>
  )
}

export default Login
