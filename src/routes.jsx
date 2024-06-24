import App from './App'
import HomePage from './HomePage'
import ShopPage from './ShopPage'
import CartPage from './CartPage'
import ErrorPage from './ErrorPage'

const routes = [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: 'shop',
        element: <ShopPage />,
      },
      {
        path: 'cart',
        element: <CartPage />,
      },
    ],
  },
]

export default routes
