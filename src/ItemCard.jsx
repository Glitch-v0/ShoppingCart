import React, { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';

function ItemCard({ item }) {
  const [quantity, setItemQuantity] = useState(1);
  const { cartItems, updateCart } = useOutletContext();

  function addItemToCart() {
    console.log(`Adding ${quantity} of ${item.title} to cart`);

    updateCart(prevCartItems => {
      const updatedCart = [...prevCartItems];
      
      // Find if the item already exists in the cart
      const itemIndex = updatedCart.findIndex(cartItem => cartItem.id === item.id);

      if (itemIndex !== -1) {
        // If the item exists, update its quantity
        updatedCart[itemIndex].quantity += quantity;
        console.log(`Updated item ${item.title} to quantity ${updatedCart[itemIndex].quantity}`);
      } else {
        // If the item doesn't exist, add it to the cart
        updatedCart.push({ ...item, quantity });
        console.log(`Added item ${item.title} with quantity ${quantity}`);
      }

      return updatedCart;
    });

    // Reset quantity after adding to cart if desired
    setItemQuantity(0);
  }

  useEffect(() => {
    console.log(`Cart items updated: ${JSON.stringify(cartItems)}`);
  }, [cartItems]);

  return (
    <div className="item-card">
      <h3>{item.title}</h3>
      <img className="item-picture" src={item.image} alt={item.title} />
      <h4>{item.description}</h4>
      <h3>${item.price.toFixed(2)}</h3>
      <label htmlFor={`item-${item.id}-quantity`}>Quantity:</label>
      <input
        type="number"
        name={`item-${item.id}-quantity`}
        id={`item-${item.id}-quantity`}
        value={quantity}
        onChange={(e) => setItemQuantity(Number(e.target.value))}
        min="1"
      />
      <button onClick={addItemToCart} disabled={quantity === 0}>Add To Cart</button>
    </div>
  );
}

export default ItemCard;
