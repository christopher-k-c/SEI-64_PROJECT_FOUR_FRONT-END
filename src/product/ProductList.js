import React from 'react'
import { useEffect } from 'react'
import Axios from 'axios'


export default function ProductList(props) {

    useEffect(() => {
        loadProductList()
    }, [])


    // const loadProductList = () => {

    //     Axios.get("product/index")
    //     .then((response) => {
    //         console.log(response)
    //         // Setting state here:
    //         props.setProducts(response.data.product)
    //     })
    //     .catch((error) => {
    //         console.log(error)
    //     })
    // }

    const loadProductList = () => {

        props.loadProductList()
        
    }

    



  return (
    <div>

        <h1>Product List</h1>

        {props.allProducts}

    </div>
  )
}
