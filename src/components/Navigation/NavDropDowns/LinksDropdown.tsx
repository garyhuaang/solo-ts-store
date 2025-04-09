import { links } from '@/lib'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { AlignLeft } from 'lucide-react'
import { Button } from '../../ui/button'

import { Link } from 'react-router-dom'

function LinksDropdown() {
  return (
    <nav className="flex md:hidden self-center">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="items-center rounded-lg !p-2">
            <AlignLeft style={{ width: '1.9rem', height: '2rem' }} />
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

export default LinksDropdown
