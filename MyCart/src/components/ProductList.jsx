import React from 'react'
import Product from './Product'

export const ProductList = (props) => {     //props cannot be changed
    console.log(props);
  return (
    props.product.map((product)=>{
        return <Product />
    })
  )
}
