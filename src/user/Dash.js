import React, { useEffect, useState } from 'react'
import OrderHistory from './OrderHistory'
import Axios from 'axios'
import ProductCreateForm from '../product/ProductCreateForm'
import { Button} from 'react-bootstrap'
import Modal from 'react-modal'

export default function Dash(props) {
    useEffect(() => {
        props.loadProductList()
    }, [])

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const setModalIsOpenToTrue =()=>{
    
        setModalIsOpen(true)
    }

    const setModalIsOpenToFalse =()=>{
        setModalIsOpen(false)
    }

    

  return (
    <div>
        {props.role === "seller" ? (
        <>
        <h1>Dashboard</h1>
        <h4>Customer Orders</h4>
        <OrderHistory />
        <br/>
        <br/>
        <Button onClick={setModalIsOpenToTrue}>Add new product to inventory</Button>

                <Modal isOpen={modalIsOpen} ariaHideApp={false}>
           
                <Button onClick={setModalIsOpenToFalse}>x</Button>
                <ProductCreateForm loadProductList={props.loadProductList} closeModal={setModalIsOpenToFalse} success={props.sucMessage} setSuccess={props.setSuccess} error={props.errMessage} setError={props.setError} />

                </Modal>

        {props.allStock}
        </>
        ) : (
        <>
        <h4>My Orders</h4>
        <OrderHistory />
        </>
        )
        }
    </div>
  )
}
