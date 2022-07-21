import React from 'react'
import { Button, Card } from 'react-bootstrap'
import Axios from 'axios'

export default function ProductMetrics(props) {

    

  return (
    <div>
        <Card>
            <Card.Body>
                <Card.Title>{props.productName}</Card.Title>
                <Card.Text>Stock: {props.productStock}</Card.Text>
                <Card.Text># of Outstanding Orders: 2</Card.Text>
                <Card.Text>Total Orders: 28</Card.Text>
                <Button variant="primary">Update Record</Button> &nbsp;
                <Button variant="primary" onClick={() => props.handleDelete(props._id)}>De-list Item</Button>
            </Card.Body>
        </Card>
    </div>
  )
}
