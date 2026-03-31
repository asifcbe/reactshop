import { createContext, useEffect, useReducer, useState } from "react";
const addCartItem = (cartItems, productToAdd) => {
  const existingItem = cartItems.find((item) => item.id === productToAdd.id);
  if (existingItem) {
    return cartItems.map((item) =>
      item.id === productToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : { ...item },
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};
const removeCartItem = (cartItems, productToRemove) => {
  const existingItem = cartItems.find((item) => item.id === productToRemove.id);
  if (existingItem.quantity == 1) {
    return cartItems.filter((item) => existingItem.id != item.id);
  }
  return cartItems.map((item) =>
    item.id === productToRemove.id
      ? { ...item, quantity: item.quantity - 1 }
      : { ...item },
  );
};
const removeItem = (cartItems, productToRemove) => {
  return cartItems.filter((item) => productToRemove.id != item.id);
};


export const CartContext = createContext({
  isCartOpen: null,
  setIsCartOpen: () => null,
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart:()=>{},
  removeItemCompletely:()=>{},
  cartTotal:0,
  cartItemTotal:0
});
const cartReducer=(state,action)=>{
  const {type,payload}=action;
  switch(type){
    case 'SET_CART_ITEMS':
      return {...state,...payload};
    case 'SET_IS_CART_OPEN':
      return {...state,isCartOpen:payload.isCartOpen}
    default:
      throw new Error(`Unhandled type ${type} in cartReducer`);
  }

}
const defaultCartState={
  isCartOpen:false,
  cartItems:[],
  cartTotal:0,
  cartItemTotal:0
}



export const CartProvider = ({ children }) => {
   const [cartState,dispatch]=useReducer(cartReducer,defaultCartState);
   const updateCartItemsReducer=(newCartItems)=>{
    const newCartTotal=newCartItems.reduce((total,cartItem)=>total+cartItem.quantity*cartItem.price,0)
    const newCartItemTotal=newCartItems.reduce((total,cartItem)=>total+cartItem.quantity,0)
    dispatch({type:'SET_CART_ITEMS',payload:{
      cartItems:newCartItems,
      cartTotal:newCartTotal,
      cartItemTotal:newCartItemTotal
    }})
   } 
   
   const {isCartOpen,cartItems,cartTotal,cartItemTotal}=cartState;

  const addItemToCart = (productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    updateCartItemsReducer(newCartItems);
  };
  const removeItemFromCart = (productToRemove) => {
    const newCartItems = removeCartItem(cartItems, productToRemove);
    updateCartItemsReducer(newCartItems);
  };
  const removeItemCompletely = (productToRemove) => {
    const newCartItems = removeItem(cartItems, productToRemove);
    updateCartItemsReducer(newCartItems);
  };
  const setIsCartOpen=(bool)=>{
    dispatch({type:'SET_IS_CART_OPEN',payload:{isCartOpen:bool}})
  }
  const value = {
    isCartOpen,
    cartItems,
    setIsCartOpen,
    addItemToCart,
    removeItemFromCart,
    removeItemCompletely,
    cartTotal,
    cartItemTotal
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
