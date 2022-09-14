import React from 'react';
import ItemCount from './itemCount';


export const ItemDetail =({objeto})=>{
 
    return(
        <div  className="card ">
        <div  className="d-flex justify-content-center"> 
         
          <img src={objeto.imagen} className="img-fluid m-2 " width="100" alt={objeto.descripcion}/>
        </div>
        <div className="card-body text-center">
          <h5 className="card-title">{objeto.descripcion}</h5>
          <p className="card-text text-center">$ {objeto.precio}</p>
          <p className="card-text text-center">Cantidad: {objeto.cantidad} </p>
          <ItemCount inicial= {1} stock={objeto.cantidad} onAdd={0}  />
        </div>
      </div>
       
    )
}
export default ItemDetail;