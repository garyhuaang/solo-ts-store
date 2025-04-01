import { Link } from 'react-router-dom'
import { Button } from '../ui/button'

function Header() {
  return (
    <div className="flex justify-center lg:justify-end h-[3.125rem] items-center">
      <Button asChild variant="link">
        <Link to="/login">Login/Guest</Link>
      </Button>
      <Button asChild variant="link">
        <Link to="/register">Register</Link>
      </Button>
    </div>
  )
}

export default Header
