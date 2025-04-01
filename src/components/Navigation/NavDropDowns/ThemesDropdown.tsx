import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Moon } from 'lucide-react'
import { Button } from '../../ui/button'

import { themeLinks } from '@/lib'
import { useAppDispatch } from '@/hooks'
import { setTheme, Theme } from '@/features/themeSlice'

function ThemesDropdown() {
  const dispatch = useAppDispatch()

  const handleThemeToggle = (e: React.SyntheticEvent) => {
    const theme = e.currentTarget.innerHTML?.toLocaleLowerCase()
    if (!theme) return

    dispatch(setTheme(theme as Theme))
  }

  return (
    <nav className="lg:hidden w-40:flex self-center">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
            <Moon />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-13 h-38 absolute p-4 -left-6 top-3">
          {themeLinks.map((link) => (
            <DropdownMenuGroup>
              <DropdownMenuItem
                className="capitalize"
                onClick={(e: React.SyntheticEvent) => handleThemeToggle(e)}
              >
                {link.label}
              </DropdownMenuItem>
            </DropdownMenuGroup>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  )
}

export default ThemesDropdown
