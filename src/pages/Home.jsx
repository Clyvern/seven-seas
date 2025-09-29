import {React , useState } from 'react';
import styles from '../styles/Home.module.css';
import { FaLinkedinIn, FaFacebookF, FaInstagram  } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import contactStyles from '../styles/Contact.module.css';
import { useLanguage } from '../contexts/LanguageContext';

import mapImage from '/src/assets/images/MAP.png';
import importExport from '/src/assets/images/import-export.jpg';
import managedServices from '/src/assets/images/managed-services.jpg';
import hardwareInfrastructure from '/src/assets/images/hardware-infrastructure.webp';
import partnersHandshake from '/src/assets/images/partners-handshake.webp';
import featureHandshake from '/src/assets/images/feature-handshake.webp';
import featureLightbulb from '/src/assets/images/feature-lightbulb.webp';
import featureRobot from '/src/assets/images/feature-robot.webp';
import featureShipping from '/src/assets/images/feature-shipping.webp';
import featureGrowth from '/src/assets/images/feature-growth.webp';

const Home = () => {
  const { t } = useLanguage();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const [formData, setFormData] = useState({
      name: '',
      email: '',
      number: '',
      message: '',
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

  // Social media links configuration
  const socialLinks = [
      { platform: 'instragram', icon: <FaInstagram />, url: 'https://www.instagram.com/seven_sseas?igsh=eGpvN2hvbmZpZ2Nu' },
      { platform: 'facebook', icon: <FaFacebookF />, url: 'https://www.facebook.com/share/16mwRgv5BW/' },
      { platform: 'twitter', icon: <FaXTwitter />, url: 'https://x.com/seven_sseas?t=QqEsBCIvVjT1sTDaY93eXg&s=08' },
      { platform: 'linkedin', icon: <FaLinkedinIn />, url: 'https://www.linkedin.com/company/sevensseas/' },
    ];
  

  const handleSubmit = async (e) => {
    e.preventDefault();
     setLoading(true);
    setError('');
    setSuccess('');

    try {
      const response = await fetch('https://nodejs-email-repo.vercel.app/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.success) {
        setSuccess(t('contact.form.successMessage'));
        setFormData({
          name: '',
          email: '',
          number: '',
          message: '',
        });
      } else {
        setError(result.message || t('contact.form.errorMessage'));
      }
    } catch (err) {
      console.error(err);
      setError(t('contact.form.errorMessage'));
    } finally {
      setLoading(false);
    }
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
          <div className={contactStyles.contactForm__formGroup}>
            <label htmlFor='name'>{t('home.contact.name')}</label>
            <input
              type='text'
              id='name'
              name='name'
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className={contactStyles.contactForm__formGroup}>
            <label htmlFor='email'>{t('home.contact.email')}</label>
            <input
              type='email'
              id='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className={contactStyles.contactForm__formGroup}>
            <label htmlFor='number'>{t('home.contact.phone')}</label>
            <input
              type='tel'
              id='number'
              name='number'
              value={formData.number}
              onChange={handleChange}
              required
            />
          </div>

          <div className={contactStyles.contactForm__formGroup}>
            <label htmlFor='message'>{t('home.contact.message')}</label>
            <input
              type='text'
              id='message'
              name='message'
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          {success && <div className={contactStyles.success}>{success}</div>}
          {error && <div className={contactStyles.error}>{error}</div>}
          <button type='submit' className={contactStyles.contactForm__submitBtn} disabled={loading}>
            {loading ? t('contact.form.sending') : t('home.contact.submit')}
          </button>
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

        </div>
      </section>
    </div>
  );
};

export default Home;
