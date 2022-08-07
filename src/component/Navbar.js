import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [menuButton, setMenuButton] = useState(false);
  const [buttonVis, setButtonVis] = useState(true);
  const photo = '/images/propic1.png';


  const handleMenuButton = () => {
    setMenuButton(!menuButton);
  }


  const closeMobileMenu = () => {
    setMenuButton(false);
  }

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButtonVis(false);
    } else {
      setButtonVis(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            FROST
            <img
                className="frost-pic"
                src={photo}
            />
          </Link>
          <div className='menu-icon' onClick={handleMenuButton}>
            <i className={menuButton ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={menuButton ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <a
                href="#backvideo"
                className='nav-links'
                onClick={closeMobileMenu}
                >
                Home
              </a>
            </li>
            <li className='nav-item'>
              <a

                href="#project"
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Projects
              </a>
            </li>
            <li className='nav-item'>
              <a
                //to='/specs'
                href="#about"
                className='nav-links'
                onClick={closeMobileMenu}
              >
                About
              </a>
            </li>

            <li>
              <Link
                to='/data'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Enter Your Data
              </Link>
            </li>
          </ul>
          {buttonVis && <Button style='btn--outline'>Enter Your Data</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
