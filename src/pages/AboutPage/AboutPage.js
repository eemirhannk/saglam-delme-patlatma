import React from 'react';
import { useTranslation } from 'react-i18next';
import './AboutPage.css';
import hakkimizdaImage from '@public/images/hakkimizda.jpeg';
import nedenbizImage from '@public/images/nedenbiz.jpeg';

function AboutPage() {
  const { t } = useTranslation();
  const advantages = [
    {
      id: 1,
      title: t('about.whyUs.expert'),
      description: t('about.whyUs.expertDesc')
    },
    {
      id: 2,
      title: t('about.whyUs.equipment'),
      description: t('about.whyUs.equipmentDesc')
    },
    {
      id: 3,
      title: t('about.whyUs.safety'),
      description: t('about.whyUs.safetyDesc')
    },
    {
      id: 4,
      title: t('about.whyUs.environment'),
      description: t('about.whyUs.environmentDesc')
    }
  ];

  return (
    <div className="about-page">
      {/* Main Content - Hakkımızda */}
      <div className="about-container">
        {/* Left Side - Image */}
        <div className="about-left">
          <div className="about-image">
            <img src={hakkimizdaImage} alt="Sağlam Delme & Patlatma ekibi - 2025'ten beri güvenli hizmet" className="about-img" />
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="about-right">
          <div className="about-content">
            <h1 className="about-title">{t('about.title')}</h1>
            <h2 className="about-subtitle">{t('about.subtitle')}</h2>
            
            <div className="about-text">
              <p>
                {t('about.content.paragraph1')}
              </p>
              
              <p>
                {t('about.content.paragraph2')}
              </p>
              
              <p>
                {t('about.content.paragraph3')}
              </p>
              
              <p>
                {t('about.content.paragraph4')}
              </p>
            </div>
            
            <div className="about-logo">
              <img src="/images/logo.jpeg" alt="Sağlam Delme & Patlatma logosu - Güvenli sondaj ve patlatma hizmetleri" className="about-logo-img" />
            </div>
          </div>
        </div>

        {/* Right Green Bar for Hakkımızda */}
        <div className="green-bar"></div>
      </div>

      {/* NEDEN BİZ Section */}
      <div className="neden-biz-section">
        <div className="neden-biz-container">
          {/* Left Side - Visual */}
          <div className="neden-biz-left">
            <div className="neden-biz-image">
              <img src={nedenbizImage} alt="Neden Sağlam Delme & Patlatma - Uzman kadro ve modern ekipmanlar" className="neden-biz-img" />
            </div>
            <div className="advantages-boxes">
              <div className="advantage-box">{t('about.whyUs.advantages')}</div>
              <div className="advantage-box">{t('about.whyUs.advantages2')}</div>
            </div>
            <div className="advantage-description">
              <p>{t('about.whyUs.tagline1')}</p>
              <p>{t('about.whyUs.tagline2')}</p>
            </div>
          </div>

          {/* Right Side - Advantages List */}
          <div className="neden-biz-right">
            <div className="advantages-list">
              {advantages.map((advantage) => (
                <div key={advantage.id} className="advantage-item">
                  <h3 className="advantage-title">{advantage.title}</h3>
                  <p className="advantage-text">{advantage.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Green Bar for NEDEN BİZ */}
          <div className="green-bar"></div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
