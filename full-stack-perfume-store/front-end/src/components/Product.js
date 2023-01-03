import React from 'react'
import './product.css'
import { useDispatch, useSelector} from 'react-redux'
import { cartActions } from '../store/cart-slice'
import { onAddToCart } from '../utils/apiUtils'
const Product = ({product}) => {
    const dispatch = useDispatch();
    const cartItems= useSelector((state)=> state.cart.itemsList);
    console.log(cartItems);

    const addToCart = async()=>{
        const apiResponse = await onAddToCart(
          {
            name: product.name,
            id: product._id,
            price: product.price,
            quantity: 1
          })
          console.log(apiResponse);
          if(apiResponse.status === 200){
            dispatch(cartActions.addToCart({
                name: product.name,
                id: product._id,
                price: product.price,
            }))
          }else{
            console.log(apiResponse.data.message);
          }
       

    }
    // console.log(product._id)
  return (
    <div className='product-card'>
        <img src={product.imageUrl} alt="productImg" />
        <h1>{product.name}</h1>
        <h5>{product.price} Rs</h5>
        <button onClick={()=> addToCart()}>Add to cart</button>
    </div>
  )
}

export default Product 