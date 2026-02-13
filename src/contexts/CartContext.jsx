import { createContext, useEffect, useState } from "react";
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

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartItemTotal, setCartItemTotal] = useState(0);
  const [cartTotal,setCartTotal]=useState(0);
useEffect(()=>{
    const newCartTotal=cartItems.reduce((total,cartItem)=>total+cartItem.quantity*cartItem.price,0)
    setCartTotal(newCartTotal);
    const newCartItemTotal=cartItems.reduce((total,cartItem)=>total+cartItem.quantity,0)
    setCartItemTotal(newCartItemTotal);
},[cartItems])
  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };
  const removeItemFromCart = (productToRemove) => {
    setCartItems(removeCartItem(cartItems, productToRemove));
  };
  const removeItemCompletely = (productToRemove) => {
    setCartItems(removeItem(cartItems, productToRemove));
  };
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
