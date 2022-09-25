import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import {CartContext} from '../../context/CartContext';
import '../style/CartWidge.css';

const Carrito =()=>{ 
  const {cart, TotalProductos} = useContext(CartContext)
 
  if (cart.length === 0){
    return(
      <> </>

    )
             
  }

  return (
    <Link to="/carrito" style={{ textDecoration: 'none'}} >
    <div className="widge" >
       <span className="material-icons">shopping_cart</span>
       <span className="m-1">{TotalProductos() || '' }</span>
    </div>
    </Link>
  )
  
 
} 
export default Carrito;