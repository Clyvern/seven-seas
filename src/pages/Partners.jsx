import React from 'react';
import styles from '../styles/Partners.module.css';
import partnerLogoPlaceholder from '../assets/images/drawing.svg'; // Placeholder image for partner logos
import { useLanguage } from '../contexts/LanguageContext';

const Partners = () => {
  const { t, isRTL } = useLanguage();
  // Configuration for partner logos
  const partnerLogos = Array(14).fill({
    image: partnerLogoPlaceholder,
    alt: t('partners.logo.alt'),
  });

  // Render a partner logo
  const renderPartnerLogo = (logo, index) => (
    <div className={styles.partnerLogo} key={`partner-logo-${index}`}>
      <img src={logo.image} alt={logo.alt} />
    </div>
  );

  return (
    <div className={styles.partnersPage}>
      <section className={styles.partnersHeader}>
        <div className={styles.partnersContainer}>
          <h1 className={styles.partnersTitle}>{t('partners.hero.title')}</h1>
        </div>
      </section>

      <section className={styles.partnersIntro}>
        <div className={styles.partnersContainer}>
          <p className={styles.partnersDescription}>
            {t('partners.intro.description')}
          </p>
        </div>
      </section>

      <section className={styles.partnersNetwork}>
        <div className={styles.partnersContainer}>
          <h2 className={styles.globalNetworkTitle}>
            {t('partners.network.title')}
          </h2>
        </div>
      </section>

      <section className={styles.partnersLogos}>
        <div className={styles.partnersContainer}>
          <div className={`${styles.partnersGrid} ${styles.firstRow}`}>
            {partnerLogos.slice(0, 7).map(renderPartnerLogo)}
          </div>
        </div>

        <div className={styles.partnersContainer}>
          <div className={`${styles.partnersGrid} ${styles.secondRow}`}>
            {partnerLogos.slice(7, 14).map(renderPartnerLogo)}
          </div>
        </div>
      </section>

      <section className={styles.partnersCta}>
        <div className={styles.getInTouchContainer}>
          <button className={styles.getInTouchBtn}>
            {t('common.getInTouch')}
          </button>
        </div>
      </section>
    </div>
  );
};

export default Partners;
