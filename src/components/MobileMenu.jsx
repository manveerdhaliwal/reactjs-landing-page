// src/components/MobileMenu.jsx
import React from 'react';
import './MobileMenu.css';

const MobileMenu = ({ onClose }) => {
  return (
    <div className="mobile-menu">
      <ul>
        <li onClick={onClose}>Mac</li>
        <li onClick={onClose}>iPhone</li>
        <li onClick={onClose}>iPad</li>
        <li className="active" onClick={onClose}>iWatch</li>
        <li onClick={onClose}>Support</li>
      </ul>
    </div>
  );
};

export default MobileMenu;
