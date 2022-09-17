import React from 'react';
import Items from './item';



export const ItemsList =({datos = []})=>{
    
    return(
        <div className="row p-2 d-flex justify-content-center">
            {datos.map(dato => <Items key={dato.id} info={dato} />)}
       </div>  
    )    
 }
export default ItemsList;