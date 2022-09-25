import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from './itemCount';
import {CartContext} from'../../context/CartContext'
import Boton from '../globales/boton';
import '../style/ItemDetail.css';

export const ItemDetail =({objeto})=>{
    const [irCarrito, setIrCarrito] = useState(false);
    const [cantidad, setCantidad] = useState(objeto.cantidad)
    const {AddItem} = useContext(CartContext);

    const onAdd =(quantity) => {
      setIrCarrito(true);
      setCantidad(objeto.cantidad - quantity);
      AddItem(objeto, quantity); 
    }

    useEffect(() => { 
      setCantidad(objeto.cantidad);
  }, [objeto.cantidad]);

    return(
        
        <div  className="estilos row d-flex justify-content-center">
          <div className="col-12 col-md-6  d-flex justify-content-center">

              <img src={objeto.imagen} className="m-5 img-fluid m-2 " width="200" alt={objeto.descripcion}/>  

          </div>
        <div className="col-12 col-md-6 card-body text-center  ">
          <h5 className="card-title">{objeto.descripcion}</h5>
          <p className="card-text text-center">$ {objeto.precio}</p>
          <p className="card-text text-center">Cantidad: {cantidad} </p>
          <p className="card-text text-center">Lorem ipsum dolor sit amet, consectetur adip</p>
          {irCarrito
            ? <div  className="d-flex justify-content-center ">
             <Link to='/carrito' >
                 <Boton titulo="Ir a carrito" />
             </Link> 
             <Link to='/carrito' >
                 <Boton titulo="Terminar" />
             </Link>      
             </div>
            : <ItemCount inicial= {1} stock={objeto.cantidad} onAdd={onAdd}/>
          }
          
        </div>
      </div>
             
    );
}
export default ItemDetail;