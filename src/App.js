import React, { useState, useEffect } from 'react'
import Signup from './user/Signup'
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import Axios from 'axios'
import ProductList from './product/ProductList'
import Product from './product/Product'


export default function App() {

  const [isAuth, setIsAuth] = useState(false)
  const [user, setUser] = useState({})
  // 
  const [products, setProducts] = useState([])
  
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

  const allProducts = products.map((products, index) => (

    <div key={index}>

        <Product  {...products} />

    </div>

  ))

  return (
    <div>
      <Router>
        <nav>
          <Link to="/signup">Sign Up</Link> &nbsp;
          <Link to="/index">Products</Link> &nbsp;
          
          
        </nav>
        <div>
          <Routes>
            <Route path="/signup" element={<Signup register={registerHandler} />} />
            <Route path="/index" element={<ProductList allProducts={allProducts} setProducts={setProducts}/>} />
          </Routes>
        </div>
      </Router>
      {/* <ProductList /> */}
    

    </div>
  )
}
