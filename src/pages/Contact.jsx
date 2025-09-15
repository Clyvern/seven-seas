import React, { useState } from 'react';
import styles from '../styles/Contact.module.css';
import { FaLinkedinIn, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
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
      { platform: 'instragram', icon: <FaInstagram />, url: 'https://www.instagram.com/seven_sseas?igsh=eGpvN2hvbmZpZ2Nu' },
      { platform: 'facebook', icon: <FaFacebookF />, url: 'https://www.facebook.com/share/16mwRgv5BW/' },
      { platform: 'twitter', icon: <FaXTwitter />, url: 'https://x.com/seven_sseas?t=QqEsBCIvVjT1sTDaY93eXg&s=08' },
      { platform: 'linkedin', icon: <FaLinkedinIn />, url: '' },
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
            <input type='text' id='name' name='name' required />
          </div>

          {/* Input 2: Email */}
          <div className={contactStyles.contactForm__formGroup}>
            <label htmlFor='email'>{t('home.contact.email')}</label>
            <input type='email' id='email' name='email' required />
          </div>

          {/* Input 3: Number */}
          <div className={contactStyles.contactForm__formGroup}>
            <label htmlFor='number'>{t('home.contact.phone')}</label>
            <input type='tel' id='number' name='number' required/>
          </div>

          {/* Input 4: Message */}
          <div className={contactStyles.contactForm__formGroup}>
            <label htmlFor='message'>{t('home.contact.message')}</label>
            <input type='text' id='message' name='message' required />
          </div>

            <button type='submit' className={contactStyles.contactForm__submitBtn}>
          {t('home.contact.submit')}
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

        {/* The image doesn't show a button, but forms need one. I've styled it to fit the design. */}
      
      </div>
    </section>
  );
};

export default Contact;
