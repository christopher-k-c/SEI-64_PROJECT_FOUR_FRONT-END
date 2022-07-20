import React from 'react'

export default function Cart(props) {
  return (
    <div>
        <h1> In your cart: </h1>
        {props.cartItems}
    </div>
  )
}
