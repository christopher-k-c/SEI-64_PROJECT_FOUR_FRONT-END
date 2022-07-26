import Axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function OrderDetails(props) {
  const [currentUser, setCurrentUser] = useState({})

  useEffect(() => {
    getOrderUser(props.user)
  }, [])

  console.log(props.products)

  console.log("Occurrences of The Dude's mix:", props.cart.filter(x => x==='62d95f258e8bb8f9d7eda87a').length)

  const orderSet = [...new Set(props.cart)]

  const orderProducts = {}

  console.log(orderSet)

  props.products.forEach(product => {
      if(orderSet.includes(product._id)){
        orderProducts["productName"] = product.productName
        orderProducts["quantity"] = (props.cart.filter(x => x===product._id).length)
      }
  });

  console.log(orderProducts)

//   const mappedProducts = orderProducts?.map((product, index) => (
    
//     <div key={index}>
//       <p>{product}</p>
//     </div>

// ))

  const getOrderUser = (id) => {
    Axios.get(`auth/users/detail?id=${id}`)
    .then((response) => {
        console.log(response.data.user)
        setCurrentUser(response.data.user)
    })
    .catch((error) => {
        console.log(error)
        console.log("Couldn't get order ID.")
    })
    }

  return (
    <div className='order-details'>

      <h3>Delivery Details</h3>
      
      <div className='delivery-details'>
        <h4>Customer</h4>
        <p>Customer Name: <span className='orderDetail'>{currentUser.firstName} {currentUser.lastName}</span></p>
        <p>Email Address: <span className='orderDetail'>{currentUser.emailAddress}</span></p>
        
        <h4>Shipping Address</h4>
        <p>Address Line 1: <span className='orderDetail'>{props.shippingAddress.lineOne}</span></p>
        <p>Address Line 2: <span className='orderDetail'>{props.shippingAddress.lineTwo}</span></p>
        <p>City: <span className='orderDetail'>{props.shippingAddress.city}</span></p>
        <p>Post Code: <span className='orderDetail'>{props.shippingAddress.postcode}</span></p>

        <h4>Billing Address</h4>
        <p>Address Line 1: <span className='orderDetail'>{props.billingAddress.lineOne}</span></p>
        <p>Address Line 2: <span className='orderDetail'>{props.billingAddress.lineTwo}</span></p>
        <p>City: <span className='orderDetail'>{props.billingAddress.city}</span></p>
        <p>Post Code: <span className='orderDetail'>{props.billingAddress.postcode}</span></p>
      </div>

      <h3>Order Details</h3>

      <div className='product-details'>
        <div>
          <div>
            <h4>Order Ref: {props.orderRef}</h4>
            <h4>Order Status: {props.status}</h4>
          </div>
          {/* {mappedProducts} */}
        </div>
      </div>

    </div>
  )
}
