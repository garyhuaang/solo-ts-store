import { CartIcon, NavLogo, ThemeToggle } from '../InteractiveIcons'
import NavLinks from './NavLinks'

export function NavBar() {
  return (
    <div className="flex items-center justify-between">
      <NavLogo />
      <NavLinks />
      <div className="flex items-center">
        <ThemeToggle />
        <CartIcon />
      </div>
    </div>
  )
}

export default NavBar
