import React from 'react';
import './header.css';
import navBarOption from '../../assets/helpers/string';
import Logo from './logo';
import Carrito from './CardWidget';

const Navbar =()=> {
    return(
     <header className="container-fluid">
        <div className="row p-3">
             <div className="col-6">
              <Logo />
             </div>
            <div className="col-6 d-flex justify-content-end">
             <Carrito />
            </div>
            <nav className="row navbar navbar-expand-md  p-0">
            <div className="col d-flex justify-content-center">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <i className="bi bi-list"></i>
            </button>
            <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                <ul className="navbar-nav ">
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle text-center" href="!#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      PRODUCTOS
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                       {navBarOption.map(Option =>
                          <li key={Option.id}>
                            <a className="dropdown-item" href="!#">{Option.categoria}</a> 
                          </li>
                      )}
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
            </div> 
          </nav>
        </div>
     </header>
    )
}   
export default Navbar;
