/* eslint-disable react/prop-types */
import React, { useState } from 'react'

function CardItemCard({ item }) {
  const [itemQuantity, setItemQuantity] = useState()

  return (
    <div className="item-card">
      <h3>{item.title}</h3>
      <img className="item-picture" src={item.image} alt={item.title} />
      <h4>{item.description}</h4>
      <h3>${item.price.toFixed(2)}</h3>
      <div className="input-container">
        <label htmlFor={`item-${item.id}-quantity`}>Quantity:</label>
        <input
          type="number"
          name={`item-${item.id}-quantity`}
          id={`item-${item.id}-quantity`}
          value={itemQuantity}
          onChange={(e) => setItemQuantity(Number(e.target.value))}
          min="1"
          max="25"
        />
      </div>
    </div>
  )
}

export default CardItemCard
