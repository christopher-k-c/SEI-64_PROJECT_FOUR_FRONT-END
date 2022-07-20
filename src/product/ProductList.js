import React from 'react'
import { useState, useEffect } from 'react'
import Axios from 'axios'
import Product from './Product'

export default function ProductList(props) {

    
  

    useEffect(() => {
        loadProductList()
    }, [])


    const loadProductList = () => {

        Axios.get("product/index")
        .then((response) => {
            console.log(response)
            // Setting state here:
            props.setProducts(response.data.product)
        })
        .catch((error) => {
            console.log(error)
        })
    }



    // // List all products
    // const allProducts = products.map((products, index) => (

    //     <div key={index}>

    //         <Product  {...products} />

    //     </div>

    // ))

  return (
    <div>
        <h1>Product List</h1>

        {props.allProducts}

        <h1>Test</h1>


        {/* <div>
            <table>
                <tbody>
                    <tr>
                        <th>Product Name</th>
                        <th>Product Price</th>
                        <th>Product Description</th>
                        <th>Product Stock</th>
                        <th>Product Url</th>
                    </tr>
                    {allProducts}
                </tbody>
            </table>
        </div> */}


    
    
    
    </div>
  )
}
