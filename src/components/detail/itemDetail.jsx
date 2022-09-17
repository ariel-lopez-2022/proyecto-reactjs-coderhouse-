import { useState, useEffect }from 'react';
import { Link } from 'react-router-dom';
import ItemCount from './itemCount';


export const ItemDetail =({objeto})=>{
    const [irCarrito, setIrCarrito] = useState(false);
    const [cantidad, setCantidad] = useState(objeto.cantidad)

    const onAdd =(quantity) => {
      setIrCarrito(true);
      setCantidad(objeto.cantidad - quantity); 

    }

    useEffect(() => { 
      setCantidad(objeto.cantidad);
  }, [objeto.cantidad]);

    return(
        
        <div  className="card-1 col-6 d-flex justify-content-center">
          <img src={objeto.imagen} className="img-fluid m-2 " width="200" alt={objeto.descripcion}/>
        <div className="card-body text-center">
          <h5 className="card-title">{objeto.descripcion}</h5>
          <p className="card-text text-center">$ {objeto.precio}</p>
          <p className="card-text text-center">Cantidad: {cantidad} </p>
          {irCarrito
            ? <Link to='/carrito' cantidad={5}> Ir a CArrito</Link>
            : <ItemCount inicial= {1} stock={objeto.cantidad} onAdd={onAdd}/>
          }
          
        </div>
      </div>
             
    );
}
export default ItemDetail;