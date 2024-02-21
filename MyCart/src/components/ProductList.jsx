import React from 'react'
import Product from './Product'

export const ProductList = (props)=>{     //props cannot be changed
    // console.log(props);
  return (
    props.productProp.map((product, i)=>{
        return <Product productProp={product} key={i} incrementQuantity={props.incrementQuantity} decrementQuantity={props.decrementQuantity} index = {i}/>
    })
  )
}
