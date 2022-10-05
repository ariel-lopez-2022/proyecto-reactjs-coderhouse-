import { collection, doc, getDoc} from 'firebase/firestore';
import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../../configuracionFirebase';
import ItemDetail from './itemDetail';


export const ItemDetailContainer = () => {
   const {id} = useParams();  
   const [item, setItem]= useState({});
      
      
      useEffect(() => {
         
         const colecionProductos = collection(db, 'productos') 
         const refId = doc(colecionProductos, id); 
         getDoc(refId)
         .then((res) =>{
               setItem({id:res.id, ...res.data(),})
         })
           
      }, [id])

   return (
         <div className="container d-flex justify-content-center">
             <ItemDetail objeto={item}  />
           
        </div>
   )
}
export default ItemDetailContainer;
  

