import shoppingIcon from './cart.svg';

import { useContext } from 'react'
import './cart-icon.styles.scss'
import { CartContext } from '../../contexts/CartContext'


function CartIcon() {
    const {setIsCartOpen,cartItemTotal}=useContext(CartContext)
    const cartClickHandler=()=>{
        setIsCartOpen((d)=>{
          return !d
        })
      }
  return (
    <div className='cart-icon-container' onClick={cartClickHandler}>
        <img src={shoppingIcon} className='shopping-icon' alt='cart' />
        <span className='item-count'>{cartItemTotal}</span>
    </div>
  )
}

export default CartIcon;