import { Link, useNavigate } from 'react-router-dom'
import { Button } from '../ui/button'
import { useAppDispatch } from '@/hooks'
import { logoutUser } from '@/features/user/userSlice'

function Header() {
  const userData = localStorage.getItem('user')
  const user = JSON.parse(userData as string)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleLogout = () => {
    dispatch(logoutUser())
    navigate('/')
  }

  return (
    <div className="flex justify-center lg:justify-end h-[3.125rem] items-center">
      {!user ? (
        <Button asChild variant="link">
          <Link to="/login">Login/Guest</Link>
        </Button>
      ) : (
        <div className="flex items-center gap-2">
          <p>Welcome {user.identifier}!</p>
          <Button variant="link" className="!p-0" onClick={handleLogout}>
            Logout
          </Button>
        </div>
      )}
      <Button asChild variant="link">
        <Link to="/register">Register</Link>
      </Button>
    </div>
  )
}

export default Header
