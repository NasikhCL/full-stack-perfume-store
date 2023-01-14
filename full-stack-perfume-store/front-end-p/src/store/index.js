import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth-slice";
import cartReducer from "./cart-slice";
import { userReducer } from "./user-slice";
// import productsReducer from "./products-slice";

const store = configureStore({
    reducer:{
        auth: authSlice.reducer,
        cart: cartReducer
        // products: productsReducer
    }
})


export default store;