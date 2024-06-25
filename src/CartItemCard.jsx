/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react'

function CartItemCard({ item }) {
  const [itemQuantity, setItemQuantity] = useState()
  const total = item.price * itemQuantity
  useEffect(() => {
    setItemQuantity(item.quantity)
  }, [])

  return (
    <div className="cart-card">
      <h3>{item.title}</h3>
      <img className="item-picture" src={item.image} alt={item.title} />
      <div className="price-display">
        <h3>Quantity: {itemQuantity}</h3>
        <h3>Price Each: ${item.price.toFixed(2)}</h3>
        <h3>Total: ${total.toFixed(2)}</h3>
      </div>
    </div>
  )
}

export default CartItemCard
