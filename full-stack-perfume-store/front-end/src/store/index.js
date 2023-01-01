import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth-slice";
import cartSlice from "./cart-slice";
// import productsReducer from "./products-slice";

const store = configureStore({
    reducer:{
        auth: authSlice.reducer,
        cart: cartSlice.reducer
        // products: productsReducer
    }
})


export default store;