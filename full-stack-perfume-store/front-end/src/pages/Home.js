import React, { useEffect, useState } from 'react'
import Product from '../components/Product';
import { getProducts } from '../utils/apiUtils';
import './home.css'
// import axios from 'axios'
import {useSelector} from "react-redux"
// import { getProducts } from '../store/products-slice'
// import { use } from '../../../back-end/routes/admin' 
const Home = () => {
  const [products, setProducts] = useState([]);
  
  const fetchProducts = async () => {
    const apiResponse = await getProducts();
    setProducts(apiResponse.data.products);
    console.log(products)
  }; 

  useEffect(() => {
    fetchProducts();
  }, []);



  return (
    <div className='home-page'>
      <div className='home-carousel'>
        <img src="https://img.freepik.com/free-vector/perfume-promo-background-with-glass-bottle_107791-12305.jpg?w=1380&t=st=1672660288~exp=1672660888~hmac=f46a000985c3ce2980f855c1141840417cbaa132f1bb20ade397fbbd19780677https://img.freepik.com/free-vector/perfume-glass-bottle-blue-silk-folded-fabric_33099-1928.jpg?t=st=1672660161~exp=1672660761~hmac=4adefb28813e5497475bfb0f4cfb2c0fcd20c5a0b74aefaa600ec1e43ac4d225" />
      </div>
    {
      products.map((item,index)=>{
        return(
          <Product key={index} product={item}/>
        )
      })
        // isLoading ? "loading" :
        // products.map((item,index)=>{
        //     return(
        //         <h1 key={index}>{item.name}</h1>
        //     )
        // })
    }</div>
  )
}

export default Home