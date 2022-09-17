import React from 'react';
import Boton from '../globales/boton';
import '../style/card.css';
import '../style/boton.css';
import { Link } from 'react-router-dom';

export const Items =({info})=>{
 
  const { id, imagen, descripcion, precio } = info
 
    return(
        <div className="card mb-3">
          <div className="row g-0 ">
            <div className="col-md-4 p-1 d-flex justify-content-center">
             <img src={imagen} className="img-fluid img-card" width="200" alt={descripcion}/>
            </div>
           <div className="col-md-8 titulo">
            <div className="card-body text-center">
              <h5 className="card-title card-titulo ">{descripcion}</h5>
              <p className="card-text precio ">$ {precio}</p>
              <Link to= {"/productos/"+ id}>
              <Boton titulo="Ver" />
              </Link>
             </div>
          </div>
        </div>
      
         
      </div> 
    )
}
export default Items;