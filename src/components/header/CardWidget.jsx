import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import {CartContext} from '../../context/CartContext';
import '../style/CartWidge.css';

const Carrito =()=>{ 
  const {cart, TotalProductos} = useContext(CartContext)
 
  if (cart.length === 0){
    return(
      <>
       <div className="widge" >
       <span className="">Vacio</span>
        <span className="material-icons">shopping_cart</span>
       </div>
       </>

    )
             
  }

  return (
    <Link to="/carrito" style={{ textDecoration: 'none'}} >
    <div className="widge" >
    <span className="m-1">{TotalProductos() || '' }</span>
       <span className="material-icons">shopping_cart</span>
       
    </div>
    </Link>
  )
  
} 
export default Carrito;