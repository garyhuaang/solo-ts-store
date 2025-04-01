import { Button } from '@/components/ui/button'
import { ShoppingCart } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

function CartIcon() {
  const navigate = useNavigate()

  const totalCartItems = 0
  return (
    <Button size="default" variant="outline" onClick={() => navigate('/cart')}>
      <span
        className="absolute flex justify-center items-center h-6 w-6 bg-primary rounded-full top-7 right-4 shadow-md
      text-white "
      >
        {totalCartItems}
      </span>
      <ShoppingCart />
    </Button>
  )
}

export default CartIcon
