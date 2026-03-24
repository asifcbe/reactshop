// import { StrictMode } from 'react'
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { UserProvider } from "./contexts/UserContext.jsx";
import { CartProvider } from "./contexts/CartContext.jsx";
import { CategoriesContextProvider } from "./contexts/CategoriesContext.jsx";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <BrowserRouter>
    <UserProvider>
      <CategoriesContextProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </CategoriesContextProvider>
    </UserProvider>
  </BrowserRouter>,
  // </StrictMode>,
);
