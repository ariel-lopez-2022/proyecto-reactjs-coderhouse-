import React, {useState} from 'react';
import { GrupoInput, IconoValidacion, Label, LeyendaError, Input } from './elementosForm';

 
const Inputs =({estado, cambiarEstado,label,placeholder,tipo, name, leyendaError, expresionRegular})=>{
    const [icono, setIcon] = useState("");
    
    const onChange =(e)=>{
       cambiarEstado({...estado, campo: e.target.value})
    }
    const validacion =()=>{
      
        if(expresionRegular){
            if(expresionRegular.test(estado.campo)){
                cambiarEstado({...estado, valido:'true'})
                setIcon("check_circle")
            }else {
                cambiarEstado({...estado, valido:'false'})
                setIcon("error")
            }
        }
    }
  return(
    <div>
    <Label htmlFor={name} valido={estado.valido}>{label}</Label>
      <GrupoInput>
        <Input 
        type={tipo} 
        placeholder={placeholder} 
        id={name}
        value={estado.campo} 
        onChange={onChange}
        onKeyUp ={validacion}
        onBlur ={validacion}
        valido={estado.valido}
        />
        <IconoValidacion valido={estado.valido} 
          className="material-icons">
          {icono}</IconoValidacion>
      </GrupoInput>
      <LeyendaError valido={estado.valido} >{leyendaError}</LeyendaError>
    </div>  
  )

}
export default Inputs;