import { Link } from 'react-router-dom';
import ProductCard from '../product/ProductCard'
import {CategoryPreviewContainer,Title,Preview} from './category-preview.styles.jsx'

function CategoryPreview({title,products}) {
  return (
    <CategoryPreviewContainer>
        <Title to={title}>
          {title.toUpperCase()}
        </Title>
         <Preview className="preview">
         {products.filter((_,index)=>index<4).map((product)=>{
             return(
                 <ProductCard key={product.id} product={product}/>
             )
         })}
         </Preview>
    </CategoryPreviewContainer>
  )
}

export default CategoryPreview;