import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { About, Cart, HomeLayout, Login, Products, Register } from './pages'
import Landing from './pages/Landing'

import { action as loginUser } from './pages/Login'
import { store } from './store'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'products',
        element: <Products />,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
    action: loginUser(store),
  },
  {
    path: '/register',
    element: <Register />,
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
