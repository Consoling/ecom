import React, {useRef} from 'react';
import Link from 'next/link';
import {AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShoppingCart} from 'react-icons/ai';

import {TiDeleteOutline} from 'react-icons/ti';
import toast from 'react-hot-toast';

import { useStateContext } from '../context/StateContext';
import {urlFor} from '../lib/client.js'
const Cart = () => {
  const cartRef = useRef();
  const {totalPrice, totalQuantities, cartItems, setShowCart} = useStateContext();


  return (
    <div className="cart-wrapper" ref={cartRef}>
      <div className="cart-container">
      <button
      type="button" className='cart-heading' onClick={() => setShowCart(false)}>
      <AiOutlineLeft />
      <span className='heading'>Your Cart</span>
      <span className='cart-num-items'>({totalQuantities} items)</span>
      </button>

      {cartItems.length < 1 && (
        <div className = "empty-cart">
        <AiOutlineShoppingCart />
        <h3>Your Shopping Bag is empty</h3>
        
        </div>
      )}
      
      </div>
    </div>
  )
}

export default Cart
