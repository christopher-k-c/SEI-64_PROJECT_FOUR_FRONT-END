import React from 'react'


export default function ProductDetail(props) {
  return (
    <div>
        <h1>Product Detail</h1>


        <div>{props.productImageUrl}</div>
        <div>{props.productName}</div>
        <div>{props.productPrice}</div>
        
    
    </div>
  )
}
