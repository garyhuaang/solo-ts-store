import { Button } from '@/components/ui/button'
import { ShoppingCart } from 'lucide-react'

function CartIcon() {
  return (
    <Button size="default" variant="outline">
      <ShoppingCart />
    </Button>
  )
}

export default CartIcon
