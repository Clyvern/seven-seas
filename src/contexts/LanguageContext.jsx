import React, { createContext, useState, useEffect, useContext } from 'react';
import enTranslations from '../assets/locales/en';
import arTranslations from '../assets/locales/ar';

// Create the language context
const LanguageContext = createContext();

// Available languages
const languages = {
  en: {
    code: 'en',
    name: 'English',
    dir: 'ltr',
    translations: enTranslations
  },
  ar: {
    code: 'ar',
    name: 'العربية',
    dir: 'rtl',
    translations: arTranslations
  }
};

// Language provider component
export const LanguageProvider = ({ children }) => {
  // Get initial language from localStorage or default to English
  const [currentLanguage, setCurrentLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem('language');
    return savedLanguage && languages[savedLanguage] ? savedLanguage : 'en';
  });

  // Update document direction and language when language changes
  useEffect(() => {
    const lang = languages[currentLanguage];
    document.documentElement.dir = lang.dir;
    document.documentElement.lang = lang.code;
    localStorage.setItem('language', currentLanguage);
    
    // Add RTL class to body if Arabic
    if (lang.dir === 'rtl') {
      document.body.classList.add('rtl');
    } else {
      document.body.classList.remove('rtl');
    }
  }, [currentLanguage]);

  // Function to change the current language
  const changeLanguage = (langCode) => {
    if (languages[langCode]) {
      setCurrentLanguage(langCode);
    }
  };

  // Get translation function
  const t = (key) => {
    const keys = key.split('.');
    let translation = languages[currentLanguage].translations;
    
    for (const k of keys) {
      if (translation && translation[k]) {
        translation = translation[k];
      } else {
        // Fallback to English if translation is missing
        let fallback = languages.en.translations;
        for (const fk of keys) {
          if (fallback && fallback[fk]) {
            fallback = fallback[fk];
          } else {
            return key; // Return the key if no translation found
          }
        }
        return fallback;
      }
    }
    
    return translation;
  };

  // Context value
  const value = {
    currentLanguage,
    language: languages[currentLanguage],
    languages,
    t,
    changeLanguage,
    isRTL: languages[currentLanguage].dir === 'rtl'
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use the language context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export default LanguageContext;
