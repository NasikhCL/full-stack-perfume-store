import axios from "axios";
const baseUrl = 'localhost:8000'


export const getProducts = async () => {
    try{
      const response = await axios({
        method:"GET",
        url:`http://localhost:8000/admin/get-products`
        // headers:{
        //   "Access-Control-Allow-Origin": "http://localhost:3000"
        // }
      })
      return response
    } catch (err) {
      return err.response
    }
  }
  
  export const onSignIn = async(userData)=>{
    try{
      console.log(userData)
      const response = await axios({
        method: 'POST',
        url:"http://localhost:8000/user/signin",
        data: userData
      })
      return response

    }catch (err) {
      return err.response
    }
  }
  
    
  export const onSignUp = async(userData)=>{
    try{
      console.log(userData)
      const response = await axios({
        method: 'POST',
        url:"http://localhost:8000/user/signup",
        data: userData
      })
      return response

    }catch (err) {
      return err.response
    }
  }
  
  
  
  export const onAddToCart = async(product)=>{
    try{
      console.log(product)
      const response = await axios({
        headers:{
          "access-token": localStorage.getItem('access-token')
        },
        method: 'POST',
        url:"http://localhost:8000/user/add-to-cart",
        data: product
        
      })
      return response

    }catch (err) {
      return err.response
    }
  }