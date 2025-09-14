import React from 'react';
import { useTranslation } from 'react-i18next';
import SEO from '../../components/SEO';
import './BlastingPage.css';
import quarryImage from '@public/images/BlastingPage/quarry-blasting2.webp';
import urbanImage from '@public/images/BlastingPage/sehiricipatlatma.webp';
import urbanImage2 from '@public/images/BlastingPage/sehiricipatlatma2.webp';
import underwaterImage from '@public/images/BlastingPage/sualti3.webp';

function BlastingPage() {
  const { t } = useTranslation();
  const standards = [
    {
      id: 1,
      title: t('blasting.standards.usbm'),
      description: t('blasting.standards.usbmDesc')
    },
    {
      id: 2,
      title: t('blasting.standards.din'),
      description: t('blasting.standards.dinDesc')
    }
  ];

  const principles = [
    {
      id: 1,
      title: t('blasting.principles.vibration'),
      description: t('blasting.principles.vibrationDesc')
    },
    {
      id: 2,
      title: t('blasting.principles.loading'),
      description: t('blasting.principles.loadingDesc')
    },
    {
      id: 3,
      title: t('blasting.principles.timing'),
      description: t('blasting.principles.timingDesc')
    },
    {
      id: 4,
      title: t('blasting.principles.flyrock'),
      description: t('blasting.principles.flyrockDesc')
    }
  ];

  const benefits = [
    t('blasting.benefits.building'),
    t('blasting.benefits.noise'),
    t('blasting.benefits.safety'),
    t('blasting.benefits.reporting')
  ];

  const underwaterApplications = [
    {
      id: 1,
      title: t('blasting.underwaterApplications.port'),
      description: t('blasting.underwaterApplications.portDesc')
    },
    {
      id: 2,
      title: t('blasting.underwaterApplications.dam'),
      description: t('blasting.underwaterApplications.damDesc')
    },
    {
      id: 3,
      title: t('blasting.underwaterApplications.bridge'),
      description: t('blasting.underwaterApplications.bridgeDesc')
    },
    {
      id: 4,
      title: t('blasting.underwaterApplications.tunnel'),
      description: t('blasting.underwaterApplications.tunnelDesc')
    }
  ];

  const underwaterBenefits = [
    t('blasting.underwaterBenefits.environmental'),
    t('blasting.underwaterBenefits.marine'),
    t('blasting.underwaterBenefits.pressure'),
    t('blasting.underwaterBenefits.monitoring'),
    t('blasting.underwaterBenefits.planning')
  ];

  const urbanImages = [
    {
      id: 1,
      src: urbanImage,
      alt: t('images.urban1')
    },
    {
      id: 2,
      src: urbanImage2,
      alt: t('images.urban2')
    }
  ];

  const quarryParagraphs = [
    t('blasting.quarry.description'),
    t('blasting.quarry.paragraph1'),
    t('blasting.quarry.paragraph2'),
    t('blasting.quarry.paragraph3')
  ];

  const underwaterParagraphs = [
    t('blasting.underwater.description'),
    t('blasting.underwater.paragraph1'),
    t('blasting.underwater.paragraph2')
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": t('navbar.blasting'),
    "description": t('services.blasting.description'),
    "provider": {
      "@type": "Organization",
      "name": "Sağlam Delme & Patlatma"
    },
    "serviceType": "Blasting Services",
    "areaServed": "Türkiye",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Patlatma Hizmetleri",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": t('blasting.quarry.title'),
            "description": t('blasting.quarry.description')
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": t('blasting.urban.title'),
            "description": t('blasting.urban.description')
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": t('blasting.underwater.title'),
            "description": t('blasting.underwater.description')
          }
        }
      ]
    }
  };

  return (
    <div className="blasting-page">
      <SEO
        title={`${t('navbar.blasting')} | Sağlam Delme & Patlatma`}
        description={t('services.blasting.description')}
        keywords="patlatma hizmetleri, taş ocağı patlatma, şehir içi patlatma, su altı patlatma, kontrollü patlatma, güvenli patlatma, USBM standartları, DIN standartları"
        image="/images/BlastingPage/quarry-blasting2.webp"
        url="/blasting-services"
        type="service"
        structuredData={structuredData}
      />
      
      <section id="quarry-blasting" className="quarry-image-container">
          <img src={quarryImage} alt={t('images.quarry')} className="quarry-image" />
          
          {/* Overlay Content */}
          <div className="image-overlay-content">
            <div className="overlay-text">
              <h2 className="blasting-title light-green">
                {t('blasting.quarry.title')}
              </h2>
              
              <div className="blasting-description">
                {quarryParagraphs.map((paragraph, index) => (
                  <p key={index}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

      {/* Urban Blasting Section */}
      <section id="urban-blasting" className="urban-blasting-section">
        <div className="container-custom">
          <div className="urban-blasting-content">
            <div className="urban-blasting-text">
              <h2 className="urban-blasting-title">
                {t('blasting.urban.title')}
              </h2>
              
              <div className="urban-blasting-intro">
                <p>
                  {t('blasting.urban.description')}
                </p>
              </div>

              <div className="standards-section">
                <h3 className="section-subtitle">{t('blasting.standards.title')}</h3>
                <div className="standards-list">
                  {standards.map((standard) => (
                    <div key={standard.id} className="standard-item">
                      <h4 className="standard-title">{standard.title}</h4>
                      <p className="standard-description">{standard.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="principles-section">
                <h3 className="section-subtitle">{t('blasting.principles.title')}</h3>
                <div className="principles-list">
                  {principles.map((principle) => (
                    <div key={principle.id} className="principle-item">
                      <h4 className="principle-title">{principle.title}</h4>
                      <p className="principle-description">{principle.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="urban-blasting-visual">
              {urbanImages.map((image) => (
                <div key={image.id} className="urban-image-container">
                  <img src={image.src} alt={image.alt} className="urban-image" />
                </div>
              ))}
              
              <div className="benefits-box">
                <h3 className="benefits-title">{t('blasting.benefits.title')}</h3>
                <ul className="benefits-list">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="benefit-item">{benefit}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Underwater Blasting Section */}
      <section id="underwater-blasting" className="underwater-blasting-section">
        <div className="underwater-image-container">
          <img src={underwaterImage} alt={t('images.underwater')} className="underwater-image" />
          
          {/* Overlay Content */}
          <div className="image-overlay-content">
            <div className="overlay-text">
              <h2 className="blasting-title light-green">
                {t('blasting.underwater.title')}
              </h2>
              
              <div className="blasting-description">
                {underwaterParagraphs.map((paragraph, index) => (
                  <p key={index}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="container-custom">
          <div className="underwater-content">
            <div className="underwater-applications">
              <h3 className="section-subtitle">{t('blasting.underwaterApplications.title')}</h3>
              <div className="applications-grid">
                {underwaterApplications.map((application) => (
                  <div key={application.id} className="application-card">
                    <h4 className="application-title">{application.title}</h4>
                    <p className="application-description">{application.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="underwater-benefits">
              <h3 className="section-subtitle">{t('blasting.underwaterBenefits.title')}</h3>
              <ul className="benefits-list">
                {underwaterBenefits.map((benefit, index) => (
                  <li key={index} className="benefit-item">{benefit}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BlastingPage;
