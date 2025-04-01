import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Moon, Sun } from 'lucide-react'
import { Button } from '../../ui/button'

import { themeLinks } from '@/lib'
import { useAppDispatch } from '@/hooks'
import { setTheme, Theme } from '@/features/themeSlice'

function ThemesDropdown() {
  const dispatch = useAppDispatch()

  return (
    <nav className=" w-40:flex self-center">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-13 h-38 absolute p-4 -left-6 top-3">
          {themeLinks.map((link) => (
            <DropdownMenuGroup>
              <DropdownMenuItem
                className="capitalize"
                onClick={(e: React.SyntheticEvent) =>
                  dispatch(
                    setTheme(
                      e.currentTarget.innerHTML?.toLocaleLowerCase() as Theme
                    )
                  )
                }
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
