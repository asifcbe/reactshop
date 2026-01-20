import { useState } from "react";
import Home from "./routes/home/Home";
import {Routes,Route} from 'react-router-dom'
import Navigation from "./routes/navigation/Navigation";
import Auth from "./routes/Auth/Auth";
function Shop() {
  return <div>Shop Page</div>;
}

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />} >
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Auth />} />
        </Route>
      </Routes>
    </>
  );
}


export default App;
