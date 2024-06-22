import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'

function App() {
  return (
    <div>
      <NavBar />
      <main>
        <Outlet /> {/* This is where the nested routes will be rendered */}
      </main>
    </div>
  )
}

export default App
