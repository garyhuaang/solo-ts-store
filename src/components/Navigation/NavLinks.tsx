import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { links } from '@/lib'

import { Link } from 'react-router-dom'

function NavLinks() {
  return (
    <NavigationMenu className="hidden  md:flex items-center justify-center">
      <NavigationMenuList>
        {links.map((link) => (
          <NavigationMenuItem>
            <Link to={link.path}>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                {link.label}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export default NavLinks
