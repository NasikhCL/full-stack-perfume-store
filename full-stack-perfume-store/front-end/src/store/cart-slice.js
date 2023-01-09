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
                existingItem.quantity+=1;
                existingItem.totalPrice += newItem.price;
            }else{
                state.itemsList.push({
                    id: newItem.id,
                    name: newItem.name,
                    price: newItem.price,
                    imageUrl:newItem.imageUrl,
                    quantity: 1,
                    totalPrice : newItem.price,

                })
                state.totalQuantity++
            }
           
        },
        removeFromCart(){    
            
        },
        setShowCart(state){
            state.setShowCart = true;

        }
    }
})

export const cartActions = cartSlice.actions;
export default cartSlice;