import React from 'react'
import { Col, Row, Container, Navbar, Form} from "react-bootstrap";
import './footer.css'

import NewsLetter from './NewsLetter';

export default function Footer(props) {
  return (
    <div className="footer-container fixed-bottom d-flex justify-content-center m-auto" >




      <NewsLetter addNewsletterEmail={props.addNewsletterEmail}/>
    
    
    </div>


  )
}


{/* <div className="fixed-bottom d-flex justify-content-center footer-container" >


<NewsLetter addNewsletterEmail={props.addNewsletterEmail}/>


</div> */}