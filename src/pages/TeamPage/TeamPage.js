import React from 'react';
import { useTranslation } from 'react-i18next';
import './TeamPage.css';

function TeamPage() {
  const { t } = useTranslation();

  return (
    <div className="team-page">
      {/* Hero Section */}
      <div className="team-hero">
        <div className="container-custom">
          <div className="team-hero-content">
            <h1 className="team-title">{t('team.title')}</h1>
            <h2 className="team-subtitle">{t('team.subtitle')}</h2>
            <p className="team-description">{t('team.description')}</p>
          </div>
        </div>
      </div>

      {/* Team Member Section */}
      <div className="team-member-section">
        <div className="container-custom">
          <div className="team-member-card">
            <div className="member-image">
              <div className="member-placeholder">
                <i className="fas fa-user"></i>
              </div>
            </div>
            
            <div className="member-info">
              <h3 className="member-name">{t('team.member.name')}</h3>
              <p className="member-position">{t('team.member.position')}</p>
              
              <div className="member-details">
                <div className="detail-item">
                  <i className="fas fa-calendar-alt"></i>
                  <span>{t('team.member.experience')}</span>
                </div>
                <div className="detail-item">
                  <i className="fas fa-graduation-cap"></i>
                  <span>{t('team.member.education')}</span>
                </div>
                <div className="detail-item">
                  <i className="fas fa-university"></i>
                  <span>{t('team.member.education2')}</span>
                </div>
                <div className="detail-item">
                  <i className="fas fa-tools"></i>
                  <span>{t('team.member.expertise')}</span>
                </div>
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
              
              <div className="member-company">
                <h4>{t('team.member.company.title')}</h4>
                <p className="company-description">{t('team.member.company.description')}</p>
              </div>
              
              <div className="member-achievements">
                <h4>Başarılar & Sertifikalar</h4>
                <div className="achievements-grid">
                  {t('team.member.achievements', { returnObjects: true }).map((achievement, index) => (
                    <div key={index} className="achievement-item">
                      <i className="fas fa-check-circle"></i>
                      <span>{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="team-cta">
        <div className="container-custom">
          <div className="cta-content">
            <h3>Uzman Ekibimizle Çalışmak İster misiniz?</h3>
            <p>Projeleriniz için güvenilir ve profesyonel hizmet almak için hemen iletişime geçin.</p>
            <a href="/contact" className="btn-cta">İletişime Geçin</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamPage;
