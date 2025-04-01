import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { About, Cart, Home, Products } from './pages'
import Landing from './pages/Landing'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
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
])

function App() {
  return <RouterProvider router={router} />
}

export default App
