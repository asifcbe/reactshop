import { useContext } from "react";
import { Route,Routes } from "react-router-dom";
import { CategoriesContext } from "../../contexts/CategoriesContext";
import "./shop.scss";
import CategoryPreview from "../../components/categorypreview/CategoryPreview";

function Categories() {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </> 
  )
}

export default Categories