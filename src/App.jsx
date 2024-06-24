import { Outlet } from 'react-router-dom'
import { useState, useEffect } from 'react'
import NavBar from './NavBar'

function App() {
  const [products, updateProducts] = useState([])
  const [errorIssue, setError] = useState(null)

  useEffect(() => {
    console.log('Loading stuff')
    fetch('https://fakestoreapi.com/products?limit=5', { mode: 'cors' })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error('server error')
        }
        return response.json()
      })
      .then((response) => updateProducts(response))
      .catch((error) => setError(error))
  }, [])
  return (
    <div>
      <NavBar />
      <main>
        <Outlet context={[products, updateProducts]} />
      </main>
    </div>
  )
}

export default App
