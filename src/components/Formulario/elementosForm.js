import styled, {css} from 'styled-components';

const colores = {
	borde: "#0075FF",
	error: "#bb2929",
	exito: "#1ed12d"
}

const Contenedor = styled.div`
    
    margin-top:40px;
    margin: 15px;
    box-shadow: 3px 3px 15px 1px rgb(158, 158, 158);
    border-radius: 10px;
    transition: all 0.3s ease-in-out;
`;

const Formulario = styled.form`
display: grid;
grid-template-columns: 1fr 1fr;
gap: 20px;

@media (max-width: 800px){
    grid-template-columns: 1fr;
}
`;


const Label = styled.label`
	display: block;
	font-weight: 700;
	padding: 10px;
	min-height: 40px;
	cursor: pointer;
	${props => props.valido === 'false' && css`
		color: ${colores.error};
	`}
`;

const GrupoInput = styled.div`
	position: relative;
	z-index: 90;
    box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5),
    7px 7px 20px 0px rgba(0,0,0,.1),
    4px 4px 5px 0px rgba(0,0,0,.1);  
`;

const Input = styled.input`
	width: 100%;
	background: #fff;
	border-radius: 3px;
	height: 45px;
	line-height: 45px;
	padding: 0 40px 0 10px;
	transition: .3s ease all;
	border: 3px solid transparent;
	&:focus {
		border: 3px solid ${colores.borde};
		outline: none;
		box-shadow: 3px 0px 30px rgba(163,163,163, 0.4);
	}
    ${props => props.valido === 'true'&& css`
       border: 3px solid ${colores.exito}!important ;
    `}
    ${props => props.valido === 'false'&& css`
       border: 3px solid ${colores.error} !important;
    `}
`;    

const LeyendaError = styled.p`
    font-size: 12px;
    margin-bottom: 0;
    color: ${colores.error};
    display: none;
    ${props => props.valido === 'true'&& css`
    display: none;
   `}
   ${props => props.valido === 'false'&& css`
   display: block;
  `}

`;
const IconoValidacion = styled.i`
    position: absolute;
    right: 10px;
    bottom: 8px;
    z-index: 100;
    font-size: 20px;
    opacity: 0;
    ${props => props.valido === 'false'&& css`
       opacity:1;
       color:${colores.error}
    `}
    ${props => props.valido === 'true'&& css`
       opacity:1;
       color:${colores.exito}
    `}


`;
const ContenedorTerminos = styled.div`
	grid-column: span 2;
	input {
		margin-right: 10px;
	}
	@media (max-width: 768px){
		grid-column: span 1;
	}
`;

const ContenedorBotonCentrado = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	grid-column: span 2;
	@media (max-width: 800px){
		grid-column: span 1;
	}
  

`;

const BotonSubtmit= styled.button`
width: 200px;
height: 40px;
color: #000;
border-radius: 5px;
font-family: 'Lato', sans-serif;
font-weight: 500;
background: transparent;
cursor: pointer;
transition: all 0.3s ease;
position: relative;
display: inline-block;
 box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5),
 7px 7px 20px 0px rgba(0,0,0,.1),
 4px 4px 5px 0px rgba(0,0,0,.1);
outline: none;
`;



const MensajeError = styled.div`
    
    height: 60px;
	line-height: 45px;
	background: #F66060;
	padding: 0px 15px;
	border-radius: 3px;
	grid-column: span 2;
	p {
		margin: 0;
	} 
	b {
		margin-left: 10px;
	}
`;

 
export {Formulario,
        Contenedor,
        Label, 
        GrupoInput,
        Input,
        LeyendaError,
        IconoValidacion,
        ContenedorTerminos,
        ContenedorBotonCentrado,
        BotonSubtmit,
        MensajeError
    
    };    