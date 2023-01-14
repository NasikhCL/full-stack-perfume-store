import React from 'react'
import { useSelector } from 'react-redux'
import Product from '../components/Product';
const Cart = () => {
    const cartItemsQty = useSelector(state => state.cart.totalQuantity)
    let totalCost = 0
    const itemsList = useSelector(state => state.cart.itemsList);
  // console.log(totalPrice)
  return (
    <div>
    <h2>Cart</h2>
        <p>you have {cartItemsQty} items in the cart</p>
        <div style={{width:"100%", display:"flex", flexWrap:"wrap" ,justifyContent:"space-between"}}>
          <div  style={{width:"50%", display:"flex", flexWrap:"wrap"}}>
            {
              itemsList.map(item =>{
                totalCost += item.totalPrice
                return(
                  <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-between", alignItems:"center", width:"100%",margin:"10px 0",padding:"10px", border:"1px solid black"}} key={item.id}>
                    <img style={{width:"70px", height:"70px"}} src={item.imageUrl} alt="productImg" />
                    <div>{item.name}</div>
                    <div>{item.quantity}</div>
                    <div>{item.price * item.quantity}.Rs</div>
                  </div>
                )
              })
            }
          </div>
          <div>
            <h1>total Bill</h1>
          <h4>total Price: {totalCost}.Rs</h4>
          <hr />
          <button>Process To checkout</button>
          </div>
        </div>
    </div>
  )
}

export default Cart