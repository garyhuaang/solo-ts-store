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
      className="hidden md:flex self-center rounded-lg p-0"
    >
      <Link to="/" className="w-3 h-3 flex items-center justify-center">
        <Armchair style={{ width: '2rem', height: '2rem' }} />
      </Link>
    </Button>
  )
}

export default NavLogo
