import { CartIcon, NavLogo, ThemeToggle } from '../InteractiveIcons'
import LinksDropdown from '../InteractiveIcons/LinksDropdown'
import NavLinks from './NavLinks'

export function NavBar() {
  return (
    <nav className="flex bg-muted h-16 p-6 lg:justify-between sm:justify-start sm:gap-x-4">
      <NavLogo />
      <LinksDropdown />
      <NavLinks />
      <div className="flex items-center justify-end">
        <ThemeToggle />
        <CartIcon />
      </div>
    </nav>
  )
}

export default NavBar
