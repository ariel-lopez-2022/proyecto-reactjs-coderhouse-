import { useState} from 'react';
import Boton from '../globales/boton';
import '../style/count.css';
import '../style/boton.css';
import {Link} from 'react-router-dom';

export const ItemCount =({inicial, stock, onAdd})=> {
    
    const [cantidad, setCantidad] = useState(inicial);
   
    
    const restar =(valor)=>{
      if (valor > 0 ){
          setCantidad(valor)
      }
    }
   
    const sumar =(valor)=>{
      if (valor <= stock ){
        setCantidad(valor)
    }
  }
  
  
 

return (
    <div >    
        <div className="col-12 d-flex align-items-center justify-content-center ">
             <button type="button" className="boton-count btn-15" onClick={() => {restar(cantidad - 1)}}>-</button>
             <span className="boton-count btn-15  p-0 "  onChange={() => {}}>{cantidad}</span>
             <button type="button" className="boton-count btn-15" onClick={() => {sumar(cantidad + 1)}}>+</button>
        </div>
        <div className="col-12 d-flex justify-content-center">
             <button type="button" className="custom-btn btn-16" onClick={() => {onAdd(cantidad)}}>Agregar</button>
            <Link to="/"><Boton titulo="Cerrar" /></Link>
        </div> 
    </div>
    
     
    )
}


export default ItemCount;