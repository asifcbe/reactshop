// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { UserProvider } from './contexts/UserContext.jsx'
import { ProductsContextProvider } from './contexts/ProductsContext.jsx'
import { CartProvider } from './contexts/CartContext.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <BrowserRouter>
    <UserProvider>
      <ProductsContextProvider>
        <CartProvider>
      <App />
      </CartProvider>
      </ProductsContextProvider>
    </UserProvider>
    </BrowserRouter>
  // </StrictMode>,
)
