import { Button } from '@/components/ui/button'
import { Armchair } from 'lucide-react'
import { Link } from 'react-router-dom'

function NavLogo() {
  return (
    <Button asChild variant="outline" className="flex self-center">
      <Link to="/" className="hidden lg:flex items-center">
        <Armchair className="w-8 h-8" />
      </Link>
    </Button>
  )
}

export default NavLogo
