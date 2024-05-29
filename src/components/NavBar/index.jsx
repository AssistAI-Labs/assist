import React from 'react';
import { Link } from 'react-router-dom';
// import StartUpLogo from '../StartUpLogo';
import logo from '../../assets/logo.jpg'
import './style.css'

const NavBar = () => {
  return (
    <nav className='navbar'>
      <div className='navbar-logo'>
        <img src={logo} alt="" className='logo-image'/>
        <h1>Assist AI Labs</h1>
      </div>
      <ul className='navbar-list'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about-us">About us</Link></li>
        <li><Link to="/contact-us">Contact us</Link></li>
        <li><Link to="/our-team">Our team</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar
