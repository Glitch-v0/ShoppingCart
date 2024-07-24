import React, { useState, useEffect } from 'react'
import { useOutletContext } from 'react-router-dom'
import PropTypes from 'prop-types'

function ItemCard({ item }) {
  const [itemQuantity, setItemQuantity] = useState(1)
  const { cartItems, updateCart } = useOutletContext()

  // Sets the quantity shown on card to either the amount in cart, or 1 when loaded
  useEffect(() => {
    const cartItem = cartItems.find((itemInCart) => itemInCart.id === item.id)
    setItemQuantity(cartItem ? cartItem.quantity : 1)
  }, [cartItems, item.id])

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
  }

  function changeCart() {
    const newQuantity = Number(
      document.getElementById(`item-${item.id}-quantity`).value,
    )
    setItemQuantity(newQuantity)
    updateCart((prevCartItems) => {
      return prevCartItems.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: newQuantity }
          : cartItem,
      )
    })
  }

  function deleteItem() {
    updateCart((prevCartItems) => {
      return prevCartItems.filter((cartItem) => cartItem.id !== item.id)
    })
  }

  const truncateDescription = (description) => {
    if (description.length <= 50) return description
    const truncated = description.substring(0, 50)
    const lastSpaceIndex = truncated.lastIndexOf(' ')
    return `${truncated.substring(0, lastSpaceIndex)} ...`
  }

  const truncatedDescription = truncateDescription(item.description)
  const isItemInCart = cartItems.some((cartItem) => cartItem.id === item.id)

  const cartButton = () =>
    isItemInCart ? (
      <div className="shopping-button-container">
        <button type="button" onClick={changeCart} className="update-button">
          Update
        </button>
        <button type="button" onClick={deleteItem} className="delete-button">
          Remove
        </button>
      </div>
    ) : (
      <button type="button" onClick={addItemToCart}>
        Add To Cart
      </button>
    )

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
      {cartButton()}
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
