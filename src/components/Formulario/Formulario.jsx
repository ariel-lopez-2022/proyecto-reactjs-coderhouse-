import React, {useState, useContext} from 'react';
import { CartContext } from '../../context/CartContext';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import {Contenedor, Formulario ,Label, ContenedorTerminos,
  ContenedorBotonCentrado,
  BotonSubtmit,
  MensajeError
} from './elementosForm';
import Input from './input';
import { Link } from 'react-router-dom';
import Orden from './orden';



const Form =()=>{ 
  const {cart, ClearCart, TotalPrecio} = useContext(CartContext)
  const [nombre, cambiarNombre] = useState({campo: '', valido: null});
  const [apellido, cambiarApellido] = useState({campo: '', valido: null});
  const [domicilio, cambiarDomicilio] = useState({campo: '', valido: null});
  const [localidad, cambiarLocalidad] = useState({campo: '', valido: null});
	const [correo, cambiarCorreo] = useState({campo: '', valido: null});
	const [telefono, cambiarTelefono] = useState({campo: '', valido: null});
	const [terminos, cambiarTerminos] = useState(false);
	const [formularioValido, cambiarFormularioValido] = useState(false);
  const [orderId, setOrderId] = useState("");

  const expresiones = {
    domicilio: /^[A-Za-z0-9\s]+$/g, // Letras, numeros, guion y guion_bajo
    texto: /^[a-zA-ZÀ-ÿ\s]{4,40}$/, // Letras y espacios, pueden llevar acentos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/ // 7 a 14 numeros.
  }
  
    const onChangeTerminos =(e)=>{
        cambiarTerminos(e.target.checked)
    }
    const onSubmit =(e)=>{
        e.preventDefault();
        if (
          nombre.valido === 'true' && 
          apellido.valido === 'true' &&
          domicilio.valido === 'true' &&
          localidad.valido === 'true' &&
          telefono.valido === 'true' &&
          correo.valido === 'true' &&
          terminos 
        ){
          const buyer ={nombre:nombre.campo, apellido:apellido.campo, telefono:telefono.campo, correo:correo.campo};
          const items = [];
          cart.forEach((item)=>{
            items.push({id:item.id, title:item.descripcion, price:item.precio, quantity:item.cantidad  })
          }) 
          const order = {buyer:buyer, items:items, total:TotalPrecio() }
          const db = getFirestore();
          const coleccionOrdenes = collection(db, "order");
          addDoc(coleccionOrdenes, order).then((data)=>{
            setOrderId(data.id)
            
          });
          
          cambiarNombre({campo:"", valido: null})
          cambiarApellido({campo:"", valido: null})
          cambiarDomicilio({campo:"", valido: null})
          cambiarLocalidad({campo:"", valido: null})
          cambiarTelefono({campo:"", valido: null})
          cambiarCorreo({campo:"", valido: null})
          cambiarTerminos(false);
          cambiarFormularioValido(true);
          
        }else {
          cambiarFormularioValido(false);
        }
    }

 
  if( orderId ==="") {
    return(
      <div className="container pt-5">
      <Contenedor className="row">
        <Formulario action="" onSubmit={onSubmit}>
          <Input 
            estado={nombre}
            cambiarEstado={cambiarNombre}
            tipo="text"
            label ="Nombre"
            placeholder ="Ariel"
            name="nombre"
            leyendaError="El Nombre tiene que ser de 4 a 40 dígitos y solo puede contener letras, espacios, acentos."
            expresionRegular={expresiones.texto} 
          />
          <Input
            estado={apellido}
            cambiarEstado={cambiarApellido}
            tipo="text"
            label ="Apellido"
            placeholder ="Lopez"
            name="apellido"
            leyendaError="El Apellido tiene que ser de 4 a 40 dígitos y solo puede contener letras, espacios, acentos."
            expresionRegular={expresiones.texto} 
          />
          <Input
            estado={domicilio}
            cambiarEstado={cambiarDomicilio}
            tipo="text"
            label ="Domicilio"
            placeholder ="Catamanrca 70"
            name="domicilio"
            leyendaError="El Domicilio tiene que ser de 4 a 40 dígitos y solo puede contener letras, espacios, numeros."
            expresionRegular={expresiones.domicilio} 
          />
          <Input
            estado={localidad}
            cambiarEstado={cambiarLocalidad}
            tipo="text"
            label ="Localidad"
            placeholder ="Tartagal"
            name="localidad"
            leyendaError="La Localidad tiene que ser de 4 a 40 dígitos y solo puede contener letras, espacios, acentos."
            expresionRegular={expresiones.texto} 
          />
          <Input
            estado={telefono}
            cambiarEstado={cambiarTelefono}
            tipo="text"
            label ="Telefono"
            placeholder ="3875555555"
            name="telefono"
            leyendaError="El Telefono tiene que ser de 7 a 14 dígitos y solo puede contener numeros."
            expresionRegular={expresiones.telefono} 
          />
           <Input
            estado={correo}
            cambiarEstado={cambiarCorreo}
            tipo="text"
            label ="Email"
            placeholder ="correo@correo.com"
            name="correo"
            leyendaError="El Correo puede contener Letras, numeros y @."
            expresionRegular={expresiones.correo} 
          />
        <ContenedorTerminos>
            <Label>
              <input type="checkbox" 
              name="terminos" 
              id="terminos" 
              checked={terminos}
              onChange={onChangeTerminos}
              />
               Acepto terminos y condiciones
            </Label>  
        </ContenedorTerminos>
        {formularioValido === false && <MensajeError>
          <p className="d-flex align-items-center justify-content-center">
          <span className="material-icons pt-1 ">error</span>
            <b>Error:</b> Por favor rellenar los campos</p>
        </MensajeError>}
           <ContenedorBotonCentrado>
           <BotonSubtmit  type="submit" >Generar Orden</BotonSubtmit>
         </ContenedorBotonCentrado>
       </Formulario>
     </Contenedor>
    </div>  
    )
  } else{
    return(
      <Orden  id={orderId}/>
    )
  }
  }
export default Form;