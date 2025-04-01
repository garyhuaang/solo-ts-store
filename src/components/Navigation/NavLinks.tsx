import {
  NavigationMenu,
  NavigationMenuList,
} from '@/components/ui/navigation-menu'
import { links } from '@/lib'

import { Link } from 'react-router-dom'
import { Button } from '../ui/button'

function NavLinks() {
  return (
    <NavigationMenu className="hidden  lg:flex items-center justify-center">
      <NavigationMenuList>
        {links.map((link) => (
          <Button variant="link">
            <Link to={link.path}>{link.label}</Link>
          </Button>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export default NavLinks
