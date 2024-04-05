import React, { useContext } from 'react'
import {PRODUCTS}  from "../../products"
import {ShopContext} from "../../context/shop-context"
import { CartItems } from './cart-item'
import "./cart.css"
  
import { useNavigate } from 'react-router-dom'

export const Cart = () => {
  const {cartItems, getTotalAmount} = useContext(ShopContext);
  const totalAmount = getTotalAmount()

  const navigate = useNavigate()
  return (
    <div className='cart'>
      
      <div className='cartitems'>
        <h1> Your Cart items </h1>
      </div>
        
        <div className='cartItems'>
           {PRODUCTS.map((product) => {
                if (cartItems[product.id] !== 0){
                  return <CartItems data={product} />
                }
           })}
        </div>
        {totalAmount > 0 ?
        <div className='checkout'>
         
            <p>Subtotal: ${totalAmount}</p>
            <button onClick={() => navigate("/")}>Continue Shopping</button>
            <button>Checkout</button>
        </div>

       : <h1>Your Cart Money</h1>
          }
    </div>
  )
}
