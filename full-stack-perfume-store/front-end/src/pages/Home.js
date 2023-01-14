import React from 'react'
import Carousel from '../components/Carousel'
import { Navbar } from '../components/Navbar'
import Product from '../components/Product'
import ProductsList from './ProductsList'


export default function Home() {
  return (
    <div>
        <Navbar />
        {/* <Carousel /> */}
        <ProductsList />
    </div>
  )
}
