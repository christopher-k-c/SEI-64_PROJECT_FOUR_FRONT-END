import React, { useState, useEffect } from 'react'
import { Button, Card } from 'react-bootstrap'
import Axios from 'axios'

export default function Inventory(props) {
  return (
    <div>
        <h4>Product Inventory</h4>
        {props.allStock}
    </div>
  )
}
