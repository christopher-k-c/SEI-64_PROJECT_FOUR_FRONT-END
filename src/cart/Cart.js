import React from 'react'
import Card from 'react-bootstrap/Card'
// import Image from 'react-bootstrap/Image'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { useEffect, useState } from 'react'

export default function Cart(props) {

    const [cartDisplayArr, setCartDisplayArr] = useState([])
    useEffect(() => {
        console.log(props.cart)
        setCartDisplayArr(Array.from(new Set(props.cart)))
        // console.log(cartDisplayArr)
    //   return () => {
        
    //   }
    }, [props.cart])
    

    const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);

    // const cartDisplayArray = Array.from(new Set(props.cart))

    // const handleRemoveFromCart = (deletedItem) => {
    //     console.log(deletedItem._id)
    //     const test = cartDisplayArr.filter(element => element._id !== deletedItem._id)
    //     // setCartDisplayArr(cartDisplayArr.filter(element => element._id !== deletedItem._id))
    //     console.log(test)
    //     console.log(countOccurrences(props.cart, deletedItem))
    //     setCartDisplayArr(test)
    //     console.log(cartDisplayArr)

    // }

    const handleInputChange = (e) => {
        console.log(e.target.value)
        console.log(e.target.placeholder)
        let updateBy = e.target.value - e.target.placeholder
        console.log(updateBy)
        props.handleProductQuantity(updateBy)
      }

    const handleUpdateCart = (item) => {
        console.log(item)
        console.log(props.productQuantity)
        props.addToCart(item)
        // for (let i = 1; i <= productQuantity; i++){
        //     setCart(cart => [...cart, product])
        //   }
    }

    const cartItems = cartDisplayArr.map((item, key) => (
    
          <Card key={key} style={{width: '30rem'}} >
              <Col style={{width: '10rem'}}>
              <Card.Img src={item.productImageUrl} style={{width: '8rem'}} />
              </Col>
                <Col>
               <Card.Body style={{width: '20rem'}}>
                   <Card.Title> {item.productName} </Card.Title>
                   <Card.Text> £{item.productPrice} </Card.Text>
                   {/* <Card.Text> Quantity: {props.productQuantity}</Card.Text> */}
                   <Card.Text> Quantity: {countOccurrences(props.cart, item)}</Card.Text>
                   <input type="number" placeholder={countOccurrences(props.cart, item)} min="0" onChange={(e) => handleInputChange(e)}></input>
                   <Button onClick={(e) => {props.handleRemoveFromCart(item)}}> Remove from Cart</Button>
                    <Card.Link onClick={(e) => {handleUpdateCart(item)}}> Update Cart </Card.Link>
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

            {cartItems}
            <button onClick={() => props.makeCart(props.cart)}>Confirm Cart</button>
     
        
    </>
  )
}
