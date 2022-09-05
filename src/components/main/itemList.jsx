import React from 'react';
import Items from './item';



export const ItemsList =({datos = []})=>{
    console.log(datos)
    return(
        <div className="row">
            {datos.map(dato => <Items key={dato.id} info={dato} />)}
       </div>  
    )    
 }
export default ItemsList;