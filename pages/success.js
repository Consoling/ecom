import React, {useState, useEffect} from 'react';
import Link from 'next/link';

import {BsBagCheckFill} from 'react-icons/bs'
import { useStateContext } from '@/context/StateContext';
import {runFireworks} from '../lib/utils';

const Success = () => {
    const {setCartItems, setTotalPrice, setTotalQuantities} = useStateContext();
   
    useEffect(() => {
        localStorage.clear();
        setCartItems([]);
        setTotalPrice(0);
        setTotalQuantities(0);
        runFireworks();
    }, []);

  return (
    <div className='success-wrapper'>
      <div className='success'>
      <p className='icon'>
      <BsBagCheckFill />
      </p>
      <h2>Thank you for your Order 💕</h2>
      <p className='email-msg'> Check your E-Mail for Invoice ✅</p>
      <p className='description'>Have Questions? Email us at 
      <a className='email' href="mailto:goAtstore@gmail.com">goAtstore@gmail.com</a>
      </p>
      <Link href="/">
      <button className='btn' type="button" width="300px">
      Continue Shopping 🛒</button>
      </Link>
      </div>
    </div>
  )
}

export default Success
