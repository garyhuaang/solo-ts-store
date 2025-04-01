import { Button } from '@/components/ui/button'
import { Armchair } from 'lucide-react'
import { Link } from 'react-router-dom'
type Size = 'default' | 'sm' | 'lg' | 'icon' | null | undefined

type Variant =
  | 'default'
  | 'destructive'
  | 'outline'
  | 'secondary'
  | 'ghost'
  | 'link'
  | null
  | undefined

function NavLogo({
  size = 'default',
  variant = 'default',
}: {
  size?: Size
  variant?: Variant
}) {
  return (
    <Button
      size={size}
      variant={variant}
      className="flex self-center  p-2 rounded-lg"
    >
      <Link to="/" className="hidden lg:flex items-center">
        <Armchair />
      </Link>
    </Button>
  )
}

export default NavLogo
