import React, { useState } from 'react'
import {Container, Form, Button} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'


export default function Signup(props) {

    const navigation = useNavigate()

    const [newUser, setNewUser] = useState({})

    const [userRole, setUserRole] = useState("--")

    const sellerKey = process.env.REACT_APP_SELLER_KEY

    console.log(userRole)
    
    console.log(process.env.REACT_APP_SELLER_KEY)
    
    const handleChange = (event) => {
        const user = {...newUser}
        user[event.target.name] = event.target.value
        console.log(user)
        setNewUser(user)
    }

    const handleSelectChange = (event) => {
        var select = document.getElementById('userType')
        var val = select.options[select.selectedIndex].value
        console.log("Select: ", select, "Value: ", val)
        val !== "--" ? setUserRole(val) : setUserRole("--")
        const user = {...newUser}
        user[event.target.name] = event.target.value
        console.log(user)
        setNewUser(user)
    }

    const registerHandler = () => {
        if(userRole === "buyer"){
            props.register(newUser)
            navigation("/login")
            
        } else {
            if (userRole === "seller" && sellerKey !== document.getElementById("sellerKeyForm").value){
                console.log(sellerKey)
                console.log(document.getElementById("sellerKeyForm").value)
                console.log("Invalid verification key.")
            } else {
                props.register(newUser)
                navigation("/login")
            }
        }
    }

    const handleMask = (e) => {
        console.log(e.target.attributes)
        console.log(e.target.attributes)
    }

    // var select = document.getElementById('userType')
    // var val = (select.options === null)
    // console.log(val)

  return (
    <div>
        <h1>Sign Up</h1>
        <Container>
            <Form.Group>
                <Form.Label>First Name</Form.Label>
                <Form.Control name="firstName" onChange={handleChange}></Form.Control>
            </Form.Group>

            <Form.Group>
                <Form.Label>Last Name</Form.Label>
                <Form.Control name="lastName" onChange={handleChange}></Form.Control>
            </Form.Group>

            <Form.Group>
                <Form.Label>Email Address</Form.Label>
                <Form.Control name="emailAddress" onChange={handleChange}></Form.Control>
            </Form.Group>

            <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control name="password" type="password" onChange={handleChange}></Form.Control>
            </Form.Group>

            <Form.Group id="formgroup">
                <Form.Label>User Type</Form.Label>
                <Form.Select id="userType" name="userType" type="select" defaultValue="--" onChange={handleSelectChange}>
                    <option value="--" disabled>--</option>
                    <option value="buyer">Buyer</option>
                    <option value="seller">Seller</option>
                </Form.Select>
            </Form.Group>

            <Form.Group>
                <Form.Label>{userRole === "seller" ? ("Enter your seller verification:") : ("")}</Form.Label>
                <Form.Control id="sellerKeyForm" name="userType" type={userRole !== "seller" ? ("hidden") : ("text")} onChange={(e) => console.log(e.target.value)} autoComplete='new-password' onClick={(e) => {handleMask(e)}}></Form.Control>
            </Form.Group>
            

            <Button variant="primary" onClick={registerHandler}>Register</Button>
        </Container>
    </div>
  )
}
