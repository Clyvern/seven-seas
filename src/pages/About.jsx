import React from 'react';
import '../styles/About.css';
import { useLanguage } from '../contexts/LanguageContext';
import containerImage from '../assets/images/about-hero.webp'; // You'll need to add this image to your assets folder
import shipMapImage from '../assets/images/ship-map.webp'; // You'll need to add this image to your assets folder
import visionImage from '../assets/images/vision-tech.webp'; // You'll need to add this image to your assets folder

const About = () => {
  const { t, isRTL } = useLanguage();
  return (
    <div className='about-page'>
      <section className='about-hero'>
        <div className='about-container'>
          <div className='about-content'>
            <h1 className='about-title'>{t('about.hero.title')}</h1>
            <p className='about-description'>{t('about.hero.subtitle')}</p>
          </div>
          <div className='about-image'>
            <img src={containerImage} alt='Seven Seas Container' />
          </div>
        </div>
      </section>

      <section className='mission-section'>
        <div className='mission-container'>
          <div className='mission-content'>
            <h2 className='mission-title'>{t('about.mission.title')}</h2>
            <div className='mission-divider'></div>
            <p className='mission-description'>
              {t('about.mission.description')}
            </p>
          </div>
          <div className='mission-image'>
            <img src={shipMapImage} alt='Global Shipping Network' />
          </div>
        </div>
      </section>

      <section className='vision-section'>
        <div className='vision-container'>
          <div className='vision-content'>
            <h2 className='vision-title'>{t('about.vision.title')}</h2>
            <div className='vision-divider'></div>
            <p className='vision-description'>
              {t('about.vision.description')}
            </p>
          </div>
          <div className='vision-image'>
            <img src={visionImage} alt='Technology Innovation' />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
