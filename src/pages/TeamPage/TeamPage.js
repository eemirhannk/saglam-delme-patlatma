import React from 'react';
import { useTranslation } from 'react-i18next';
import teamMemberImage from '@public/images/riza-saglam.jpeg';
import './TeamPage.css';

function TeamPage() {
  const { t } = useTranslation();

  const memberDetails = [
    {
      id: 1,
      icon: "fas fa-graduation-cap",
      textKey: "team.member.education"
    },
    {
      id: 2,
      icon: "fas fa-university",
      textKey: "team.member.education2"
    },
    {
      id: 3,
      icon: "fas fa-tools",
      textKey: "team.member.expertise"
    }
  ];

  const ctaData = {
    title: "Uzman Ekibimizle Çalışmak İster misiniz?",
    description: "Projeleriniz için güvenilir ve profesyonel hizmet almak için hemen iletişime geçin.",
    buttonText: "İletişime Geçin",
    buttonLink: "/contact"
  };

  const sectionData = [
    {
      id: 'hero',
      className: 'team-hero',
      content: (
        <div className="team-hero-content">
          <h1 className="team-title">{t('team.title')}</h1>
          <p className="team-description">{t('team.description')}</p>
        </div>
      )
    },
    {
      id: 'member',
      className: 'team-member-section',
      content: (
        <div className="team-member-card">
          <div className="member-image">
            <div className="member-placeholder">
              <img src={teamMemberImage} alt={t('team.member.name')} />
            </div>
          </div>
          
          <div className="member-info">
            <h3 className="member-name">{t('team.member.name')}</h3>
            <p className="member-position">{t('team.member.position')}</p>
            
            <div className="member-details">
              {memberDetails.map((detail) => (
                <div key={detail.id} className="detail-item">
                  <i className={detail.icon}></i>
                  <span>{t(detail.textKey)}</span>
                </div>
              ))}
            </div>
            
            <p className="member-description">{t('team.member.description')}</p>
            
            <div className="member-career">
              <h4>{t('team.member.career.title')}</h4>
              <ul className="career-list">
                {t('team.member.career.items', { returnObjects: true }).map((item, index) => (
                  <li key={index} className="career-item">
                    <i className="fas fa-arrow-right"></i>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'cta',
      className: 'team-cta',
      content: (
        <div className="cta-content">
          <h3>{ctaData.title}</h3>
          <p>{ctaData.description}</p>
          <a href={ctaData.buttonLink} className="btn-cta">{ctaData.buttonText}</a>
        </div>
      )
    }
  ];

  const renderSection = (section) => (
    <div key={section.id} className={section.className}>
      <div className="container-custom">
        {section.content}
      </div>
    </div>
  );

  return (
    <div className="team-page">
      {sectionData.map(renderSection)}
    </div>
  );
}

export default TeamPage;
