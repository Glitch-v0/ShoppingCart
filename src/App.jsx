/* eslint-disable no-console */
import { Outlet } from 'react-router-dom'
import { useState, useEffect } from 'react'
import NavBar from './NavBar'

function App() {
  const [cartItems, updateCart] = useState([])
  const [products, updateProducts] = useState([])

  // Preemptively Loads in the items for shopping page
  useEffect(() => {
    console.log('Reloading APP component!')
    fetch('https://fakestoreapi.com/products?limit=8', { mode: 'cors' })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error('server error')
        }
        return response.json()
      })
      .then((response) => updateProducts(response))
      .catch((error) => console.error('Fetch error:', error))
  }, [])

  //Calculates item quantity
  const totalItemsInCart = cartItems.reduce(
    (total, item) => total + item.quantity,
    0,
  )
  return (
    <div>
      <NavBar context={{ totalItemsInCart }} />
      <main>
        <Outlet
          context={{ products, cartItems, updateCart, totalItemsInCart }}
        />
      </main>
    </div>
  )
}

export default App
