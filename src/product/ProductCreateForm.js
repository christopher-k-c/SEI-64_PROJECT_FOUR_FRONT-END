import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import Axios from 'axios'

export default function ProductCreateForm(props) {

    const [newProduct, setNewProduct] = useState({})

    const handleChange = (event) => {

        const attributeToChange = event.target.name

        const newValue = event.target.value

        const product = {...newProduct}

        product[attributeToChange] = newValue

        setNewProduct(product)
    }

    const addProduct = (product) => {
        console.log("Add Product")
        Axios.post("product/add", product)
        .then(response => {
          console.log(response.data)
          console.log("Product added successfully.")
          props.loadProductList();
        })
        .catch((error) => {
          console.log("Error adding product.")
          console.log(error)
        })
      }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(newProduct)
        addProduct(newProduct)
        props.closeModal()
    }

  return (
    <div>
        <h1>Add New Product to Inventory</h1>
        <Container>
            <Form.Group>
                <Form.Label>Product Name</Form.Label>
                <Form.Control name="productName" onChange={handleChange}></Form.Control>
            </Form.Group>

            <Form.Group>
                <Form.Label>Product Price &#40;£&#41;</Form.Label>
                <Form.Control name="productPrice" type="number" onChange={handleChange}></Form.Control>
            </Form.Group>

            <Form.Group>
                <Form.Label>Product Description</Form.Label>
                <Form.Control name="productDescription" type="textarea" onChange={handleChange}></Form.Control>
            </Form.Group>

            <Form.Group>
                <Form.Label># in Stock</Form.Label>
                <Form.Control name="productStock" type="number" onChange={handleChange}></Form.Control>
            </Form.Group>

            <Form.Group>
                <Form.Label>Product Image URL</Form.Label>
                <Form.Control name="productImageUrl" onChange={handleChange}></Form.Control>
            </Form.Group>

            <Button variant="primary" onClick={(event) => handleSubmit(event)}>Add Product</Button>

            
        </Container>
    </div>
  )
}
