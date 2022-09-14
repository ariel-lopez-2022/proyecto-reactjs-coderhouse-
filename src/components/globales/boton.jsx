import React from "react";

export const Boton= (props)=>{
    
    return (
        <div className="frame">
          <button className="custom-btn btn-16">{props.titulo}</button>
        </div>
    )
}
export default Boton;