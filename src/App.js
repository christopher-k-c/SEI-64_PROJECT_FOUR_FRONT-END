import React, { useState, useEffect } from 'react'
import Signup from './user/Signup'
import Login from './user/Login'
import Dash from './user/Dash'
import Cart from './cart/Cart'
import {Route, Routes, Link, useNavigate} from 'react-router-dom'
import Axios from 'axios'
import ProductList from './product/ProductList'
import Product from './product/Product'
import jwt_decode from 'jwt-decode'
import Home from './home/Home'
import ProductMetrics from './product/ProductMetrics'
import {BsCart4} from 'react-icons/bs'
import Badge from 'react-bootstrap/Badge'
import {Alert} from 'react-bootstrap';
import Footer from './footer/Footer'





import 'bootstrap/dist/css/bootstrap.min.css';


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';




export default function App() {

  let navigation = useNavigate()

  useEffect(() => {
    console.log("useEffect triggered")
    let token = localStorage.getItem("token")


    if(token != null){
      let user = jwt_decode(token)
      console.log("USER NAME:", user.user.name)
      console.log("USER ROLE:", user.user.role)
      console.log(user.user)

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
  // const [message, setMessage] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  // Product Detail
  // const [currentProduct, setCurrentProduct] = useState()
  // const [isDetail, setIsDetail] = useState(false)
  
  const registerHandler = (user) => {
    Axios.post("auth/signup", user)
    .then(response => {
      console.log(response)
      console.log("Signed up successfully!")
      setSuccessMessage("User signup has been user successful")
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

  const loadProductList = () => {
    Axios.get("product/index")
    .then((response) => {
        console.log(response)
        // Setting state here:
        setProducts(response.data.product)
    })
    .catch((error) => {
        console.log(error)
    })
  }

  const handleDelete = (id) => {
    console.log(id)
    console.log("clicked")
    Axios.delete(`product/delete?id=${id}`)
    .then((response) => {
        console.log(response)
        console.log("Product record successfully deleted.")
        loadProductList()
    })
    .catch((error) => {
        console.log("Error deleting product record:")
        console.log(error)
    })
}

  const loadCartArray = (cartItems) => {
    // console.log("cart clicked")
    // console.log(cart)
    console.log(cartItems)
  //   Axios.get("cart", cartItems)
  //   .then(response => {
  //     console.log(response)
  //   })
  //   .catch(error => {
  //     console.log(error)
  //   })
  }

  const makeCart = (cartItems) => {
    // e.preventDefault()
    console.log(cartItems)
    console.log("makecart working")
    let idArr = []
    cartItems.forEach(element => {
      idArr.push(element._id)
    });
    console.log(idArr)
    var dataObj = {}
    dataObj.user = user.user.id
    dataObj.status = "active" 
    dataObj.product = idArr
    console.log(dataObj)
    Axios.post("cart", dataObj)
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log(error)
    })
  }


  const allProducts = products.map((products, index) => (
    
    <div key={index}>

      <Product  products={products} addToCart={addToCart} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} productQuantity={productQuantity} />

    </div>

  ))

  const allStock = products.map((products, index) => (

    <div key={index}>

        <ProductMetrics {...products} products={products} setProducts={setProducts} handleDelete={handleDelete}/>

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
        console.log("User successfully logged in.")
        setSuccessMessage("User successfully logged in.")
      }
    })
    .catch(error => {
      console.log(error)
      setErrorMessage("User has failed to login.")
    })
  }

  const onLogoutHandler = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    setIsAuth(false)
    setUser(null)
    setUserRole("")
    console.log("User successfully logged out.")
    setSuccessMessage("User successfully logged out.")
    navigation("/")
  }

//   function detailView(id){
//     console.log("it's me over here!")
//     Axios.get(`product/detail?id=${id}`)
//     .then(response => {
  

  

  // const addProduct = (product) => {
  //   console.log("Add Product")
  //   Axios.post("product/add", product)
  //   .then(response => {
  //     console.log(response.data)
  //     console.log("Product added successfully.")
  //     // loadProductList();
  //   })
  //   .catch((error) => {
  //     console.log("Error adding product.")
  //     console.log(error)
  //   })
  // }

//   return (
//     <div>
//       <Router>
//         <nav>
//           { isAuth ? (
//             <div>
//               {user ? `Welcome, ${user.user.name}!` : "null"} &nbsp;
//               <Link to="/manage">{userRole === "seller" ? "Seller Dashboard" : "My Orders"}</Link> &nbsp;
//               <Link to="/">Home</Link> &nbsp;
//               <Link to="/index">Products</Link> &nbsp;
//               <Link to="/logout" onClick={onLogoutHandler}>Log Out</Link> &nbsp;
//               <Link to="/cart" onClick={loadCartArray}> <BsCart4> </BsCart4> </Link> <Badge bg="secondary"> {cartCount} </Badge> &nbsp;
//             </div>
//           ):(
//             <div>
//               <Link to="/">Home</Link> &nbsp;
//               <Link to="/index">Products</Link> &nbsp;
//               <Link to="/signup">Sign Up</Link> &nbsp;
//               <Link to="/login">Log In</Link> &nbsp;
//               <Link to="/cart" onClick={() => {loadCartArray(cart)}}> <BsCart4> </BsCart4> </Link> <Badge bg="secondary"> {cartCount} </Badge> &nbsp;

// //         console.log(response.data)
// //         var productDetail = response.data
// //         setIsDetail(true)
// //         setCurrentProduct(productDetail)
// //     })
// //     .catch(error => {
//         console.log(error)
//         console.log("Error loading recipe information")
//     })
// }


  const sucMessage = successMessage ? (
    <Alert id="box" variant="success" onClose={() => setSuccessMessage(null)} dismissible>{successMessage}</Alert>
  ): null;

  const errMessage = errorMessage ? (
    <Alert id="box" variant="danger" onClose={() => setErrorMessage(null)} dismissible>{errorMessage}</Alert>
    
  ): null;






  return (

    
    <div>



    
      {/* React Bootstrap Nav Bar*/}
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>



        
        <Navbar.Brand href="#home">Bootleg Tapes</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse className="justify-content-end" >
        <Nav>
          { isAuth ? (
          <>          
          <Nav.Link as={Link} to="/"> Home</Nav.Link>
          <Nav.Link as={Link} to="/index"> Products</Nav.Link>
          <Nav.Link as={Link} to="/logout" onClick={onLogoutHandler}>Logout</Nav.Link>
          <Nav.Link as={Link} to="/manage"> 
          <Navbar.Text>
          {userRole === "seller" ? "Seller Dashboard" : "My Orders"}
          </Navbar.Text>
          </Nav.Link>
          <Navbar.Text>{`Signed in as: ${user.user.name}!`}</Navbar.Text>
          <Nav.Link as={Link} to="/cart"><BsCart4> </BsCart4> <Badge bg="secondary"> {cartCount} </Badge></Nav.Link>
          </>
          ):(
          <>
          <Nav.Link as={Link} to="/login"> Login</Nav.Link>
          <Nav.Link as={Link} to="/"> Home</Nav.Link>
          <Nav.Link as={Link} to="/signup"> Signup</Nav.Link>
          <Nav.Link as={Link} to="/index"> Products</Nav.Link>
          <Nav.Link as={Link} to="/cart"><BsCart4> </BsCart4> <Badge bg="secondary"> {cartCount} </Badge></Nav.Link>
          </>
          )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
     {sucMessage}
     {errMessage}
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup register={registerHandler} />} />
            <Route path="/index" element={<ProductList allProducts={allProducts} setProducts={setProducts} addToCart={addToCart} loadProductList={loadProductList}/>} />
            <Route path="/login" element={<Login login={loginHandler} role={userRole}/>} />
            <Route path="/manage" element={<Dash role={userRole} allStock={allStock} products={products} setProducts={setProducts} loadProductList={loadProductList} sucMessage={sucMessage} setSuccess={setSuccessMessage} error={errMessage} setError={setErrorMessage}/>} />
            <Route path="/cart" element={<Cart cart={cart} makeCart={makeCart} productQuantity={productQuantity} />} />
          </Routes>
        </div>


        <Footer />
      

  
    </div>
  )
}
