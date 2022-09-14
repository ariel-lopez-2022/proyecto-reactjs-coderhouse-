import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import ItemsList from './itemList';

const ItemListContainer = () => {
  
  const [datos, setDatos] = useState([]);
  const {categoria} =useParams();
  
   useEffect(() => {
      fetch ('../json/productos.json')
         .then ((res) => res.json())
         .then ((json) =>{
              if (categoria === undefined){
               setDatos(json)
              }else {
             const arrayCategoria = json.filter(producto => producto.categoria === categoria);          
             setDatos(arrayCategoria)
             }
         });
        
   }, [categoria])

   return (
    <div className="container-fluid">
       <h1>Bienvenido a Tu libreria Online!!!
       </h1>
       <ItemsList datos={datos} />
    </div>
   )
}
export default ItemListContainer;
