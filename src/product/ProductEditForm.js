import Axios from 'axios'
import React, { useState } from 'react'
import { Container, Form, Button } from 'react-bootstrap'

export default function ProductEditForm(props) {

  const [formAltered, setFormAltered] = useState(false)

  const [updatedProduct, setUpdatedProduct] = useState({})

  const handleChange = (e) => {
    setFormAltered(true)
    const attributeToChange = e.target.name
    const updatedValue = e.target.value
    const product = {...updatedProduct}
    product[attributeToChange] = updatedValue
    setUpdatedProduct(product)
  }

  const updateProduct = (product) => {
    Axios.put("product/update", product)
    .then(response => {
      console.log(response.data)
      props.loadProductList();
    })
    .catch((error) => {
      console.log("Error updating product:", error)
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(updatedProduct)
    if(formAltered){
      updateProduct(updatedProduct)
    } else {
      console.log("Record not changed.")
    }
    props.showModal(false)
  }


  return (
    <div>
        <Container>
          <Form.Group>
            <Form.Label>Product Name</Form.Label>
            <Form.Control name="productName" onChange={handleChange} defaultValue={props.productName}></Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label>Product Price</Form.Label>
            <Form.Control name="productPrice" type="number" onChange={handleChange} defaultValue={props.productPrice}></Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label>Product Description</Form.Label>
            <Form.Control name="productDescription" onChange={handleChange} defaultValue={props.productName}></Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label>Stock Count</Form.Label>
            <Form.Control name="productStock" type="number" onChange={handleChange} defaultValue={props.productStock}></Form.Control>
          </Form.Group>
          
          <Form.Group>
            <Form.Label>Product Image URL</Form.Label>
            <Form.Control name="productImageUrl" onChange={handleChange} defaultValue={props.productImageUrl}></Form.Control>
          </Form.Group>
          
          <Button variant="primary" onClick={(e) => handleSubmit(e)}>Update Product</Button>
          
        </Container>
    </div>
  )
}
