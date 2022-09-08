import React from 'react';
const Carrito =()=>{ 
  return (
    <button type="button" className="btn position-relative">
       <a href="!#"><img src="" width="38" alt="logo carrito"/></a>
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">0
          </span>
    </button>
    
  )  
} 
export default Carrito;