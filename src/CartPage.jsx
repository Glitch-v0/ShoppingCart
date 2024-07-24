import { useOutletContext } from 'react-router-dom'
import CartItemCard from './CartItemCard'

function CartPage() {
  const { cartItems } = useOutletContext([])
  const { totalItemsInCart } = useOutletContext([])

  const grandTotal = cartItems.reduce((total, product) => {
    return total + product.price * product.quantity
  }, 0)

  return (
    <div className="cart-page-container">
      <h1>Your Shopping Cart:</h1>
      <h2>Grand Total for {totalItemsInCart} Items:</h2>
      <h2>${grandTotal.toFixed(2)}</h2>
      <button type="button">Check Out</button>
      {cartItems.map((cartItem) => (
        <CartItemCard item={cartItem} key={cartItem.id * 10} />
      ))}
      {cartItems.length > 1 && <button type="button">Check Out</button>}
    </div>
  )
}

export default CartPage
