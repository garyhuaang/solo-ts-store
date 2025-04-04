import { NavBar } from '@/components'
import Header from '@/components/Header/Header'
import { Outlet } from 'react-router-dom'

function Home() {
  return (
    <div>
      <Header />
      <NavBar />
      <Outlet />
    </div>
  )
}

export default Home
