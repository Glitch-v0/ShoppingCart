import { useOutletContext } from 'react-router-dom'
import CardItemCard from './CartItemCard'

function CartPage() {
  const { cartItems } = useOutletContext([])
  const { totalItemsInCart } = useOutletContext([])
  return (
    <div>
      <h1>Your Shopping Cart:</h1>
      <h2>You currently have {totalItemsInCart} items in your cart.</h2>
      {cartItems.map((cartItem) => (
        <CardItemCard item={cartItem} key={cartItem.id * 10} />
      ))}
    </div>
  )
}

export default CartPage
