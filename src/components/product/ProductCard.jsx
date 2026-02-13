import React, { useContext } from 'react'
import Button from '../button/button.component'
import './product-card.styles.scss'
import { CartContext } from '../../contexts/CartContext';
function ProductCard({product}) {
    const {name,price,imageUrl,id}=product;
    const {addItemToCart}=useContext(CartContext)
    const addCartHandler=()=>addItemToCart(product);
  return (
    <div key={id} className='product-card-container'>
        <img src={imageUrl} alt={name}/>
        <div className="footer">
            <span className="name">{name}</span>
            <span className="price">{price}</span>
            </div>
            <Button onClick={addCartHandler} buttonType='inverted'>Add to cart</Button>
    </div>
  )
}

export default ProductCard