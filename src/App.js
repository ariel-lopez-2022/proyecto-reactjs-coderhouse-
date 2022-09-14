import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import ItemDetailContainer from './components/detail/itemDetailContainer';
import Navbar from './components/header/Navbar';
import ItemListContainer from './components/main/ItemListContainer';


function App() {
  return (
    <BrowserRouter>
       <Navbar />
       <Routes>
          <Route excact path="/" element={<ItemListContainer />} />
          <Route excact path="/categoria/:categoria" element={<ItemListContainer />} />
          <Route excact path="/productos/:id" element={<ItemDetailContainer/> } />   
       </Routes>
    </BrowserRouter>
  );
}
export default App;
