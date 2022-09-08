import React from 'react';
import './App.css';
import ItemDetailContainer from './components/detail/itemDetailContainer';
import Navbar from './components/header/Navbar';
import ItemListContainer from './components/main/ItemListContainer';

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer />
     <ItemDetailContainer />
     </div>
  );
}
export default App;
