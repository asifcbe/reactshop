import './cart-item.styles.scss'
function CartItem({cartItem}) {
    const {name,quantity,imageUrl,price,id}=cartItem;
  return (
    <div key={id} className='cart-item-container'>
        <img src={imageUrl} alt={name}/>
        <div className="item-details">
        <span className='name'>{name}</span>
        <span className='price'>{quantity} X ${price}</span>

        </div>
    </div>
  )
}

export default CartItem