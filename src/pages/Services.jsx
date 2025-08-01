import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import '../styles/Services.css';
import worldMapTech from '../assets/images/world-map-tech.webp';
import itInfrastructureImage from '../assets/images/it-infrastructure.webp';
import deviceManagementImage from '../assets/images/device-management.webp';
import cloudHostingImage from '../assets/images/cloud-hosting.webp';
import itSupportImage from '../assets/images/it-support.webp';
import dataCenterImage from '../assets/images/data-center.webp';
import securitySystemsImage from '../assets/images/security-systems.webp';
import smartLearningImage from '../assets/images/smart-learning.webp';
import managedServicesTeamImage from '../assets/images/managed-services-team.webp';
import Partners from './Partners';

const Services = () => {
  const { t, isRTL } = useLanguage();
  return (
    <div className='services-page'>
      <section className='services-header'>
        <div className='services-title-container'>
          <h1 className='services-title'>{t('services.hero.title')}</h1>
          <p className='services-subtitle'>{t('services.hero.subtitle')}</p>
        </div>
      </section>

      <section className='import-export-section'>
        <div className='import-export-container'>
          <div className='import-export-image'>
            <img src={worldMapTech} alt='Global Technology Map' />
          </div>
          <div className='import-export-content'>
            <h2 className='import-export-title'>
              {t('services.importExport.title')}
            </h2>
            <div className='import-export-divider'></div>

            <p className='import-export-description'>
              {t('services.importExport.description')}
            </p>
          </div>
        </div>
      </section>

      <section className='hardware-services-section'>
        <div className='hardware-services-container'>
          <div className='hardware-services-content'>
            <h2 className='hardware-services-title'>
              {t('services.itInfrastructure.title')}
            </h2>
            <div className='hardware-services-divider'></div>

            <p className='hardware-services-description'>
              {t('services.itInfrastructure.description')}
            </p>
          </div>
        </div>
      </section>

      <section className='it-infrastructure-section'>
        <div className='it-infrastructure-container'>
          <div className='it-infrastructure-content'>
            <h2 className='it-infrastructure-title'>
              {t('services.itInfrastructure.title')}
            </h2>
            <p className='it-infrastructure-description'>
              {t('services.itInfrastructure.description')}
            </p>
          </div>
          <div className='it-infrastructure-image'>
            <img src={itInfrastructureImage} alt='IT Infrastructure' />
          </div>
        </div>
      </section>

      <section className='device-management-section'>
        <div className='device-management-container'>
          <div className='device-management-image'>
            <img src={deviceManagementImage} alt='Device Management' />
          </div>
          <div className='device-management-content'>
            <h2 className='device-management-title'>
              {t('services.deviceManagement.title')}
            </h2>
            <p className='device-management-description'>
              {t('services.deviceManagement.description')}
            </p>
          </div>
        </div>
      </section>

      <section className='cloud-hosting-section'>
        <div className='cloud-hosting-container'>
          <div className='cloud-hosting-content'>
            <h2 className='cloud-hosting-title'>
              {t('services.cloudHosting.title')}
            </h2>
            <p className='cloud-hosting-description'>
              {t('services.cloudHosting.description')}
            </p>
          </div>
          <div className='cloud-hosting-image'>
            <img src={cloudHostingImage} alt='Cloud Hosting' />
          </div>
        </div>
      </section>

      <section className='it-support-section'>
        <div className='it-support-container'>
          <div className='it-support-image'>
            <img src={itSupportImage} alt='IT Support' />
          </div>
          <div className='it-support-content'>
            <h2 className='it-support-title'>
              {t('services.itSupport.title')}
            </h2>
            <p className='it-support-description'>
              {t('services.itSupport.description')}
            </p>
          </div>
        </div>
      </section>

      <section className='data-center-section'>
        <div className='data-center-container'>
          <div className='data-center-content'>
            <h2 className='data-center-title'>
              {t('services.dataCenter.title')}
            </h2>
            <p className='data-center-description'>
              {t('services.dataCenter.description')}
            </p>
          </div>
          <div className='data-center-image'>
            <img src={dataCenterImage} alt='Data Center' />
          </div>
        </div>
      </section>

      <section className='security-systems-section'>
        <div className='security-systems-container'>
          <div className='security-systems-image'>
            <img src={securitySystemsImage} alt='Security Systems' />
          </div>
          <div className='security-systems-content'>
            <h2 className='security-systems-title'>
              {t('services.securitySystems.title')}
            </h2>
            <p className='security-systems-description'>
              {t('services.securitySystems.description')}
            </p>
          </div>
        </div>
      </section>

      <section className='smart-learning-section'>
        <div className='smart-learning-container'>
          <div className='smart-learning-content'>
            <h2 className='smart-learning-title'>
              {t('services.smartLearning.title')}
            </h2>
            <p className='smart-learning-description'>
              {t('services.smartLearning.description')}
            </p>
          </div>
          <div className='smart-learning-image'>
            <img src={smartLearningImage} alt='Smart Learning Systems' />
          </div>
        </div>
      </section>

      <section className='managed-services-section'>
        <div className='managed-services-container'>
          <div className='managed-services-image'>
            <img src={managedServicesTeamImage} alt='Managed Services Team' />
          </div>
          <div className='managed-services-content'>
            <h2 className='managed-services-title'>
              {t('services.managedServices.title')}
            </h2>
            <div className='managed-services-divider'></div>
            <p className='managed-services-description'>
              {t('services.managedServices.description')}
            </p>
            <a href='/contact' className='get-in-touch-btn'>
              {t('services.cta')}
            </a>
          </div>
        </div>
      </section>

      <Partners />
    </div>
  );
};

export default Services;
