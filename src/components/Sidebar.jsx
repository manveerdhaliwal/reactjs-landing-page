// src/components/Sidebar.jsx
import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* Top can be left empty or for future */}
      
      <div className="sidebar-bottom">
        <div className="sidebar-icons">
          <FaFacebookF className="icon" />
          <FaTwitter className="icon" />
          <FaLinkedinIn className="icon" />
        </div>
        <div className="pagination">← 1 →</div>
      </div>
    </div>
  );
};

export default Sidebar;
