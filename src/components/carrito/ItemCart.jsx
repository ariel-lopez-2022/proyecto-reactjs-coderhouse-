import React,{ useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import Boton from "../globales/boton";

import '../style/ItemCart.css';


const Cart =()=> {
     const {cart, TotalPrecio, ClearCart, RemoveItem } = useContext(CartContext);
    return(
       <section className="container"> 
        <div className="descripcion row mt-3 p-2 d-flex justify-content-around text-center">
          <span className="col-2 d-none d-md-block">Foto</span>
          <span className="col-2 ">Desc.</span>
          <span className="col-2 ">Cant.</span>
          <span className="col-2 d-none d-md-block">Prec.</span>
          <span className="col-2 ">S.total</span>
          <span className="col-2 ">Eliminar</span>
        </div>
            {cart.map((producto)=> {
                return (
                 <div key={producto.id} className=" row mt-4  d-flex justify-content-around text-center align-items-center">
                    <td className="col-2 d-none d-md-block"><img src={producto.imagen} width="40" className="img-fluid" alt={producto.descripcion} /></td>
                    <td className="col-2 text ">{producto.descripcion}</td>
                    <td className="col-2 text ">{producto.cantidad}</td>
                    <td className="col-2 text d-none d-md-block">$ {producto.precio}</td>
                    <td className="col-2 text ">$ {producto.cantidad * producto.precio}</td>
                    <td className="col-2 eliminar">
                    <span className="material-icons"onClick={() => {RemoveItem(producto.id)}} >delete_forever</span>
                    </td>
                </div>
              )
            })}
           
            <div className="descripcion row mt-4 d-flex justify-content-between align-items-center ">
              <h5 className="col-4 text-center total p-2 m-0  " > Total $  {TotalPrecio()}</h5>
              
             <span className="col-4 ">
               <Link to="/formulario"><Boton titulo="Finalizar"/> </Link>
             </span>
             <span className="col-4 material-icons text-center " onClick={() => {ClearCart()}}>delete_forever</span>
            </div>
        </section>
      
        )
}
export default Cart;