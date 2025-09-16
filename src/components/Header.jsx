import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/seven-seas-logo.webp';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import '../styles/Header.css';

const Header = () => {
  const { t } = useLanguage();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  const handleNavLinkClick = () => {
    if (sidebarOpen) {
      closeSidebar();
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        !event.target.closest('.hamburger-menu')
      ) {
        closeSidebar();
      }
    };

    if (sidebarOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'auto';
    };
  }, [sidebarOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 992 && sidebarOpen) {
        closeSidebar();
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [sidebarOpen]);

  return (
    <>
      <header className='header'>
        <div className='container'>
          <div className='logo-container'>
            {/* The logo link can remain a NavLink or simple Link */}
            <NavLink to='/' onClick={handleNavLinkClick}>
              <img src={logo} alt='Seven Seas Logo' className='logo' />
            </NavLink>
          </div>

          <nav className='nav-desktop'>
            <ul className='nav-list-desktop'>
              <li className='nav-item-desktop'>
                {/* 2. USE NavLink and its className function prop */}
                <NavLink
                  to='/'
                  // The 'end' prop ensures this link is only active on the exact path "/"
                  end
                  className={({ isActive }) =>
                    isActive ? 'nav-link-desktop active' : 'nav-link-desktop'
                  }
                  onClick={handleNavLinkClick}
                >
                  {t('nav.home')}
                </NavLink>
              </li>
              <li className='nav-item-desktop'>
                <NavLink
                  to='/about'
                  className={({ isActive }) =>
                    isActive ? 'nav-link-desktop active' : 'nav-link-desktop'
                  }
                  onClick={handleNavLinkClick}
                >
                  {t('nav.about')}
                </NavLink>
              </li>
              <li className='nav-item-desktop'>
                <NavLink
                  to='/services'
                  className={({ isActive }) =>
                    isActive ? 'nav-link-desktop active' : 'nav-link-desktop'
                  }
                  onClick={handleNavLinkClick}
                >
                  {t('nav.services')}
                </NavLink>
              </li>
              <li className='nav-item-desktop'>
                <NavLink
                  to='/contact'
                  className={({ isActive }) =>
                    isActive ? 'nav-link-desktop active' : 'nav-link-desktop'
                  }
                  onClick={handleNavLinkClick}
                >
                  {t('nav.contact')}
                </NavLink>
              </li>
            </ul>
          </nav>

          <button
            className={`hamburger-menu ${sidebarOpen ? 'active' : ''}`}
            onClick={toggleSidebar}
            aria-label='Toggle menu'
            aria-expanded={sidebarOpen}
          >
            <span className='hamburger-box'>
              <span className='hamburger-inner'></span>
            </span>
          </button>

          <div className='language-switcher-container-desktop'>
            <LanguageSwitcher />
          </div>
        </div>
      </header>

      {sidebarOpen && <div className='overlay' onClick={closeSidebar}></div>}

      <nav ref={sidebarRef} className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <ul className='sidebar-nav-list'>
          <li className='sidebar-nav-item'>
            <NavLink
              to='/'
              end // 'end' prop is important here too
              className={({ isActive }) =>
                isActive ? 'sidebar-nav-link active' : 'sidebar-nav-link'
              }
              onClick={handleNavLinkClick}
            >
              {t('nav.home')}
            </NavLink>
          </li>
          <li className='sidebar-nav-item'>
            <NavLink
              to='/about'
              className={({ isActive }) =>
                isActive ? 'sidebar-nav-link active' : 'sidebar-nav-link'
              }
              onClick={handleNavLinkClick}
            >
              {t('nav.about')}
            </NavLink>
          </li>
          <li className='sidebar-nav-item'>
            <NavLink
              to='/services'
              className={({ isActive }) =>
                isActive ? 'sidebar-nav-link active' : 'sidebar-nav-link'
              }
              onClick={handleNavLinkClick}
            >
              {t('nav.services')}
            </NavLink>
          </li>
          <li className='sidebar-nav-item'>
            <NavLink
              to='/contact'
              className={({ isActive }) =>
                isActive ? 'sidebar-nav-link active' : 'sidebar-nav-link'
              }
              onClick={handleNavLinkClick}
            >
              {t('nav.contact')}
            </NavLink>
          </li>
            {/* <li className='sidebar-nav-item'>
            <NavLink
              to='/partners'
              className={({ isActive }) =>
                isActive ? 'sidebar-nav-link active' : 'sidebar-nav-link'
              }
              onClick={handleNavLinkClick}
            >
              {t('nav.partners')}
            </NavLink>
          </li> */}
        </ul>
        <div className='language-switcher-container-mobile'>
          <LanguageSwitcher />
        </div>
      </nav>
    </>
  );
};

export default Header;
