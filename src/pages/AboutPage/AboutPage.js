import React from 'react';
import { useTranslation } from 'react-i18next';
import SEO from '../../components/SEO';
import './AboutPage.css';
import hakkimizdaImage from '@public/images/AboutPage/hakkimizda.webp';
import nedenbizImage from '@public/images/AboutPage/nedenbiz.webp';
import Logo from '../../components/Navbar/Logo';

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

  const aboutParagraphs = [
    t('about.content.paragraph1'),
    t('about.content.paragraph2'),
    t('about.content.paragraph3'),
    t('about.content.paragraph4'),
    t('about.content.paragraph5')
  ];

  const advantageBoxes = [
    t('about.whyUs.advantages'),
    t('about.whyUs.advantages2')
  ];

  const advantageTaglines = [
    t('about.whyUs.tagline1'),
    t('about.whyUs.tagline2')
  ];

  return (
    <div className="about-page">
      <SEO
        title={`${t('about.title')} | Sağlam Delme & Patlatma - Uzman Kadro ve Deneyim`}
        description={`${t('about.content.paragraph1')} 2025'ten beri madencilik, inşaat ve altyapı projelerinde güvenli delme ve patlatma hizmetleri. Uzman mühendis kadromuz, modern ekipmanlarımız ve uluslararası standartlarda çözümlerimizle projelerinizi güvenle hayata geçiriyoruz.`}
        keywords="hakkımızda, delme patlatma şirketi, sondaj uzmanı, patlatma mühendisi, güvenli hizmet, profesyonel ekip, uzman kadro, modern ekipman, uluslararası standartlar, mühendislik disiplini, saha pratiği, uzmanlık markası, güvenlik önceliği, çevre bilinci, kalite, deneyim, 2025, madencilik projeleri, inşaat projeleri, altyapı projeleri"
        image="/images/AboutPage/hakkimizda.webp"
        url="/about"
        type="about"
      />
      
      {/* Main Content - Hakkımızda */}
      <div className="about-container">
        {/* Left Side - Image */}
        <div className="about-left">
          <div className="about-image">
            <img src={hakkimizdaImage} alt={t('images.team')} className="about-img" />
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="about-right">
          <div className="about-content">
            <h1 className="about-title">{t('about.title')}</h1>
            <h2 className="about-subtitle">{t('about.subtitle')}</h2>
            
            <div className="about-text">
              {aboutParagraphs.map((paragraph, index) => (
                <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }}>
                </p>
              ))}
            </div>
            
            <div className="about-logo">
              <Logo />
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
              <img src={nedenbizImage} alt={t('images.whyUs')} className="neden-biz-img" />
            </div>
            <div className="advantages-boxes">
              {advantageBoxes.map((box, index) => (
                <div key={index} className="advantage-box">{box}</div>
              ))}
            </div>
            <div className="advantage-description">
              {advantageTaglines.map((tagline, index) => (
                <p key={index}>{tagline}</p>
              ))}
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
