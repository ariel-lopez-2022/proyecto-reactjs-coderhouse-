import React from 'react';
import { useState } from 'react';
import './itemCount.css';

export const ItemCount =({inicial, stock, onAdd})=> {
    const [count, setCount] = useState(inicial);

    const sumar =()=>{
        setCount(count+1);
    }
    const restar =()=>{
        setCount(count-1);
    }
    return (
        <div className="contenedor">
          <div className="contador">  
            <button className="boton" disabled={count <= 1} onClick={restar}>-</button>
            <span className="span">{count}</span>
            <button className="boton" disabled={ count >= stock} onClick={sumar} >+</button>
          </div>
          <div>
            <button className="botonCarrito" disabled={stock <= 0} onClick={()=> onAdd(count)}>Agregar a Carrito</button>
          </div>
        </div>
    )
}

export default ItemCount;