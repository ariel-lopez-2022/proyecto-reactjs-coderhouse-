import React from 'react';
import '../style/header.css';
import navBarOption from '../../assets/helpers/string';
import Logo from './logo';
import Carrito from './CardWidget';
import {Link} from 'react-router-dom'


const Navbar =()=> {
    return(
      <header className="container-fluid">
      <div className="row p-3 d-flex justify-content-center">
           <div className="col-6">
            <Logo />
           </div>
          <div className="col-6 d-flex justify-content-end">
           <Carrito />
          </div>
          <nav className="row navbar navbar-expand-md  p-0">
          <div className="col d-flex justify-content-center">
          <button className="navbar-toggler m-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="material-icons">view_headline</span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
              <ul className="navbar-nav ">
                <li className="nav-item dropdown">
                  <span className="nav-link dropdown-toggle text-center"  id="navbarDropdown"  data-bs-toggle="dropdown" aria-expanded="false">
                    PRODUCTOS
                  </span>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                     {navBarOption.map(Option =>
                        <li key={Option.id}>
                          <Link className="dropdown-item" to={"/categoria/" + Option.categoria}>{Option.categoria}</Link> 
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
