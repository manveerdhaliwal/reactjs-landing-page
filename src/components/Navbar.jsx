import React from 'react'
//import { Link } from 'react-router-dom';
import { FaSearch, FaShoppingBag } from 'react-icons/fa';
import { FiShoppingBag } from 'react-icons/fi';
import './Navbar.css';
import Logo from '../assets/Logo.png';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='apple-logo'>
                <img src={Logo} alt="Logo" className='logoimg'/>

                <ul className="navbar-menu">
          <li className="navbar-item">
            Mac
          </li>
          <li className="navbar-item">
            iPhone
          </li>
          <li className="navbar-item">
            iPad
          </li>
          <li className="navbar-item">
            iWatch
          </li>
          <li className="navbar-item">
            Support
          </li>
            </ul>
            </div>

            <div className='navbar-icons'>
                  <FaSearch className="nav-icon" size={18} />
                   <div className="vertical-line" /> 
                  <FiShoppingBag className="nav-icon" size={18} />
            </div>
        </div>
    )
}

export default Navbar
