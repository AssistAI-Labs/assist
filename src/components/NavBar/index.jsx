import React from 'react';
import logo from '../../assets/logo.ico'
import './style.css'
import { Link } from 'react-scroll';

const NavBar = () => {
  return (
    <div className='navbar'>
      <div className='navbar-logo'>
        <img src={logo} alt="" className='logo-image'/>
        <h1>Assist AI Labs</h1>
      </div>
      <div className='navbar-list'>
        <div className='navbar-list-items'><Link
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Home
          </Link>
        </div>
        <div className='navbar-list-items'>
          <Link
            to="aboutUs"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            About us
          </Link>
        </div>
        <div className='navbar-list-items'>
          <Link
            to="contactUs"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Contact us
          </Link>
        </div>
        <div className='navbar-list-items'>
          <Link
            to="ourTeam"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Our team
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar
