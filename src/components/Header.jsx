import React, { useState, useEffect } from 'react';
import '../styles/main.css';
import logo from '../images/logo.svg';
import menu from '../images/icon-hamburger.svg';
import close from '../images/icon-close.svg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {

    const handleClickOutside = (event) => {
      const header = document.querySelector('.header');
      if (header && !header.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []); // Empty dependency array ensures that this effect runs only once on mount

  return (
    <>
      <header className={`header ${isMenuOpen ? 'header-active' : ''}`}>
        <button className={`menu-btn ${isMenuOpen ? 'hidden' : ''}`} onClick={toggleMenu}>
          <img src={menu} alt="Menu" />
        </button>

        <div>
          <img className={`header-logo ${isMenuOpen ? 'hidden' : ''}`} src={logo} alt='Logo' />
        </div>

        <nav className={`nav ${isMenuOpen ? 'nav-active' : ''}`}>
          <button
            className='menu-btn'
            style={{ top: isMenuOpen ? '3rem' : '' }}
            onClick={toggleMenu}
          >
            <img src={close} alt="Close" />
          </button>

          <ul>
            <li>
              <a href='#'>home</a>
            </li>
            <li>
              <a href='#'>shop</a>
            </li>
            <li>
              <a href='#'>about</a>
            </li>
            <li>
              <a href='#'>contact</a>
            </li>
          </ul>
        </nav>
      </header>

      <div className={`overlay ${isMenuOpen ? 'overlay-active' : ''}`}></div>
    </>
  );
};

export default Header;
