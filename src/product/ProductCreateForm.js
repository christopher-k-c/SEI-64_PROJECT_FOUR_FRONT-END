import React, { useState } from 'react'
import { Alert, Button, Container, Form } from 'react-bootstrap'
import Axios from 'axios'

export default function ProductCreateForm(props) {

    const [newProduct, setNewProduct] = useState({})

    const [ModalAlert, setModalAlert] = useState(false)

    const success = props.success

    const error = props.error

    const handleChange = (e) => {

        const attributeToChange = e.target.name

        const newValue = e.target.value

        const product = {...newProduct}

        product[attributeToChange] = newValue

        setNewProduct(product)
    }

    const addProduct = (product) => {
        console.log("Add Product")
        Axios.post("product/add", product)
        .then(response => {
          console.log(response.data)
          !response.data.product ? props.setError("One or more required fields omitted.") : props.setSuccess("Product added successfully.")
          props.loadProductList();
        })
        .catch((error) => {
          console.log("Error adding product:", error)
        })
      }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(newProduct)
        if(!Object.keys(newProduct).length)
        {
            setModalAlert(true)
        } else {
            addProduct(newProduct)
            props.closeModal()
        }
    }

  return (
    <div>
        { !ModalAlert ? <></> : <Alert variant="danger" onClose={() => {setModalAlert(false)}} dismissible>Product Name, Product Price, Product Description and # in Stock are required fields.</Alert>}
        <h1>Add New Product to Inventory</h1>
        <Container>
            <Form.Group>
                <Form.Label>Product Name</Form.Label>
                <Form.Control name="productName" onChange={handleChange} autoFocus></Form.Control>
            </Form.Group>

            <Form.Group>
                <Form.Label>Product Price &#40;£&#41;</Form.Label>
                <Form.Control name="productPrice" type="number" onChange={handleChange}></Form.Control>
            </Form.Group>

            <Form.Group>
                <Form.Label>Product Description</Form.Label>
                <Form.Control name="productDescription" as="textarea" rows={5} onChange={handleChange}></Form.Control>
            </Form.Group>

            <Form.Group>
                <Form.Label>Stock Count</Form.Label>
                <Form.Control name="productStock" type="number" onChange={handleChange}></Form.Control>
            </Form.Group>

            <Form.Group>
                <Form.Label>Product Image URL</Form.Label>
                <Form.Control name="productImageUrl" onChange={handleChange}></Form.Control>
            </Form.Group>

            <Button variant="primary" onClick={(e) => handleSubmit(e)}>Add Product</Button>

            
        </Container>
    </div>
  )
}
