/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'

function NavBar({ context }) {
  const { totalItemsInCart } = context
  const itemWordChoice = totalItemsInCart === 1 ? 'item' : 'items';
  return (
    <div className="nav-container">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/cart">
          Cart: {totalItemsInCart} {itemWordChoice}
        </Link>
      </nav>
    </div>
  )
}

export default NavBar
