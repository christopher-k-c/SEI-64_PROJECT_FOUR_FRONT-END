import React, { useState, useEffect } from 'react'
import {Container, Form, Button} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import Axios from 'axios'

export default function Login(props) {
    console.log(props)

    const navigation = useNavigate()

    const [newUser, setNewUser] = useState({})

    // const [role, setRole] = useState("")

    const handleChange = (event) => {
        const user = {...newUser}
        user[event.target.name] = event.target.value
        console.log(user)
        setNewUser(user)
    }

    const loginHandler = () => {
        let role = ""
        console.log(newUser)
        Axios.get("auth/users")
        .then(response => {
            for (const user in response.data.user) {                
                const element = response.data.user;
                if(element[user].emailAddress === newUser.emailAddress){
                    role = element[user].userType
                }
            }
            props.login(newUser)
            role === "seller" ? navigation("/manage") : navigation("/index")
        })
        .catch(error => {
          console.log(error)
        })
    }


  return (
    <div>
        <h1>Log In</h1>
        <Container>
            <Form.Group>
                <Form.Label>Email Address</Form.Label>
                <Form.Control name="emailAddress" onChange={handleChange} />
            </Form.Group>

            <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control name="password" type="password" onChange={handleChange} />
            </Form.Group>

            <Button variant="primary" onClick={loginHandler}>Log In</Button>
        </Container>
    </div>
  )
}
