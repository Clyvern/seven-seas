import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/seven-seas-logo.webp';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import '../styles/Header.css';


const Header = () => {
  const { t, lang } = useLanguage();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);

  const handleNavLinkClick = () => {
    if (sidebarOpen) closeSidebar();
  };

  // Define menu items
  const menuItems = [
    { path: '/', label: t('nav.home'), end: true },
    { path: '/about', label: t('nav.about') },
    { path: '/services', label: t('nav.services') },
    { path: '/contact', label: t('nav.contact') },
  ];

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
      <header className="header" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
        <div className="container">
          <div className="logo-container">
            <NavLink to="/" onClick={handleNavLinkClick}>
              <img src={logo} alt="Seven Seas Logo" className="logo" />
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          <nav className="nav-desktop">
            <ul className="nav-list-desktop">
              {menuItems.map((item) => (
                <li key={item.path} className="nav-item-desktop">
                  <NavLink
                    to={item.path}
                    end={item.end || false}
                    className={({ isActive }) =>
                      isActive ? 'nav-link-desktop active' : 'nav-link-desktop'
                    }
                    onClick={handleNavLinkClick}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Hamburger */}
          <button
            className={`hamburger-menu ${sidebarOpen ? 'active' : ''}`}
            onClick={toggleSidebar}
            aria-label="Toggle menu"
            aria-expanded={sidebarOpen}
          >
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>

          {/* Language Switcher */}
          <div className="language-switcher-container-desktop">
            <LanguageSwitcher />
          </div>
        </div>
      </header>

      {sidebarOpen && <div className="overlay" onClick={closeSidebar}></div>}

      {/* Sidebar */}
      <nav
        ref={sidebarRef}
        className={`sidebar ${sidebarOpen ? 'open' : ''}`}
        dir={lang === 'ar' ? 'rtl' : 'ltr'}
      >
        <ul className="sidebar-nav-list">
          {menuItems.map((item) => (
            <li key={item.path} className="sidebar-nav-item">
              <NavLink
                to={item.path}
                end={item.end || false}
                className={({ isActive }) =>
                  isActive ? 'sidebar-nav-link active' : 'sidebar-nav-link'
                }
                onClick={handleNavLinkClick}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="language-switcher-container-mobile">
          <LanguageSwitcher />
        </div>
      </nav>
    </>
  );
};

export default Header;
