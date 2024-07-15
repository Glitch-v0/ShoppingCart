import React, { useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import PropTypes from 'prop-types'

function ItemCard({ item }) {
  const [itemQuantity, setItemQuantity] = useState(1)
  const { updateCart } = useOutletContext()

  function addItemToCart() {
    updateCart((prevCartItems) => {
      const updatedCart = [...prevCartItems]

      // Find if the item already exists in the cart
      const itemIndex = updatedCart.findIndex(
        (cartItem) => cartItem.id === item.id,
      )

      if (itemIndex !== -1) {
        // If the item exists, update its quantity
        updatedCart[itemIndex].quantity += itemQuantity
      } else {
        // If the item doesn't exist, add it to the cart
        updatedCart.push({ ...item, quantity: itemQuantity })
      }

      return updatedCart
    })

    // Reset quantity after adding to cart if desired
    setItemQuantity(0)
  }

  const truncateDescription = (description) => {
    if (description.length <= 50) return description
    const truncated = description.substring(0, 50)
    const lastSpaceIndex = truncated.lastIndexOf(' ')
    return `${truncated.substring(0, lastSpaceIndex)} ...`
  }

  const truncatedDescription = truncateDescription(item.description)

  return (
    <div className="item-card">
      <h3>{item.title}</h3>
      <img className="item-picture" src={item.image} alt={item.title} />
      <h4>{truncatedDescription}</h4>
      <h3>${item.price.toFixed(2)}</h3>
      <div className="input-container">
        <label htmlFor={`item-${item.id}-quantity`}>
          Quantity:{' '}
          <input
            type="number"
            name={`item-${item.id}-quantity`}
            id={`item-${item.id}-quantity`}
            value={itemQuantity}
            onChange={(e) => setItemQuantity(Number(e.target.value))}
            min="1"
            max="25"
          />
        </label>
      </div>
      <button
        type="button"
        onClick={addItemToCart}
        disabled={itemQuantity === 0}
      >
        Add To Cart
      </button>
    </div>
  )
}

ItemCard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    quantity: PropTypes.number,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
}
export default ItemCard
