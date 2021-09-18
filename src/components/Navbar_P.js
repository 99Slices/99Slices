import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import navLogo from '../Home_stuffs/Banner/Logo_banner.png'

function Navbar_P() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
  
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
  
    const showButton = () => {
      if (window.innerWidth <= 960) {
        setButton(false);
      } else {
        setButton(true);
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
              <img className='logoImage' src={navLogo} alt='99Slices' />
              {/* <i class='fab fa-typo3' /> */}
            </Link>
            <div className='menu-icon' onClick={handleClick}>
              <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to={'/'} className='nav-links' onClick={closeMobileMenu}>
                  HOME
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to={'/AboutUs'}
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  ABOUT US
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/ContactUs'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  CONTACT US
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/Services'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  SERVICES
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/Projects'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  PROJECTS
                </Link>
              </li>
  
              {/* <li>
                <Link
                  to='/sign-up'
                  className='nav-links-mobile'
                  onClick={closeMobileMenu}
                >
                  Sign Up
                </Link>
              </li> */}
            </ul>
            {/* {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>} */}
          </div>
          <div className='navbar-content'>
            <div className='service-text'>
              PROJECTS
            </div>
            <div className='service-des'>
              <p>We will find you a robust solution in the field of IT,<br/>which will drive your company future to a better place!</p>
            </div>
          </div>
        </nav>
      </>
    );
}

export default Navbar_P