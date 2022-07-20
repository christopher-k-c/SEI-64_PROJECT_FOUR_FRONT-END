import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'


export default function Product(props) {
  return (
    <>


        <Card style={{width: '18rem'}}>

            <Card.Img variant="top" src={props.productImageUrl} />

            <Card.Body>
                <Card.Title>{props.productName}</Card.Title>
                <Card.Text>£{props.productPrice}</Card.Text>
                <Button variant="primary" onClick={() => {props.addToCart(props._id)}}> Add to Cart </Button>
            </Card.Body>

        </Card>


       


    </>
  )
}
