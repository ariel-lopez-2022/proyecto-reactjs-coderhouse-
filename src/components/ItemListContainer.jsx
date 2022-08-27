import React from 'react';

const ItemListContainer = (props) => {
 const {contenido} = props
   
   return (
    <div>
       <h1>Bienvenido a Tu libreria Online!!!</h1>
       {contenido}
    </div>
   
   )

}
export default ItemListContainer;
