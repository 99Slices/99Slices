import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import footerLogo from '../Home_stuffs/Footer/logo-footer.png'

function Footer() {
  return (
    <div className='footer-container'>
      
      <div className='flex-box'>
      <div className='box'>
        <div className='flex-box-1'>
          <div class='footer-link-items'>
            <h2>COMPANY</h2>
            <Link to='/'>References</Link>
            <Link to='/'>About 99Slices</Link>
            <Link to='/'>Services</Link>
            <Link to='/'>Contact Us</Link>
          </div>
        </div>
        <div className='flex-box-2'>
          <div class='footer-link-items'>
            <h2>UPDATES</h2>
            <Link to='/'>Careers</Link>
            <Link to='/'>News</Link>
            <Link to='/'>Events</Link>
            <Link to='/'>Explore</Link>
          </div>
        </div>
        <div className='flex-box-3'>
          <div className='logo-box'>
              <Link to='/' className='social-logo'>
                <img className='logoImage' src={footerLogo} alt='99Slices' />
              </Link>
          </div>
          <div className='privacy-box'>
            <p>
              <span className='privacy-span'>Privacy Center</span>
                |
              <span className='privacy-span'>Privacy Policy</span>
                |
              <span className='privacy-span'>Terms of Use</span>
            </p>
          </div>
        </div>
        <div className='flex-box-4'>
          <div className='footer-link-items-social'>
            <div class='social-icons'>
              <Link
                class='social-icon-link facebook'
                to='/'
                target='_blank'
                aria-label='Facebook'
              >
                <i class='fab fa-facebook-f' />
              </Link>
              <Link
                class='social-icon-link instagram'
                to='/'
                target='_blank'
                aria-label='Instagram'
              >
                <i class='fab fa-instagram' />
              </Link>
              <Link
                class='social-icon-link twitter'
                to='/'
                target='_blank'
                aria-label='Twitter'
              >
                <i class='fab fa-twitter' />
              </Link>
              <Link
                class='social-icon-link twitter'
                to='/'
                target='_blank'
                aria-label='LinkedIn'
              >
                <i class='fab fa-linkedin' />
              </Link>
            </div>
          
            <div className='address-bar'>
              <Link><i class='fal fa-phone-alt'></i><span>+9477 573 5780</span></Link>
              <Link><i class='far fa-envelope'></i><span>99Slices@gmail.com</span></Link>
              <Link><i class="fal fa-map-marker-alt"></i><span>129, Devanampiayathissa Mw., Colombo 0100,<br/>Sri Lanka</span></Link>
            </div>
          </div>
        </div>
      </div>
      <div className='box-2'>
        <p>Copyright &#169;2020 99Slices Inc. All Rights Reserved!</p>
      </div>
      </div>
    </div>
  );
}

export default Footer;