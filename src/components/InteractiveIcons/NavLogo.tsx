import { Armchair } from 'lucide-react'
import { Link } from 'react-router-dom'

function NavLogo() {
  return (
    <Link to="/" className="hidden lg:flex items-center">
      <Armchair className="w-8 h-8" />
    </Link>
  )
}

export default NavLogo
