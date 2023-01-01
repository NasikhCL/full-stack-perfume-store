import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name:"cart",
    initialState: {
        itemsList:[],
        totalQuantity: 0,
        showCart: false

    },
    reducers:{
        addToCart(state,action){
            const newItem = action.payload;
            console.log(action.payload)
            const existingItem = state.itemsList.find((item) => item.id === newItem.id );
            if(existingItem){
                existingItem.totalQuantity += 1;
                existingItem.price += newItem.price;
            }else{
                state.itemsList.push({
                    id: newItem.id,
                    name: newItem.name,
                    price: newItem.price,
                    totalPrice: newItem.price,
                    quantity: 1,
                    totalPrice : newItem.price,

                })
            }
            state.isLoggedIn = true;
        },
        removeFromCart(){    
            
        },
        setShowCart(state){
            state.setShowCart = true;

        }
    }
})

export const cartActions = createSlice.action;
export default cartSlice;