import { useState } from "react";
import Home from "./routes/home/Home";
import {Routes,Route} from 'react-router-dom'
import Navigation from "./routes/navigation/Navigation";
import Auth from "./routes/Auth/Auth";
import ShopComponent from "./routes/shop/ShopComponent";
import Checkout from "./components/checkout/Checkout";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />} >
        <Route index element={<Home />} />
        <Route path="shop" element={<ShopComponent />} />
        <Route path="auth" element={<Auth />} />
        <Route path="checkout" element={<Checkout/>}/>
        </Route>
      </Routes>
    </>
  );
}


export default App;
