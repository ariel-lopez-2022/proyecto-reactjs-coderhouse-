import React from 'react';
import ItemCount from './itemCount';
const ItemListContainer = () => {

   const onAdd =(cantidad)=>{
      console.log(`Se agregaron: ${cantidad} Productos` )
   }
   
  return (
    <div>
       <h1>Bienvenido a Tu libreria Online!!!</h1>
      <ItemCount inicial={1} stock={5} onAdd={onAdd}  />

    </div>
   
   )

}
export default ItemListContainer;
