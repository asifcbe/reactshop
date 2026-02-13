import React, { useContext } from 'react'
import Button from '../button/button.component'
import './cart-dropdown.styles.scss'
import CartItem from '../cartitem/CartItem';
import { CartContext } from '../../contexts/CartContext';
import { useNavigate } from 'react-router-dom';
function CartDropDown() {
    const {cartItems,setIsCartOpen}=useContext(CartContext);
    const navigate=useNavigate();
      const navigateToCheckout=()=>{
        setIsCartOpen(d=>!d);
        navigate('/checkout');
      }
  return (
    <div className='cart-dropdown-container'>
        <div className="cart-items">
            {cartItems.map(d=><CartItem key={d.id} cartItem={d}/>)}
        </div>
            <Button onClick={navigateToCheckout}>
                Checkout
            </Button>
    </div>
  )
}

export default CartDropDown