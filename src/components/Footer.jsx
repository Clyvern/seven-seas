import React from 'react';
// Make sure the path to your logo is correct
import logo from '../assets/seven-seas-logo.webp';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className='footer'  dir='ltr'>
      <div className='footer-container'>
        {/* Logo Section */}
        <div className='footer-logo'>
          <img src={logo} alt='Seven Seas Graphic' className='logo-graphic' />
          <div className='logo-text'>
          </div>
        </div>

        {/* Contact Info Section */}
        <div className='footer-info'>
          <div className='info-row'>
            <a href="tel:+966550049222">
                <span style={{ direction: 'ltr', unicodeBidi: 'embed', display: 'inline-block' }}>
                  +966 55 004 9222
                </span>
              </a>
          </div>
          
            <a href='mailto:info@sevensseas.net'>info@sevensseas.net</a>
          <div className='info-row'>
            {/* The address can be a link to Google Maps */}
            <a
              href='https://maps.app.goo.gl/pdUnuEjYBpVZFfg28'
              target='_blank'
              rel='noopener noreferrer'
            >
             7277 King Fahad Branch Road, Al Olaya Dist., 3333, Riyadh, 12212, KSA
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
