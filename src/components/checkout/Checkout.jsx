import { CartContext } from '../../contexts/CartContext';
import './Checkout.scss';
import { useContext } from 'react';
import CheckoutItem from './checkoutitem/CheckoutItem';
function Checkout() {
    const {cartTotal,cartItems}=useContext(CartContext)
  return (
    <div className='checkout-container'>
        <div className="checkout-header">
            <div className="header-block"><span>Product</span></div>
            <div className="header-block"><span>Description</span></div>
            <div className="header-block"><span>Quantity</span></div>
            <div className="header-block"><span>Price</span></div>
            <div className="header-block"><span>Remove</span></div>
        </div>
        
       
            {cartItems.map(cartItem=>{
                return (
                    <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
                )
            })}
  
        <span className='total'>$ {cartTotal}</span>
    </div>
  )
}

export default Checkout