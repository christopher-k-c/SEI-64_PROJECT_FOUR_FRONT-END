import React, { useEffect } from 'react'
import OrderHistory from './OrderHistory'
import Axios from 'axios'

export default function Dash(props) {
    console.log(props.allStock)
    useEffect(() => {
        loadProductList()
    }, [])

    const loadProductList = () => {

        Axios.get("product/index")
        .then((response) => {
            console.log(response.data.product)
            // Setting state here:
            props.setProducts(response.data.product)
        })
        .catch((error) => {
            console.log(error)
        })
    }
    console.log(props.allStock)

  return (
    <div>
        {props.role === "seller" ? (
        <>
        <h1>Dashboard</h1>
        <h4>Customer Orders</h4>
        <OrderHistory />
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
