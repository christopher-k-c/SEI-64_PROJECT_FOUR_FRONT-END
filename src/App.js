import React, { useState, useEffect } from 'react'
import Signup from './user/Signup'
import Login from './user/Login'
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import Axios from 'axios'
import ProductList from './product/ProductList'
import Product from './product/Product'
import jwt_decode from 'jwt-decode'
import Home from './home/Home'
import {BsCart4} from 'react-icons/bs'
import Badge from 'react-bootstrap/Badge'


export default function App() {

  useEffect(() => {
    let token = localStorage.getItem("token")

    if(token != null){
      let user = jwt_decode(token)
      console.log("USER: ", user.user.name)
      console.log(user)

      if(user){
        setIsAuth(true)
        setUser(user)
      }
      else if (!user){
        localStorage.removeItem("token");
        setIsAuth(false)
      }
    }
  }, [])

  const [isAuth, setIsAuth] = useState(false)
  const [user, setUser] = useState({})
  // 
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])
  const [cartCount, setCartCount] = useState(0)
  const [productQuantity, setProductQuantity] = useState(1)
  
  const registerHandler = (user) => {
    console.log("Made it this far")
    Axios.post("auth/signup", user)
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log(error)
    })
  }

  const addToCart = (product) => {
    console.log("button clicked")
    console.log(product)
    // let tempCart = []

    // setCart(cart.concat(product))
    setCart(cart => [...cart, product])
    setCartCount(cartCount + 1)
    console.log(cart)
    console.log(cartCount)
  }


  const allProducts = products.map((products, index) => (
    
    <div key={index}>

        <Product  {...products} addToCart={addToCart} />

    </div>

  ))

  const loginHandler = (cred) => {
    console.log(cred)
    Axios.post("auth/login", cred)
    .then(response => {
      console.log(response.data.token)
      if(response.data.token != null){
        localStorage.setItem("token", response.data.token);
        let user = jwt_decode(response.data.token)
        setIsAuth(true)
        setUser(user)
        console.log("User successfully logged in.")
      }
    })
  }

  const onLogoutHandler = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    setIsAuth(false)
    setUser(null)
    console.log("User successfully logged out.")
  }

  return (
    <div>
      <Router>
        <nav>

          
          
          
          { isAuth ? (
            <div>
              {user ? `Welcome, ${user.user.name}!` : "null"} &nbsp;
              <Link to="/">Home</Link> &nbsp;
              <Link to="/index">Products</Link> &nbsp;
              <Link to="/logout" onClick={onLogoutHandler}>Log Out</Link> &nbsp;
              <Link to="/checkout"> <BsCart4> <Badge bg="secondary"> {cartCount} </Badge></BsCart4> </Link> &nbsp;
            </div>

          ):(
            <div>
              <Link to="/">Home</Link> &nbsp;
              <Link to="/index">Products</Link> &nbsp;
              <Link to="/signup">Sign Up</Link> &nbsp;
              <Link to="/login">Log In</Link> &nbsp;
              <Link to="/checkout"> <BsCart4> </BsCart4> </Link> <Badge bg="secondary"> {cartCount} </Badge> &nbsp;

          </div>
          )}
        </nav>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup register={registerHandler} />} />
            <Route path="/index" element={<ProductList allProducts={allProducts} setProducts={setProducts} addToCart={addToCart}/>} />
            <Route path="/login" element={<Login login={loginHandler} />} />
          </Routes>
        </div>
      </Router>
      {/* <ProductList /> */}
    

    </div>
  )
}
