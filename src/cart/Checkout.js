import React from 'react'
import { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card'
import Cart from './Cart'


export default function Checkout(props) {

    useEffect(() => {
        setCheckoutItems(Array.from(new Set(props.cart)))

    

    }, [props.cart])
    

    console.log("at checkout")
    const [checkoutItems, setCheckoutItems] = useState([])
    // setCheckoutItems(Array.from(new Set(props.cart)))
    const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);

    // console.log(props.cart)
    // console.log(checkoutItems)

    const checkoutList = checkoutItems.map((item, key) => (

        <Card key={key}>
            <Card.Img src={item.productImageUrl} alt="" style={{width: '5rem'}} />
            <Card.Body>
            <Card.Title> {item.productName} </Card.Title>
            <Card.Text> Quantity: {countOccurrences(props.cart, item)} </Card.Text>
            <Card.Text> Subtotal: £{countOccurrences(props.cart, item) * item.productPrice} </Card.Text>
            </Card.Body>
        </Card>
    ));

  return (
    <div>
        <h2>Checkout:</h2>
        {checkoutList}
    </div>
  )
}
