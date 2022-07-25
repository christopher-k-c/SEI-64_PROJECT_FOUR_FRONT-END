import React, { useState, useRef } from 'react'
import { Alert, Button, Container, Form } from 'react-bootstrap'
import Axios from 'axios'

export default function ProductCreateForm(props) {

    const [newProduct, setNewProduct] = useState({})

    const [ModalAlert, setModalAlert] = useState(false)

    const [isOriginal, setIsOriginal] = useState ("--")

    const success = props.success

    const error = props.error

    const handleChange = (e) => {

        const attributeToChange = e.target.name

        const newValue = e.target.value

        const product = {...newProduct}

        product[attributeToChange] = newValue

        setNewProduct(product)
    }

    const handleSelectChange = (event) => {
        var select = document.getElementById('productSourceType')
        var val = select.options[select.selectedIndex].value
        console.log("Select: ", select, "Value: ", val)
        val !== 'Original Work' ? setIsOriginal(false) : setIsOriginal(true)
        const product = {...newProduct}
        product[event.target.name] = event.target.value
        console.log(product)
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
        { !ModalAlert ? <></> : <Alert variant="danger" onClose={() => {setModalAlert(false)}} dismissible>Product Name, Source, Price, Description and # in Stock are required fields.</Alert>}
        <h1>Add New Product to Inventory</h1>
        <Container>
            <Form.Group>
                <Form.Label>Product Name</Form.Label>
                <Form.Control name="productName" onChange={handleChange} autoFocus></Form.Control>
            </Form.Group>

            <Form.Group>
                <Form.Label>Source Material</Form.Label>
                <Form.Select id="productSourceType" name="productSourceType" type="select" defaultValue="--" onChange={handleSelectChange}>
                    <option value="--" disabled>--</option>
                    <option value="Film/TV">Film/TV</option>
                    <option value="Video Game">Video Game</option>
                    <option value="Original Work">Original Work</option>
                </Form.Select>
            </Form.Group>

            <Form.Group>
                <Form.Label>{(typeof isOriginal == "boolean") ? (isOriginal ? "Original Creator" : "Source Name") : ("")}</Form.Label>
                <Form.Control name="productSource" type={isOriginal==="--" ? ("hidden") : ("text")} onChange={handleChange}></Form.Control>
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
