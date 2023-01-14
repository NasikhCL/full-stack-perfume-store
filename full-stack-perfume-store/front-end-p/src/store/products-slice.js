import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'
const API_URL = "http://localhost:8000/admin/get-products"

export const getProducts = createAsyncThunk("admin/getProdcts",async()=>{
   return axios({
        method:"GET",
        url:API_URL,
        headers:{
          "access-token": localStorage.getItem('jwt')
        }
      })
      .then(res=> (res.json() ))

});

const productsSlice = createSlice({
    name: "products",
    initialState: {
        products:[],
        loading: false,
        error: null
    },
    extraReducers:{
        [getProducts.pending]:(state,action)=>{
            state.loading = true;
        },
        [getProducts.fulfilled]:(state,action)=>{
            state.loading = false;
            state.products = [action.payload];
        },
        [getProducts.rejected]: (state,action)=>{
            state.loading = false;
            state.error = action.payload;
        }
    }
})

export default productsSlice.reducer;

