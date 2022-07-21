import React from 'react'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'
import Col from 'react-bootstrap/Col'

export default function Cart(props) {


    const cartItems = props.cart.map((item, key) => (
    
          <Card key={key} style={{width: '30rem'}} >
              <Col style={{width: '10rem'}}>
              <Card.Img src={item.productImageUrl} style={{width: '8rem'}} />
              </Col>
                <Col>
               <Card.Body style={{width: '20rem'}}>
                   <Card.Title> {item.productName} </Card.Title>
                   <Card.Text> £{item.productPrice} </Card.Text>
                   <Card.Text> Quantity: {props.productQuantity}</Card.Text>
               </Card.Body>
               </Col>
          </Card>
   
    ));
    // const loadCartArray = () => {
    //     console.log(props.cartItems)
    // }
  return (
    <>
        <h1> In your cart: </h1>
            <form>
            {cartItems}
            <button onClick={() => props.makeCart(props.cart)}>Confirm Cart</button>
            </form>
           
        
    </>
  )
}
