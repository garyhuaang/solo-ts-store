import Logo from './Logo'
import NavLinks from './NavLinks'
import ThemeToggle from './ThemeToggle'
import CartButton from './CartButton'

function NavBar() {
  return (
    <nav className="bg-muted py-4">
      <div className="align-element flex justify-between">
        <Logo />
        <NavLinks />
        <div className="flex justify-center gap-x-4">
          <ThemeToggle />
          <CartButton />
        </div>
      </div>
    </nav>
  )
}

export default NavBar
