import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { FiShoppingBag } from 'react-icons/fi';
import './Navbar.css';
import Logo from '../assets/Logo.png';

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className='navbar'>
      <div className='apple-logo'>
        <img src={Logo} alt="Logo" className='logoimg' />

        <ul className="navbar-menu">
          <li className="navbar-item">Mac</li>
          <li className="navbar-item">iPhone</li>
          <li className="navbar-item">iPad</li>
          <li className="navbar-item">iWatch</li>
          <li className="navbar-item">Support</li>
        </ul>
      </div>

      <div className='navbar-icons'>
        {showSearch && (
          <input
            type="text"
            className="search-input"
            placeholder="Search here"
            autoFocus
          />
        )}
        <FaSearch
          className="nav-icon"
          size={18}
          onClick={() => setShowSearch(prev => !prev)}
        />
        <div className="vertical-line" />
        <FiShoppingBag className="nav-icon" size={18} />
      </div>
    </div>
  );
};

export default Navbar;
