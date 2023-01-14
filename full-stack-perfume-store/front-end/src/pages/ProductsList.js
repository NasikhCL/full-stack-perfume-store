import React from 'react'
import Product from '../components/Product'

export default function ProductsList() {
  return (
    <div className='w-full px-4 flex mx-auto flex-wrap justify-evenly'>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
    </div>
  )
}
