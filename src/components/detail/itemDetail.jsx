import React from 'react';
import ItemCount from './itemCount';


export const itemDetail =(id,descripcion)=>{
   
   
    return(
        <div  className="card">
        <img src="" className="card-img-top" alt=""/>
        <div className="card-body">
          <h5 className="card-title">a</h5>
          <p className="card-text">$</p>
          <p className="card-text">Cantidad:</p>
          <ItemCount inicial= {1}  />
          <a href="" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
       
    )
}
export default itemDetail;