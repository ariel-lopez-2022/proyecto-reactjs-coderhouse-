import React, {useState, useEffect} from 'react';
import ItemsList from './itemList';
import programacion from '../../assets/helpers/programacion';

const ItemListContainer = () => {
   const [datos, setDatos] = useState([]);

   useEffect(() => {
      

      const getData =new Promise (resolve => {
        setTimeout(() => {
            resolve(programacion)
        }, 2000);
      });
      getData.then(res => setDatos(res));

   }, [])

   return (
    <div className="container-fluid">
       <h1>Bienvenido a Tu libreria Online!!!</h1>
       <ItemsList datos={datos} />
    </div>
   )
}
export default ItemListContainer;
