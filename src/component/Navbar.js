import React, {useState} from 'react'
import {Link} from 'react-router-dom'

function Navbar(){
  const [menuButton, setMenuButton] = useState(false);


  const menuButtonFunc= () => {
  setMenuButton(!menuButton);
  }

  const closeMenuFunc= () => {
  setMenuButton(false);
  }



    return(
        <>
          <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                Frost
                </Link>
                <div
                    className="menu-bar"
                    onClick={menuButtonFunc}
                    >
                        {menuButton ? "x":"="}
                </div>
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
                </ul>

            </div>

          </nav>
        </>

    )
}

export default Navbar

