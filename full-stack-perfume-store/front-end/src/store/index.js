import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth-slice";
// import productsReducer from "./products-slice";

const store = configureStore({
    reducer:{
        auth: authSlice.reducer,
        // products: productsReducer
    }
})


export default store;