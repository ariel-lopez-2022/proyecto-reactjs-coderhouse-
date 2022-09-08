import { useState} from 'react';


export const ItemCount =({inicial, stock, onAdd})=> {
    
    const [cantidad, setCantidad] = useState(inicial);
    const [itemStock, setitemStock] = useState(stock);
    const [ItemAdd, setitemAdd] = useState(onAdd);

    const restar =(valor)=>{
        if (valor > 0){
            setCantidad(valor);
        }
    }
   
    const sumar =(valor)=>{
        if (valor <= itemStock){
          setCantidad(valor);
        }
    }
    const agregar =()=>{
      if (cantidad <= itemStock){
        setitemStock(itemStock - cantidad);
        setitemAdd(ItemAdd + cantidad)
      }
    }

   
    return (
      <div className="container">
        <div className="row d-flex justify-content-center ">
        <div className="col-6 ">
           <div className="input-group  ">
             <input type="button" className="btn boton-agregar " value="-" onClick={()=>{restar(cantidad - 1)}} />
             <input type="text" className="form-control imput p-0 text-center" value={cantidad} onChange={() => {}}  />
             <input type="button" className="btn boton-agregar " value="+" onClick={()=>{sumar(cantidad + 1)}} />
           </div>
           <div className="d-grid gap-2">
            <button type="button" className="btn boton-agregar" onClick={()=>{agregar()}}>Agregar</button>
           </div> 
           <p className="card-text m-0">Productos Agregados: {ItemAdd}</p>
         </div>
      </div>
    </div> 
    )
}

export default ItemCount;