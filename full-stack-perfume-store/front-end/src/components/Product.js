import React from 'react'
import './product.css'
const Product = ({product}) => {
  return (
    <div className='product-card'>
        <img src={product.imageUrl} />
        <h1>{product.name}</h1>
        <h5>{product.price} Rs</h5>
        <button onClick={()=>(console.log('add to cart clicked'))}>Add to cart</button>
    </div>
  )
}

export default Product