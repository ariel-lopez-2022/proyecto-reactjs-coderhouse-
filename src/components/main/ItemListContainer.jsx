import { collection, getDocs, query, where } from 'firebase/firestore';
import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../../configuracionFirebase';
import ItemsList from './itemList';

const ItemListContainer = () => {
  const [datos, setDatos] = useState([]);
  const {categoria} =useParams();
 
   useEffect(() => {
      // uso de fireBase
         
        const colecionProductos = collection(db, 'productos') 
        const refCategoria = categoria 
        ? query(colecionProductos, where('categoria', '==', categoria)) 
        : colecionProductos;

        getDocs(refCategoria)
        .then((res) =>{
           const productos = res.docs.map((prod) => {
             return {
               id: prod.id, ...prod.data(),
             }
           })
           setDatos(productos)
        })

      // uso de consultas a api y archivos json
      /* fetch ('../json/productos.json')
         .then ((res) => res.json())
         .then ((json) =>{
              if (categoria === undefined){
               setDatos(json)
              }else {
             const arrayCategoria = json.filter(producto => producto.categoria === categoria);          
             setDatos(arrayCategoria)
             }
         });*/
        
   }, [categoria])

   return (
    <div className="container-fluid ">
       <h1 className="text-center">Bienvenido a Tu libreria Online!!!</h1>
       <ItemsList datos={datos} />
    </div>
   )
}
export default ItemListContainer;
