import React from 'react';
import styles from '../styles/Home.module.css';
import { FaLinkedin, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import contactStyles from '../styles/Contact.module.css';
import { useLanguage } from '../contexts/LanguageContext';

import securityCamera from '/src/assets/images/security-camera.webp';
import mapImage from '/src/assets/images/MAP.png';
import importExport from '/src/assets/images/import-export.webp';
import managedServices from '/src/assets/images/managed-services.webp';
import hardwareInfrastructure from '/src/assets/images/hardware-infrastructure.webp';
import partnersHandshake from '/src/assets/images/partners-handshake.webp';
import featureHandshake from '/src/assets/images/feature-handshake.webp';
import featureLightbulb from '/src/assets/images/feature-lightbulb.webp';
import featureRobot from '/src/assets/images/feature-robot.webp';
import featureShipping from '/src/assets/images/feature-shipping.webp';
import featureGrowth from '/src/assets/images/feature-growth.webp';

const Home = () => {
  const { t, isRTL } = useLanguage();

  // Social media links configuration
  const socialLinks = [
    { platform: 'linkedin', icon: <FaLinkedin />, url: 'https://linkedin.com' },
    { platform: 'facebook', icon: <FaFacebook />, url: 'https://facebook.com' },
    { platform: 'twitter', icon: <FaTwitter />, url: 'https://twitter.com' },
    {
      platform: 'instagram',
      icon: <FaInstagram />,
      url: 'https://instagram.com',
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Your form submission logic here
    alert('Form submitted!');
  };

  return (
    <div className={styles.homePage}>
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>{t('home.hero.title')}</h1>
            <p className={styles.heroSubtitle}>{t('home.hero.subtitle')}</p>
          </div>
          <div className={styles.heroImageContainer}>
            <img
              src={mapImage}
              alt='Map of the World'
              className={styles.heroImage}
            />
          </div>
        </div>
      </section>

      <section className={styles.servicesSection}>
        <h2 className={styles.sectionTitle}>{t('home.services.title')}</h2>
        <div className={styles.container}>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceCard}>
              <div className={styles.serviceImage}>
                <img src={importExport} alt='Import and Export Services' />
              </div>
              <div className={styles.serviceContent}>
                <h3>{t('home.services.itInfrastructure.title')}</h3>
                <div className={styles.serviceDivider}></div>
                <p>{t('home.services.itInfrastructure.description')}</p>
                <a href='/services' className={styles.knowMoreBtn}>
                  {t('common.knowMore')}
                </a>
              </div>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.serviceImage}>
                <img src={managedServices} alt='Managed Services' />
              </div>
              <div className={styles.serviceContent}>
                <h3>{t('home.services.managedServices.title')}</h3>
                <div className={styles.serviceDivider}></div>
                <p>{t('home.services.managedServices.description')}</p>
                <a href='/services' className={styles.knowMoreBtn}>
                  {t('common.knowMore')}
                </a>
              </div>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.serviceImage}>
                <img
                  src={hardwareInfrastructure}
                  alt='Hardware and Infrastructure Services'
                />
              </div>
              <div className={styles.serviceContent}>
                <h3>{t('home.services.hardwareServices.title')}</h3>
                <div className={styles.serviceDivider}></div>
                <p>{t('home.services.hardwareServices.description')}</p>
                <a href='/services' className={styles.knowMoreBtn}>
                  {t('common.knowMore')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.whyChooseSection}>
        <h2 className={styles.sectionTitle}>{t('home.features.title')}</h2>

        <div className={styles.container}>
          <div className={styles.featuresGrid}>
            <div className={styles.featureRow}>
              <div className={styles.featureCard}>
                <div className={styles.featureImage}>
                  <img src={featureHandshake} alt='Partnership' />
                </div>
                <div className={styles.featureContent}>
                  <h3>{t('home.features.expertise.title')}</h3>
                  <p>{t('home.features.expertise.description')}</p>
                </div>
                <div className={styles.featureNumber}>1</div>
              </div>

              <div className={styles.featureCard}>
                <div className={styles.featureImage}>
                  <img src={featureLightbulb} alt='Innovation' />
                </div>
                <div className={styles.featureContent}>
                  <h3>{t('home.features.innovation.title')}</h3>
                  <p>{t('home.features.innovation.description')}</p>
                </div>
                <div className={styles.featureNumber}>2</div>
              </div>

              <div className={styles.featureCard}>
                <div className={styles.featureImage}>
                  <img src={featureRobot} alt='Automation' />
                </div>
                <div className={styles.featureContent}>
                  <h3>{t('home.features.reliability.title')}</h3>
                  <p>{t('home.features.reliability.description')}</p>
                </div>
                <div className={styles.featureNumber}>3</div>
              </div>
            </div>

            <div className={`${styles.featureRow} ${styles.featureRowBottom}`}>
              <div className={styles.featureCard}>
                <div className={styles.featureImage}>
                  <img src={featureShipping} alt='Global Shipping' />
                </div>
                <div className={styles.featureContent}>
                  <h3>{t('home.features.customization.title')}</h3>
                  <p>{t('home.features.customization.description')}</p>
                </div>
                <div className={styles.featureNumber}>4</div>
              </div>

              <div className={styles.featureCard}>
                <div className={styles.featureImage}>
                  <img src={featureGrowth} alt='Business Growth' />
                </div>
                <div className={styles.featureContent}>
                  <h3>{t('home.features.growth.title')}</h3>
                  <p>{t('home.features.growth.description')}</p>
                </div>
                <div className={styles.featureNumber}>5</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.partnersSection}>
        <div className={styles.partnersContainer}>
          <div className={styles.partnersContent}>
            <h2 className={styles.partnersTitle}>{t('home.partners.title')}</h2>
            <p className={styles.partnersDescription}>
              {t('home.partners.description')}
            </p>
            <a href='/' className={styles.knowMoreBtn}>
              {t('common.knowMore')}
            </a>
          </div>
          <div className={styles.partnersImage}>
            <img src={partnersHandshake} alt='Business Partnership' />
          </div>
        </div>
      </section>

      <section className={contactStyles.contactForm}>
        <div className={contactStyles.contactForm__container}>
          <h2 className={contactStyles.contactForm__title}>
            {t('home.contact.title')}
          </h2>
          <hr className={contactStyles.contactForm__rule} />
          <p className={contactStyles.contactForm__subtitle}>
            {t('home.contact.subtitle')}
          </p>

          <form
            className={contactStyles.contactForm__form}
            onSubmit={handleSubmit}
          >
            {/* Input 1: Name */}
            <div className={contactStyles.contactForm__formGroup}>
              <label htmlFor='name'>{t('home.contact.name')}</label>
              <input type='text' id='name' name='name' defaultValue='' />
            </div>

            {/* Input 2: Email */}
            <div className={contactStyles.contactForm__formGroup}>
              <label htmlFor='email'>{t('home.contact.email')}</label>
              <input type='email' id='email' name='email' defaultValue='' />
            </div>

            {/* Input 3: Number */}
            <div className={contactStyles.contactForm__formGroup}>
              <label htmlFor='number'>{t('home.contact.phone')}</label>
              <input type='tel' id='number' name='number' defaultValue='' />
            </div>

            {/* Input 4: Message */}
            <div className={contactStyles.contactForm__formGroup}>
              <label htmlFor='message'>{t('home.contact.message')}</label>
              <input type='text' id='message' name='message' defaultValue='' />
            </div>
          </form>

          <div className={contactStyles.contactForm__socialSection}>
            <h3 className={contactStyles.contactForm__socialTitle}>
              {t('home.contact.social')}
            </h3>
            <div className={contactStyles.contactForm__socialIcons}>
              {socialLinks.map(({ platform, icon, url }) => (
                <a
                  key={platform}
                  href={url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className={contactStyles.contactForm__socialIcon}
                  aria-label={`Follow us on ${platform}`}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* The image doesn't show a button, but forms need one. I've styled it to fit the design. */}
          <button
            type='submit'
            className={contactStyles.contactForm__submitBtn}
          >
            {t('home.contact.submit')}
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
