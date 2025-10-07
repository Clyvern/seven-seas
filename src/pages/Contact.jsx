import React, { useState } from 'react';
import contactStyles from '../styles/Contact.module.css';
import { FaLinkedinIn, FaFacebookF, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { useLanguage } from '../contexts/LanguageContext';

const Contact = () => {
  const { t  , isRTL} = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const socialLinks = [
    { platform: 'instagram', icon: <FaInstagram />, url: 'https://www.instagram.com/seven_sseas?igsh=eGpvN2hvbmZpZ2Nu' },
    { platform: 'facebook', icon: <FaFacebookF />, url: 'https://www.facebook.com/share/16mwRgv5BW/' },
    { platform: 'twitter', icon: <FaXTwitter />, url: 'https://x.com/seven_sseas?t=QqEsBCIvVjT1sTDaY93eXg&s=08' },
    { platform: 'linkedin', icon: <FaLinkedinIn />, url: 'https://www.linkedin.com/company/sevensseas/' },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

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
   <section 
           className={`${contactStyles.contactForm} ${isRTL ? contactStyles.rtl : ''}`}
           >
             <div
             className={`${contactStyles.contactForm__container} ${
               isRTL ? contactStyles.rtl : ''
             }`}
           >
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

        <div className={contactStyles.contactForm__socialSection} dir='ltr'>
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
  );
};

export default Contact;