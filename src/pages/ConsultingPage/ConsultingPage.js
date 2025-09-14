import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SEO from '../../components/SEO';
import './ConsultingPage.css';

function ConsultingPage() {
  const { t } = useTranslation();
  const services = [
    {
      id: 1,
      icon: "fas fa-file-alt",
      title: t('consulting.services.permit'),
      description: t('consulting.services.permitDesc')
    },
    {
      id: 2,
      icon: "fas fa-cogs",
      title: t('consulting.services.design'),
      description: t('consulting.services.designDesc')
    },
    {
      id: 3,
      icon: "fas fa-chart-line",
      title: t('consulting.services.optimization'),
      description: t('consulting.services.optimizationDesc')
    },
    {
      id: 4,
      icon: "fas fa-users",
      title: t('consulting.services.support'),
      description: t('consulting.services.supportDesc')
    }
  ];

  const processSteps = [
    {
      id: 1,
      number: "1",
      title: t('consulting.process.analysis'),
      description: t('consulting.process.analysisDesc')
    },
    {
      id: 2,
      number: "2",
      title: t('consulting.process.solution'),
      description: t('consulting.process.solutionDesc')
    },
    {
      id: 3,
      number: "3",
      title: t('consulting.process.implementation'),
      description: t('consulting.process.implementationDesc')
    },
    {
      id: 4,
      number: "4",
      title: t('consulting.process.evaluation'),
      description: t('consulting.process.evaluationDesc')
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": t('navbar.consulting'),
    "description": t('services.consulting.description'),
    "provider": {
      "@type": "Organization",
      "name": "Sağlam Delme & Patlatma"
    },
    "serviceType": "Consulting Services",
    "areaServed": "Türkiye",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Danışmanlık Hizmetleri",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": t('consulting.process.analysis'),
            "description": t('consulting.process.analysisDesc')
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": t('consulting.process.planning'),
            "description": t('consulting.process.planningDesc')
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": t('consulting.process.implementation'),
            "description": t('consulting.process.implementationDesc')
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": t('consulting.process.evaluation'),
            "description": t('consulting.process.evaluationDesc')
          }
        }
      ]
    }
  };

  return (
    <div className="consulting-page">
      <SEO
        title={`${t('navbar.consulting')} | Sağlam Delme & Patlatma`}
        description={t('services.consulting.description')}
        keywords="danışmanlık hizmetleri, teknik danışmanlık, proje danışmanlığı, delme patlatma danışmanlığı, mühendislik danışmanlığı, güvenlik danışmanlığı"
        image="/images/ConsultingPage/consulting3.webp"
        url="/consulting"
        type="service"
        structuredData={structuredData}
      />
      {/* Hero Section */}
      <section className="consulting-hero">
        <div className="container-custom">
          <div className="consulting-hero-content">
            <div className="consulting-hero-text">
              <h1 className="consulting-title">{t('consulting.title')}</h1>
              <p className="consulting-subtitle">
                {t('consulting.hero.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="consulting-services">
        <div className="container-custom">
          <div className="consulting-services-grid">
            {services.map((service) => (
              <div key={service.id} className="consulting-service-card">
                <div className="service-icon">
                  <i className={service.icon}></i>
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="consulting-process">
        <div className="container-custom">
          <h2 className="section-title">{t('consulting.process.title')}</h2>
          <div className="process-steps">
            {processSteps.map((step) => (
              <div key={step.id} className="process-step">
                <div className="step-number">{step.number}</div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="consulting-cta">
        <div className="container-custom">
          <div className="cta-content">
            <h2 className="cta-title">{t('consulting.cta.title')}</h2>
            <p className="cta-description">
              {t('consulting.cta.description')}
            </p>
            <Link to="/contact" className="btn-consulting">{t('consulting.cta.button')}</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ConsultingPage;
