import React from 'react';
import { Link } from 'react-router-dom';
import Boton from '../globales/boton';

const Orden =({orden, nombre, apellido,correo})=>{
  
  apellido.toUpperCase()
    return (
      <div className="container pt-3 d-flex justify-content-center">
      <div className="alert row " role="alert">
      <p className="text-center">Gracias <b>{nombre.toUpperCase()} {apellido.toUpperCase()}</b> por su Compra, se envio un correo a <b>{correo}</b> con los detalles de su compra. </p>
      <div className ="text-center"><b> {orden} </b></div>
      <Link className="text-center pt-5" to={"/"}><Boton titulo="Inicio" />
      </Link>
      </div>
    </div>
    )
}
export default Orden;