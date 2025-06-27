import React, { useState, useEffect } from 'react';
import './LandingPage.css';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import MobileMenu from './MobileMenu';
import Menu from '../assets/Nav Menu.png';
import Watch from '../assets/Watch.png';
import Watch2 from '../assets/Watch 2.png';
import Watch3 from '../assets/Watch 3.png';
import Watch4 from '../assets/Watch 4.png';

const LandingPage = () => {
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    if (windowWidth <= 840) {
      setMobileMenuVisible(!mobileMenuVisible);
    } else {
      setSidebarVisible(!sidebarVisible);
    }
  };

  return (
    <div className="container">
      <div className="hamburger-icon" onClick={toggleSidebar}>
        <img src={Menu} alt="menu" />
      </div>

      {/* Show Sidebar:
          - Always show on small screen (≤840px)
          - Only show on large screen if sidebarVisible is true
      */}
      {windowWidth <= 840 ? (
        <Sidebar />
      ) : (
        sidebarVisible && <Sidebar />
      )}

      {/* Mobile Menu (nav panel sliding in) */}
      {mobileMenuVisible && windowWidth <= 840 && (
        <MobileMenu onClose={() => setMobileMenuVisible(false)} />
      )}

      <div className="main-container">
        <Navbar />

        <div className="main-page">
          <div className="content">
            <div className="text-area">
              <h1>
                <span className="bold">The Perfect Moment</span>
              </h1>
              <p>Between Past And Future.</p>
             <div className="btn-wrapper">
    <button className="btn">Buy Now</button>
             </div>
            </div>

            <div className="watch-area">
              <img src={Watch} className="watch-img" alt="Main Watch" />

              <div className="dot-column">
                <div className="dot-wrapper"><div className="dot black"></div></div>
                <div className="dot-wrapper selected"><div className="dot grey"></div></div>
                <div className="dot-wrapper"><div className="dot blue"></div></div>
                <div className="dot-wrapper"><div className="dot peach"></div></div>
              </div>

              <div className="watches">
                <img src={Watch2} alt="watch2" />
                <img src={Watch3} alt="watch3" />
                <img src={Watch4} alt="watch4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
