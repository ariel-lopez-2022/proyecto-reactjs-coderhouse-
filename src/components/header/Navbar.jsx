import React from 'react';
import Logo from './CardWidget';
import navBarOption from '../../assets/helpers/string';


const Navbar =()=> {
    
    return(
     <header className="container-fluid">
        <nav className="navbar navbar-expand-md">
        <a className="navbar-brand" href="index.html">
        <Logo />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <i className="bi bi-list"></i>
        </button>
        <div className="collapse navbar-collapse justify-content-md-end" id="navbarSupportedContent">
          <ul className="navbar-nav ">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle text-center" href="!#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                PRODUCTOS
              </a>
               
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                {navBarOption.map(Option =>{
                  <li key={Option.id}>
                    <a className="dropdown-item" href="!#">{Option.categoria}</a> 
                  </li>
                })};
              </ul>
           
            </li>
            <li className="nav-item">
              <a className="nav-link active text-center" aria-current="page" href="!#">CONTACTANOS</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-center" aria-current="page" href="!#">QUIENES SOMOS</a>
            </li>
          </ul>
        </div>
       </nav>     
     </header>
    )
}   
export default Navbar;