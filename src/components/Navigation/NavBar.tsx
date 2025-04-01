import { CartIcon, NavLogo } from './InteractiveIcons'
import LinksDropdown from './NavDropDowns/LinksDropdown'
import ThemesDropdown from './NavDropDowns/ThemesDropdown'
import NavLinks from './NavLinks'

export function NavBar() {
  return (
    <nav className="flex bg-muted h-16 p-6 justify-between sm:gap-x-4">
      <NavLogo />
      <LinksDropdown />
      <NavLinks />
      <div className="flex items-center justify-end gap-x-4">
        <ThemesDropdown />
        <CartIcon />
      </div>
    </nav>
  )
}

export default NavBar
