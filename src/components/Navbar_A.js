import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import navLogo from '../Home_stuffs/Banner/Logo_banner.png'

function Navbar_A() {
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
              ABOUT US
            </div>
            <div className='service-des'>
              <p>We are company that provide IT solution in<br/>JAVA, Web, Android/IOS, and all IT related<br/>concernce. We offer broad array of solutions to<br/>our clients.</p>
            </div>
          </div>
        </nav>
      </>
    );
}

export default Navbar_A