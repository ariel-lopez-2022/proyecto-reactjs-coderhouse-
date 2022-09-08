import React, {useState, useEffect} from 'react';
import ItemDetail from './itemDetail';
import programacion from '../../assets/helpers/programacion';

const ItemDetailContainer = () => {
   const [objeto, setObjeto] = useState({});
   
   useEffect(() => {
      const getData =new Promise (resolve => {
        setTimeout(() => {
            resolve(programacion)
        }, 2000);
      });
      getData.then((res) => {
         const encontrado = res.find((respuesta) => respuesta.id === 1)
         setObjeto(encontrado);
      });
   }, [])

   return (
         <div className="container-fluid ">
             <div className="row d-flex justify-content-center">
             <h5 className="card-title text-center">Detalles de Productos</h5>
             <ItemDetail objeto={objeto}  />
             </div>
        </div>
   )
}
export default ItemDetailContainer;
