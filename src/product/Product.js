import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'



export default function Product(props) {

  // const increaseQuantity = () => {
  //   props.productQuantity += 1
  // }
  return (
    <>


        <Card style={{width: '18rem'}}>

            <Card.Img variant="top" src={props.productImageUrl} />

            <Card.Body>
                <Card.Title>{props.productName}</Card.Title> 
                <Card.Text>£{props.productPrice}</Card.Text>
                <Button variant="primary" onClick={() => {props.addToCart(props._id)}}> Add to Cart </Button> &nbsp;
                <Button onClick={props.increaseQuantity}> + </Button>
                <input type="number" value={props.productQuantity}></input>
                <Button onClick={props.decreaseQuantity}> - </Button>
            </Card.Body>

        </Card>


       


    </>
  )
}
