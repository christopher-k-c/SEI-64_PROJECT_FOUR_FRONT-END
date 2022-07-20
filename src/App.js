import React, { useState, useEffect } from 'react'
import Signup from './user/Signup'
import Login from './user/Login'
import Dash from './user/Dash'
import Cart from './cart/Cart'
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import Axios from 'axios'
import ProductList from './product/ProductList'
import Product from './product/Product'
import jwt_decode from 'jwt-decode'
import Home from './home/Home'
import ProductMetrics from './product/ProductMetrics'
import {BsCart4} from 'react-icons/bs'
import Badge from 'react-bootstrap/Badge'


export default function App() {

  useEffect(() => {
    console.log("useEffect triggered")
    let token = localStorage.getItem("token")


    if(token != null){
      let user = jwt_decode(token)
      console.log("USER NAME:", user.user.name)
      console.log("USER ROLE:", user.user.role)
      console.log(user)

      if(user){
        setIsAuth(true)
        setUser(user)
        setUserRole(user.user.role)
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
  const [userRole, setUserRole] = useState("")
  const [cart, setCart] = useState([])
  const [cartCount, setCartCount] = useState(0)
  const [productQuantity, setProductQuantity] = useState(1)
  
  const registerHandler = (user) => {
    Axios.post("auth/signup", user)
    .then(response => {
      console.log(response)
      console.log("Signed up successfully!")
    })
    .catch(error => {
      console.log(error)
    })
  }

  const increaseQuantity = () => {
    console.log("increment button clicked")
    setProductQuantity(productQuantity + 1)
  }
  const decreaseQuantity = () => {
    console.log("decrement button clicked")
    if(productQuantity > 1){
      setProductQuantity(productQuantity - 1)
    }
    
  }

  const addToCart = (product) => {
    console.log("button clicked")
    console.log(product)
    // let tempCart = []
    for (let i = 1; i <= productQuantity; i++){
      setCart(cart => [...cart, product])
    }
    // setCart(cart.concat(product))
    // setCart(cart => [...cart, product])
    setCartCount(cartCount + productQuantity)
    console.log(cart)
    console.log(cartCount)
  }


  const allProducts = products.map((products, index) => (
    
    <div key={index}>

      <Product  {...products} addToCart={addToCart} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} productQuantity={productQuantity} />

    </div>

  ))

  const allStock = products.map((products, index) => (

    <div key={index}>

        <ProductMetrics {...products} products={products} setProducts={setProducts} />

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
        console.log(user.user.role)
        setUserRole(user.user.role)
        console.log(userRole)
        console.log("User successfully logged in.")
      }
    })
    .catch(error => {
      console.log(error)
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
              <Link to="/manage">{userRole === "seller" ? "Seller Dashboard" : "My Orders"}</Link> &nbsp;
              <Link to="/">Home</Link> &nbsp;
              <Link to="/index">Products</Link> &nbsp;
              <Link to="/logout" onClick={onLogoutHandler}>Log Out</Link> &nbsp;
              <Link to="/cart"> <BsCart4> <Badge bg="secondary"> {cartCount} </Badge></BsCart4> </Link> &nbsp;
            </div>
          ):(
            <div>
              <Link to="/">Home</Link> &nbsp;
              <Link to="/index">Products</Link> &nbsp;
              <Link to="/signup">Sign Up</Link> &nbsp;
              <Link to="/login">Log In</Link> &nbsp;
              <Link to="/cart"> <BsCart4> </BsCart4> </Link> <Badge bg="secondary"> {cartCount} </Badge> &nbsp;

          </div>
          )}
        </nav>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup register={registerHandler} />} />
            <Route path="/index" element={<ProductList allProducts={allProducts} setProducts={setProducts} addToCart={addToCart}/>} />
            <Route path="/login" element={<Login login={loginHandler} />} />
            <Route path="/manage" element={<Dash role={userRole} allStock={allStock} products={products} setProducts={setProducts}/>} />
            <Route path="/cart" element={<Cart cartItems={cart}/>} />
          </Routes>
        </div>
      </Router>
      {/* <ProductList /> */}
    

    </div>
  )
}
