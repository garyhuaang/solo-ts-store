import { NavBar } from '@/components'
import { Outlet } from 'react-router-dom'

function Home() {
  return (
    <div>
      Home
      <NavBar />
      <Outlet />
    </div>
  )
}

export default Home
