import React from 'react'
import { useSelector } from 'react-redux'
const Cart = () => {
    const cartItemsQty = useSelector(state => state.cart.totalQuantity)
  return (
    <div>
    <h2>Cart</h2>
        <p>you have {cartItemsQty} items in the cart</p>
    </div>
  )
}

export default Cart