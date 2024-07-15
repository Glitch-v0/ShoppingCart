import React, { useState, useEffect } from 'react'
import { useOutletContext } from 'react-router-dom'
import PropTypes from 'prop-types'

export default function CartItemCard({ item }) {
  const [itemQuantity, setItemQuantity] = useState()
  const { updateCart } = useOutletContext()

  const total = item.price * itemQuantity
  useEffect(() => {
    setItemQuantity(item.quantity)
  }, [item.quantity])

  function changeCart(e) {
    const newQuantity = Number(e.target.value)
    setItemQuantity(newQuantity)
    updateCart((prevCartItems) => {
      return prevCartItems.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: newQuantity }
          : cartItem,
      )
    })
  }
  return (
    <div className="cart-card">
      <h3>{item.title}</h3>
      <img className="item-picture" src={item.image} alt={item.title} />
      <div className="price-display">
        <h3>
          Quantity:
          <input
            type="number"
            name={`item-${item.id}-quantity`}
            id={`item-${item.id}-quantity`}
            value={itemQuantity}
            onChange={changeCart}
            min="1"
            max="25"
          />
        </h3>
        <h3>Price Each: ${item.price.toFixed(2)}</h3>
        <h3>Total: ${total.toFixed(2)}</h3>
      </div>
    </div>
  )
}

CartItemCard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    quantity: PropTypes.number,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
}
