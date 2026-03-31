import React, { useContext } from 'react'
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component'
import './cart-dropdown.styles.jsx'
import CartItem from '../cartitem/CartItem';
import { CartContext } from '../../contexts/CartContext';
import { useNavigate } from 'react-router-dom';
import { CartDropdownContainer ,CartItems,EmptyMessage} from './cart-dropdown.styles.jsx';
function CartDropDown() {
    const {cartItems,setIsCartOpen,isCartOpen}=useContext(CartContext);
    const navigate=useNavigate();
      const navigateToCheckout=()=>{
        setIsCartOpen(!isCartOpen);
        navigate('/checkout');
      }
  return (
    <CartDropdownContainer>
        <CartItems className="cart-items">
            {cartItems.map(d=><CartItem key={d.id} cartItem={d}/>)}
        </CartItems>
        {cartItems.length===0 && <EmptyMessage>Your cart is empty</EmptyMessage>}
            <Button buttonType={BUTTON_TYPE_CLASSES[BUTTON_TYPE_CLASSES.inverted]} onClick={navigateToCheckout}>
                Checkout
            </Button>
    </CartDropdownContainer>
  )
}

export default CartDropDown