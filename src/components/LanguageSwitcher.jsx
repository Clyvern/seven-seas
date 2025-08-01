import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import '../styles/LanguageSwitcher.css';

const LanguageSwitcher = () => {
  const { currentLanguage, changeLanguage } = useLanguage();

  const toggleLanguage = () => {
    const newLang = currentLanguage === 'en' ? 'ar' : 'en';
    changeLanguage(newLang);
  };

  return (
    <div className="language-switcher">
      <button 
        className="language-toggle-btn" 
        onClick={toggleLanguage}
        aria-label={`Switch to ${currentLanguage === 'en' ? 'Arabic' : 'English'}`}
      >
        {currentLanguage === 'en' ? 'العربية' : 'English'}
      </button>
    </div>
  );
};

export default LanguageSwitcher;
