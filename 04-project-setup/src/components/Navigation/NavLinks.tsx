import { NavLink } from 'react-router-dom'
import { links } from '@/utils/links'

function NavLinks() {
  return (
    <div className="hidden lg:flex justify-center items-center gap-x-4 text-base">
      {links.map((link) => (
        <NavLink
          key={link.label}
          to={link.href}
          className={({ isActive }) => {
            return `capitalize font-light tracking-wide ${
              isActive ? 'text-primary' : ''
            }`
          }}
        >
          {link.label}
        </NavLink>
      ))}
    </div>
  )
}

export default NavLinks
