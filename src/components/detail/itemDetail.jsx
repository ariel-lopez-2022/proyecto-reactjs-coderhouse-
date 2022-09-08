import React from 'react';
import ItemCount from './itemCount';


export const itemDetail =({objeto})=>{
  console.log(objeto.id, objeto.descripcion);
   
    return(
        <div  className="card ">
        <div  className="d-flex justify-content-center"> 
         
          <img src={objeto.imagen} className="img-fluid p-2" width="100" alt={objeto.descripcion}/>
        </div>
        <div className="card-body">
          <h5 className="card-title">{objeto.descripcion}</h5>
          <p className="card-text text-center">$ {objeto.precio}</p>
          <p className="card-text text-center">Cantidad: {objeto.cantidad} </p>

          <ItemCount inicial= {1}  />
        </div>
      </div>
       
    )
}
export default itemDetail;