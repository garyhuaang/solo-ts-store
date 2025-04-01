import { Link, Outlet } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { NavBar } from '@/components'

function HomeLayout() {
  return (
    <div className="text-4xl">
      HomeLayout Page
      <NavBar />
      <Outlet />
    </div>
  )
}
export default HomeLayout
