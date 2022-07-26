import React from 'react'

export default function OrderConfirmation(props) {
  return (
    <div>
        <h3> Success! </h3>
        <div> Your order has been sent for processing </div>
        <div> Your order reference number is: {props.orderRef}</div>
    </div>
  )
}
