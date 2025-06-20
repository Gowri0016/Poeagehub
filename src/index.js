import React from 'react';
import ReactDOM from 'react-dom/client';
import { CartProvider } from './Overall/Context/CartContext';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
  <CartProvider>
  <BrowserRouter> 
  <App />
  </BrowserRouter>
  </CartProvider>
  </React.StrictMode>
);