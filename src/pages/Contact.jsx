import React, { useState } from 'react';
import styles from '../styles/Contact.module.css';
import { FaLinkedin, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';
import contactStyles from '../styles/Contact.module.css';

const Contact = () => {
  const { t, isRTL } = useLanguage();
  // Initial form data with example values as shown in the screenshot
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    message: '',
  });

  // Form field configuration for cleaner rendering
  const formFields = [
    { id: 'name', label: t('contact.form.name'), type: 'text', required: true },
    {
      id: 'email',
      label: t('contact.form.email'),
      type: 'email',
      required: true,
    },
    {
      id: 'number',
      label: t('contact.form.number'),
      type: 'tel',
      required: false,
    },
    {
      id: 'message',
      label: t('contact.form.message'),
      type: 'textarea',
      required: true,
    },
    {
      id: 'submit',
      label: t('contact.form.submit'),
      type: 'submit',
      required: true,
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert(t('contact.form.successMessage'));
  };

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

  // Render form field based on type
  const renderFormField = (field) => {
    const { id, label, type, required } = field;

    return (
      <div className={styles.formGroup} key={id}>
        {type !== 'submit' ? (
          <label htmlFor={id}>{label}</label>
        ) : (
          <label htmlFor={id}></label>
        )}
        {type === 'textarea' ? (
          <textarea
            id={id}
            name={id}
            value={formData[id]}
            onChange={handleChange}
            placeholder={t(`contact.form.${id}`)}
            required={required}
            className={styles.formInput}
          />
        ) : type === 'submit' ? (
          <button type='submit' className={styles.submitBtn}>
            {t('contact.form.button')}
          </button>
        ) : (
          <input
            type={type}
            id={id}
            name={id}
            value={formData[id]}
            onChange={handleChange}
            placeholder={t(`contact.form.${id}`)}
            required={required}
            className={styles.formInput}
          />
        )}
      </div>
    );
  };

  return (
    <section style={{ height: '83.6vh' }} className={contactStyles.contactForm}>
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
        <button type='submit' className={contactStyles.contactForm__submitBtn}>
          {t('home.contact.submit')}
        </button>
      </div>
    </section>
  );
};

export default Contact;
