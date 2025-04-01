import { ShoppingCart } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '../ui/button'

function CartButton() {
  const totalItems = 0
  return (
    <Button
      asChild
      variant="outline"
      size="icon"
      className="flex justify-center items-center relative"
    >
      <Link to="/cart">
        <span className="absolute -top-3 -right-3 bg-primary text-white rounded-full h-6 w-6 flex items-center justify-center text-xs">
          {totalItems}
        </span>
        <ShoppingCart />
      </Link>
    </Button>
  )
}

export default CartButton
