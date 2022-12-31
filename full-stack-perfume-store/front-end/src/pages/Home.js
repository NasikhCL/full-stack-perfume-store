import React, { useEffect, useState } from 'react'
import axios from 'axios'
// import {useSelector, useDispatch } from "react-redux"
// import { getProducts } from '../store/products-slice'
// import { use } from '../../../back-end/routes/admin' 
const Home = () => {
    
    // const [data, setData] = useState([])
    // const dispatch = useDispatch(getProducts())
    // const {isLoading, products} = useSelector(state=>({...state.products}))
      // useEffect(()=>{
      //    async function getP(){
      //       const prod = await axios({
      //           method:"GET",
      //           url:"http://localhost:8000/admin/get-products"
      //           // headers:{
      //           //   "access-token": localStorage.getItem('jwt')
      //           // } 
      //         })
      //         console.log(prod)
      //       }
      //       getP();

        
      // },[])
  return (
    <div>{
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