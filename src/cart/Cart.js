import React from 'react'

export default function Cart(props) {
  console.log(props.cartItems)
  return (
    <div>
        <h1> In your cart: </h1>
        {props.cartItems}
    </div>
  )
}
