import React, { useContext } from 'react'
import Button from '../button/button.component'
import {ProductCardContainer,Footer,Image,Name,Price} from './product-card.styles.jsx'
import { CartContext } from '../../contexts/CartContext';
function ProductCard({product}) {
    const {name,price,imageUrl,id}=product;
    const {addItemToCart}=useContext(CartContext)
    const addCartHandler=()=>addItemToCart(product);
  return (
    <ProductCardContainer key={id}>
        <Image src={imageUrl} alt={name} />
        <Footer>
            <Name>{name}</Name>
            <Price>{price}</Price>
        </Footer>
        <Button onClick={addCartHandler} buttonType='inverted'>Add to cart</Button>
    </ProductCardContainer>
  )
}

export default ProductCard