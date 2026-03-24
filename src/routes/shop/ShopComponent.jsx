import Categories from "../categories/Categories";
import {Route,Routes} from "react-router-dom";
import { Category } from "../categories/category/Category";


function ShopComponent() {
  return (
    <>
      <Routes>
        <Route index element={<Categories />} />
        <Route path=":category" element={<Category />} />
      </Routes>
    </>
  );
}

export default ShopComponent;
