import Header from '@/components/Header/Header'
import { NavBar } from '@/components'
import { Outlet } from 'react-router-dom'

function Home() {
  return (
    <>
      <Header />
      <NavBar />
      <Outlet />
    </>
  )
}

export default Home
