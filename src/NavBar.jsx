import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div className="nav-container">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/cart">Cart</Link>
      </nav>
    </div>
  )
}

export default NavBar
