import React, {useState} from 'react';
import Card from 'react-bootstrap/Card';
import ProductDetail from './ProductDetail';
import Modal from 'react-modal';
import Button from 'react-bootstrap/Button';




export default function Product(props) {


  const [modalIsOpen, setModalIsOpen] = useState(false);

  const setModalIsOpenToTrue =()=>{
 
    setModalIsOpen(true)
  }

  const setModalIsOpenToFalse =()=>{
    setModalIsOpen(false)
  }

  const handleInputChange = (e) => {
    console.log(e.target.value)
    props.handleProductQuantity(e.target.value)
  }


  // const increaseQuantity = () => {
  //   props.productQuantity += 1
  // }
  return (
    <>
        <Card style={{width: '18rem'}}>
            <Card.Img variant="top" src={props.products.productImageUrl} />
            <Card.Body>
                <Card.Title>{props.products.productName}</Card.Title> 
                <Card.Text>£{props.products.productPrice}</Card.Text>

                <Button onClick={setModalIsOpenToTrue}>Product Details</Button> &nbsp;

                <Modal isOpen={modalIsOpen} ariaHideApp={false}>
           
                <Button onClick={setModalIsOpenToFalse}>x</Button>
                
                <ProductDetail />
                </Modal>

                <Button variant="primary" onClick={() => {props.addToCart(props.products)}}> Add to Cart </Button> &nbsp;
                {/* <Button onClick={(e) => {props.increaseQuantity(e)}}> + </Button> */}
                <input type="number" name={props.products.name} placeholder="1" min={1}  onChange={(e) => handleInputChange(e)}></input>
                {/* <Button onClick={(e) => {props.decreaseQuantity(e)}}> - </Button> */}
            </Card.Body>

        </Card>
    </>
  )
}
