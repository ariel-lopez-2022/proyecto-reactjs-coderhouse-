import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logolibreria.png';

const Logo =()=>{ 
  return (
    
    <Link to='/'>
    <img src={logo} className="logo img-fluid" width="150" height="48" alt="logo Libreria"/>
    </Link>
    
  )  
} 

export default Logo;