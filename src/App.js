import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import ItemDetailContainer from './components/detail/itemDetailContainer';
import Navbar from './components/header/Navbar';
import ItemListContainer from './components/main/ItemListContainer';
import CartProvider from './context/CartContext';
import CartContainer from './components/carrito/CartContainer';

function App() {
  return (
    <BrowserRouter>
       <CartProvider>
         <Navbar />
         <Routes>
           <Route path="/" element={<ItemListContainer />} />
           <Route path="/categoria/:categoria" element={<ItemListContainer />} />
           <Route path="/productos/:id" element={<ItemDetailContainer/> } />  
           <Route  path="/carrito" element={<CartContainer />}  />
           </Routes>
      </CartProvider>
   </BrowserRouter>
  );
}
export default App;
