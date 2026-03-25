import { createContext, useEffect, useState } from "react";
import PRODUCTS from '../shop-data.json'
import SHOP_DATA from "../shop-data.js";
import { addCollectionAndDocuments, getCategoriesAndDocuments } from "../utils/firebaseutils.js";

export const CategoriesContext=createContext({
    categoriesMap:[],
    setCategoriesMap:()=>null
}) 


export const CategoriesContextProvider=({children})=>{
    const [categoriesMap,setCategoriesMap]=useState([]);
    const value={categoriesMap,setCategoriesMap}
    useEffect(()=>{
    // addCollectionAndDocuments("categories",SHOP_DATA);
    getCategoriesAndDocuments().then((categoriesMap)=>{
        setCategoriesMap(categoriesMap);
    });
},[]);
    return (
        <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
    )
}