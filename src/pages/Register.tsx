import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Form, Link } from 'react-router-dom'

function Register() {
  return (
    <div className="flex w-screen h-screen justify-center items-center">
      <Card className="w-96 h-[30rem] place-content-center">
        <Form className=" flex flex-col gap-4 p-6">
          <h1 className="pb-4 text-3xl text-center font-bold">Register</h1>

          <Input type="email" placeholder="Username" />
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password" />

          <div className="flex flex-col gap-4 w-full h-full pt-4">
            <Button variant="default">Login</Button>
            <Button variant="secondary">Guest User</Button>
          </div>

          <div className="text-center text-sm pt-10 ">
            Already a member?
            <Button asChild variant="link" size="lg">
              <Link to="/login">Login</Link>
            </Button>
          </div>
        </Form>
      </Card>
    </div>
  )
}

export default Register
