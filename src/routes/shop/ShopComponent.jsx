import  { useContext } from 'react'
import { ProductsContext } from '../../contexts/ProductsContext'
import ProductCard from '../../components/product/ProductCard';
import './shop.scss'
function ShopComponent() {

    const {products}=useContext(ProductsContext);
  return (
    <div className='products-container'>
        
        {products.map((product)=>{
            return (
                <ProductCard key={product.id} product={product}/>

            )
        })}
    </div>
  )
}

export default ShopComponent;
