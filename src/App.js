import React, { useState, useEffect } from 'react'
import Signup from './user/Signup'
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import Axios from 'axios'


export default function App() {

  const [isAuth, setIsAuth] = useState(false)

  const [user, setUser] = useState({})
  
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

  return (
    <div>
      <Router>
        <nav>
          <Link to="/signup">Sign Up</Link> &nbsp;
        </nav>
        <div>
          <Routes>
            <Route path="/signup" element={<Signup register={registerHandler} />} />
          </Routes>
        </div>
      </Router>



    </div>
  )
}
