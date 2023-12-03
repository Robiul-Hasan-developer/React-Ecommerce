import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { Auth0Provider } from '@auth0/auth0-react';

// Product Provider
import ProductProvider from './components/common/productContext/ProductContext.jsx'
import SidebarProvider from './components/common/sidebarContext/SidebarContext.jsx'
import CartProvider from './components/common/cartContext/CartContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  
  
  <SidebarProvider>
    <CartProvider>
      <ProductProvider>
        <React.StrictMode>
          <Auth0Provider
            domain="dev-yi44iwcmdglkdfdo.us.auth0.com"
            clientId="QvUeprU9sqkU5YkihXDOm2PRSfj8fPSX"
            authorizationParams={{
              redirect_uri: window.location.origin
            }}
          >
            <App />
          </Auth0Provider>
        </React.StrictMode>
      </ProductProvider>
    </CartProvider>
  </SidebarProvider>
)


