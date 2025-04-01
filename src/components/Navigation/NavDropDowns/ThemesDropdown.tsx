import { links } from '@/lib'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Moon } from 'lucide-react'
import { Button } from '../../ui/button'

import { Link } from 'react-router-dom'

function ThemesDropdown() {
  return (
    <nav className="lg:hidden w-40:flex self-center">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
            <Moon />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-13 h-38 absolute p-4 -left-6 top-3">
          {links.map((link) => (
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <Link to={link.path}>{link.label}</Link>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  )
}

export default ThemesDropdown
