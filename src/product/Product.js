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

  
  const stopWarning = (e) => {
    console.log(e.target)
  }


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

                <Button onClick={setModalIsOpenToTrue}>Product Details</Button>

                <Modal isOpen={modalIsOpen} ariaHideApp={false}>
           
                <Button onClick={setModalIsOpenToFalse}>x</Button>
                
                <ProductDetail />

                



                </Modal>
                <Button variant="primary" onClick={() => {props.addToCart(props._id)}}> Add to Cart </Button> &nbsp;
                <Button onClick={props.increaseQuantity}> + </Button>
                <input type="number" value={props.productQuantity} onChange={(e) => stopWarning(e)}></input>
                <Button onClick={props.decreaseQuantity}> - </Button>
            </Card.Body>

        </Card>
    </>
  )
}
