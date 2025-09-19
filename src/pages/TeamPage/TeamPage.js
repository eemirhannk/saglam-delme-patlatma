import React from 'react';
import { useTranslation } from 'react-i18next';
import SEO from '../../components/SEO';
import teamMemberImage from '@public/images/TeamPage/riza-saglam.webp';
import certificateImage from '@public/images/TeamPage/Riza_Saglam_Certificate.jpeg';
import certificatePdf from '@public/images/Riza_Saglam_Certificate2.pdf';
import './TeamPage.css';
import { Link } from 'react-router-dom';

function TeamPage() {
  const { t } = useTranslation();

  const certificates = [
    {
      id: 'professional',
      type: 'image',
      title: t('team.member.certificates.otherCertificate'),
      description: t('team.member.certificates.otherCertificateDesc'),
      src: certificateImage
    },
    {
      id: 'internal-auditor',
      type: 'pdf',
      title: t('team.member.certificates.internalAuditor'),
      description: t('team.member.certificates.internalAuditorDesc'),
      src: certificatePdf
    }
  ];


  const memberDetails = [
    {
      id: 1,
      icon: "fas fa-graduation-cap",
      textKey: "team.member.education"
    },
    {
      id: 2,
      icon: "fas fa-tools",
      textKey: "team.member.expertise"
    }
  ];

  const ctaData = {
    title: t('team.cta.title'),
    description: t('team.cta.description'),
    buttonText: t('team.cta.button'),
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
            
            <p className="member-description" dangerouslySetInnerHTML={{ __html: t('team.member.description') }}></p>
            
            <div className="member-career">
              <h4>{t('team.member.career.title')}</h4>
              <ul className="career-list">
                {t('team.member.career.items', { returnObjects: true }).map((item, index) => (
                  <li key={index} className="career-item">
                    <i className="fas fa-arrow-right"></i>
                    <span dangerouslySetInnerHTML={{ __html: item }}></span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="member-certificates">
              <h4>{t('team.member.certificates.title')}</h4>
              <ul className="certificates-list">
                {certificates.map((certificate) => (
                  <li key={certificate.id} className="certificate-item">
                    <a 
                      href={certificate.src}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="certificate-link"
                    >
                      <i className={certificate.type === 'image' ? 'fas fa-image' : 'fas fa-file-pdf'}></i>
                      <span className="certificate-text">{certificate.title}</span>
                      <i className="fas fa-external-link-alt certificate-link-icon"></i>
                    </a>
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
          <Link to={ctaData.buttonLink} className="btn-cta">{ctaData.buttonText}</Link>
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

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": t('team.title'),
    "description": t('team.description'),
    "mainEntity": {
      "@type": "Person",
      "name": t('team.member.name'),
      "jobTitle": t('team.member.position'),
      "description": t('team.member.description'),
      "worksFor": {
        "@type": "Organization",
        "name": "Sağlam Delme & Patlatma"
      },
      "alumniOf": [
        "Karadeniz Teknik Üniversitesi",
        "Okan Üniversitesi"
      ],
      "knowsAbout": [
        "Patlayıcı Mühendisliği",
        "Delme ve Patlatma"
      ]
    }
  };

  return (
    <div className="team-page">
      <SEO
        title={`${t('team.title')} | Sağlam Delme & Patlatma - Uzman Mühendis Kadromuz`}
        description={`${t('team.description')} Rıza Sağlam liderliğindeki uzman ekibimiz, 10+ yıllık deneyim, Patlayıcı Mühendisliği Yüksek Lisans eğitimi ve uluslararası proje deneyimi ile güvenli ve profesyonel hizmet sunuyor.`}
        keywords="ekibimiz, uzman kadro, patlayıcı mühendisi, Rıza Sağlam, delme patlatma uzmanı, güvenli hizmet, mühendis kadrosu, 10+ yıl deneyim, Patlayıcı Mühendisliği, Yüksek Lisans, Karadeniz Teknik Üniversitesi, Okan Üniversitesi, uluslararası proje deneyimi, Afrika, Avrupa, Güney Amerika, kariyer geçmişi, uzmanlık, güvenilir hizmet, profesyonel ekip"
        image="/images/TeamPage/riza-saglam.webp"
        url="/team"
        type="about"
        structuredData={structuredData}
      />
      
      {sectionData.map(renderSection)}
    </div>
  );
}

export default TeamPage;
