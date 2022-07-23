import Axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Container, Form, Button } from 'react-bootstrap'

export default function ProductEditForm(props) {
  
  const [formAltered, setFormAltered] = useState(false)
  
  const [updatedProduct, setUpdatedProduct] = useState(props.productToEdit)
  
  useEffect(() => {
    setUpdatedProduct(props.productToEdit)
  }, [props.productToEdit])
  
  console.log(props.productToEdit)
  
  const handleChange = (e) => {
    setFormAltered(true)
    console.log(updatedProduct)
    const attributeToChange = e.target.name
    // console.log("e.target.name:", attributeToChange)
    const updatedValue = e.target.value
    // console.log("e.target.value:", updatedValue)
    const product = {...updatedProduct}
    // console.log("product before updating:", product)
    product[attributeToChange] = updatedValue
    // console.log("Product after updating:", product)
    setUpdatedProduct(product)
  }

  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(updatedProduct)
    if(formAltered){
      props.updateProduct(updatedProduct)
    } else {
      console.log("Record not changed.")
    }
    setFormAltered(false)
    props.showModal(false)
  }
  

  return (
    <div>
        <Container>
          <Form.Group>
            <Form.Label>Product Name</Form.Label>
            <Form.Control name="productName" onChange={handleChange} defaultValue={props.product.productName}></Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label>Product Price</Form.Label>
            <Form.Control name="productPrice" type="number" onChange={handleChange} defaultValue={props.product.productPrice}></Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label>Product Description</Form.Label>
            <Form.Control name="productDescription" as="textarea" rows={5} onChange={handleChange} defaultValue={props.product.productDescription}></Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label>Stock Count</Form.Label>
            <Form.Control name="productStock" type="number" onChange={handleChange} defaultValue={props.product.productStock}></Form.Control>
          </Form.Group>
          
          <Form.Group>
            <Form.Label>Product Image URL</Form.Label>
            <Form.Control name="productImageUrl" onChange={handleChange} defaultValue={props.product.productImageUrl}></Form.Control>
          </Form.Group>
          
          <Button variant="primary" onClick={(e) => handleSubmit(e)}>Update Product</Button>
          
        </Container>
    </div>
  )
}
