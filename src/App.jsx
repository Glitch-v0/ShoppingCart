/* eslint-disable no-console */
import { Outlet } from 'react-router-dom'
import { useState, useEffect } from 'react'
import NavBar from './NavBar'

function App() {
  const [cartItems, updateCart] = useState([])
  const [products, updateProducts] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=5', { mode: 'cors' })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error('server error')
        }
        return response.json()
      })
      .then((response) => updateProducts(response))
      .catch((error) => console.error('Fetch error:', error))
  }, [])

  return (
    <div>
      <NavBar />
      <main>
        <Outlet context={{ products, cartItems, updateCart }} />
      </main>
    </div>
  )
}

export default App
