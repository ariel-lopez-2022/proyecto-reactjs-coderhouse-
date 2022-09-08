import React, {useState, useEffect} from 'react';
import ItemDetail from './itemDetail';
import programacion from '../../assets/helpers/programacion';

const ItemDetailContainer = () => {
   const [objeto, setObjeto] = useState([]);

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
    <div className="container-fluid d-flex justify-content-center">
        <ItemDetail descripcion={objeto.descripcion}  />
    </div>
   )
}
export default ItemDetailContainer;
