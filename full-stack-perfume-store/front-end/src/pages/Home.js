import React, { useEffect, useState } from 'react'
import Product from '../components/Product';
import { getProducts } from '../utils/apiUtils';
import './home.css'
// import axios from 'axios'
// import {useSelector, useDispatch } from "react-redux"
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
        <img src="https://img.freepik.com/free-vector/perfume-bottle-gold-ribbon-black_107791-2826.jpg?w=740&t=st=1672562324~exp=1672562924~hmac=145e93cff41adc188290496d5274345517921c84e7c7791e6a9fb74fd893267d" />
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