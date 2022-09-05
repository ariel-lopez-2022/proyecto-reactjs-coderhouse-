import React from 'react';
import ItemCount from './itemCount';
import './card.css';


export const Items =({info})=>{
    console.log(info.imagen)
    return(
        <div className="card mb-3">
        <div className="row g-0 ">
          <div className="col-md-4">
            <img src={info.imagen} className="img-fluid rounded-start" alt={info.descripcion}/>
          </div>
          <div className="col-md-8">
            <div className="card-body text-center">
              <h5 className="card-title card-titulo ">{info.descripcion}</h5>
              <p className="card-text precio ">$ {info.precio}</p>
              <ItemCount inicial={1} stock={info.cantidad} onAdd={0}/>
            </div>
            
          </div>
        </div>
      </div>
       
    )
}
export default Items;