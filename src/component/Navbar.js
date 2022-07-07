import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css';
import { Button } from './Button';

function Navbar(){
  const [menuButton, setMenuButton] = useState(false);
  const [btnVis, setBtnVis] = useState(false);

  useEffect(()=>{
  showButton();
  },[]);

  const menuButtonFunc= () => {
  setMenuButton(!menuButton);
  }

  const closeMenuFunc= () => {
  setMenuButton(false);
  }

  const showButton = () => {
    if(window.innerWidth<=960){
    setBtnVis(true);
    }
  }

  window.addEventListener('resize', showButton);


    return(
        <>
          <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                Frost
                <i class='fab fa-typo3' />
                </Link>
                {btnVis && <div
                    className="menu-bar"
                    onClick={menuButtonFunc}
                    >
                        <i className={menuButton ? 'fas fa-times' : 'fas fa-bars'} />
                </div>}
                <ul className={menuButton ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link
                            to='/home'
                            className='nav-link'
                            onClick={closeMenuFunc}
                            >
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link
                            to='/stats'
                            className='nav-link'
                            onClick={closeMenuFunc}
                            >
                            Stats
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link
                        to='/specs'
                        className='nav-link'
                        onClick={closeMenuFunc}

                        >
                            Specs
                        </Link>
                    </li>
                    <li className='nav-links-mobile'>
                        <Link
                        to='/specs'
                        className='nav-link'
                        onClick={closeMenuFunc}
                        >
                          sign up
                        </Link>
                    </li>
                </ul>
                {btnVis && <Button buttonStyle='btnOutline'>SIGN UP</Button>}
            </div>

          </nav>
        </>

    )
}

export default Navbar

