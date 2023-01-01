import React from 'react'
import './product.css'
import { useDispatch, useSelector} from 'react-redux'
import { cartActions } from '../store/cart-slice'
const Product = ({product}) => {
    const dispatch = useDispatch();
    const cartItems= useSelector((state)=> state.cart.itemsList);
    console.log(cartItems);

    const addToCart = ()=>{
        dispatch(cartActions.addToCart({
            name: product.name,
            id: product._id,
            price: product.price
        }))
       

    }
    // console.log(product._id)
  return (
    <div className='product-card'>
        <img src={product.imageUrl} />
        <h1>{product.name}</h1>
        <h5>{product.price} Rs</h5>
        <button onClick={()=> addToCart()}>Add to cart</button>
    </div>
  )
}

export default Product