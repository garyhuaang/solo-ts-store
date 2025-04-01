import { Link } from 'react-router-dom'
import { Armchair } from 'lucide-react'

function Logo() {
  return (
    <Link to="/" className="hidden lg:flex justify-center">
      <Armchair className="w-8 h-8" />
    </Link>
  )
}

export default Logo
