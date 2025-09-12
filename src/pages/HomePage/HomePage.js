import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SEO from '../../components/SEO';
import drillingImage from '@public/images/delme-hizmetleri.jpeg';
import mwdImage from '@public/images/mwd-hizmetleri.jpg';
import tunnelDrillingImage from '@public/images/tunel-delme-hizmetleri.jpeg';
import openFieldDrillingImage from '@public/images/acik-saha-delme-hizmetleri.jpeg';
import quarryBlastingImage from '@public/images/quarry-blasting2.jpeg';
import blastingImage from '@public/images/tasocagi-patlatma.jpeg';
import urbanBlastingImage from '@public/images/urban-blasting.jpg';
import underwaterBlastingImage from '@public/images/sualti3.jpeg';
import consultingImage from '@public/images/consulting3.jpeg';
import './HomePage.css';

function HomePage() {
  const { t } = useTranslation();
  const [isServicesVisible, setIsServicesVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  const carouselSlideData = [
    {
      id: 1,
      isActive: true,
      slideKey: 'slide2',
      button: { type: "link", to: "/drilling-services" },
      backgroundImage: mwdImage,
      icon: "fas fa-chart-line"
    },
    {
      id: 2,
      isActive: false,
      slideKey: 'slide2_5',
      button: { type: "link", to: "/drilling-services" },
      backgroundImage: tunnelDrillingImage,
      icon: "fas fa-road"
    },
    {
      id: 3,
      isActive: false,
      slideKey: 'slide2_6',
      button: { type: "link", to: "/drilling-services" },
      backgroundImage: openFieldDrillingImage,
      icon: "fas fa-mountain"
    },
    {
      id: 4,
      isActive: false,
      slideKey: 'slide3',
      button: { type: "link", to: "/blasting-services#quarry-blasting" },
      backgroundImage: quarryBlastingImage,
      icon: "fas fa-mountain"
    },
    {
      id: 5,
      isActive: false,
      slideKey: 'slide4',
      button: { type: "link", to: "/blasting-services#urban-blasting" },
      backgroundImage: urbanBlastingImage,
      icon: "fas fa-city"
    },
    {
      id: 6,
      isActive: false,
      slideKey: 'slide5',
      button: { type: "link", to: "/blasting-services#underwater-blasting" },
      backgroundImage: underwaterBlastingImage,
      icon: "fas fa-water"
    }
  ];

  const carouselSlides = carouselSlideData.map(slide => ({
    ...slide,
    title: t(`homepage.carousel.${slide.slideKey}.title`),
    description: t(`homepage.carousel.${slide.slideKey}.description`),
    button: {
      ...slide.button,
      text: t(`homepage.carousel.${slide.slideKey}.button`)
    },
    imageTitle: t(`homepage.carousel.${slide.slideKey}.imageTitle`),
    imageDescription: t(`homepage.carousel.${slide.slideKey}.imageDescription`)
  }));

  const safetyFeatureData = [
    {
      id: 1,
      icon: "fas fa-shield-alt",
      featureKey: 'experience'
    },
    {
      id: 2,
      icon: "fas fa-cogs",
      featureKey: 'technology'
    },
    {
      id: 3,
      icon: "fas fa-user-shield",
      featureKey: 'safety'
    }
  ];

  const safetyFeatures = safetyFeatureData.map(feature => ({
    ...feature,
    title: t(`safetyFeatures.${feature.featureKey}.title`),
    description: t(`safetyFeatures.${feature.featureKey}.description`)
  }));

  const serviceData = [
    {
      id: 1,
      icon: "fas fa-chart-line",
      serviceKey: 'mwdServices',
      link: { type: "link", to: "/drilling-services#mwd-services" }
    },
    {
      id: 2,
      icon: "fas fa-road",
      serviceKey: 'tunnelDrilling',
      link: { type: "link", to: "/drilling-services" }
    },
    {
      id: 3,
      icon: "fas fa-mountain",
      serviceKey: 'openFieldDrilling',
      link: { type: "link", to: "/drilling-services" }
    },
    {
      id: 4,
      icon: "fas fa-mountain",
      serviceKey: 'quarryBlasting',
      link: { type: "link", to: "/blasting-services#quarry-blasting" }
    },
    {
      id: 5,
      icon: "fas fa-city",
      serviceKey: 'urbanBlasting',
      link: { type: "link", to: "/blasting-services#urban-blasting" }
    },
    {
      id: 6,
      icon: "fas fa-water",
      serviceKey: 'underwaterBlasting',
      link: { type: "link", to: "/blasting-services#underwater-blasting" }
    },
    {
      id: 7,
      icon: "fas fa-user-tie",
      serviceKey: 'consulting',
      link: { type: "link", to: "/consulting" }
    }
  ];

  const services = serviceData.map(service => ({
    ...service,
    title: service.serviceKey === 'projectManagement' 
      ? t(`homepage.services.${service.serviceKey}.title`)
      : t(`services.${service.serviceKey}.title`),
    description: service.serviceKey === 'projectManagement'
      ? t(`homepage.services.${service.serviceKey}.description`)
      : t(`services.${service.serviceKey}.description`),
    link: {
      ...service.link,
      text: t('common.details')
    }
  }));

  const sectionData = [
    {
      id: 'safety',
      className: 'py-5 bg-light-custom',
      titleKey: 'homepage.safety.title',
      descriptionKey: 'homepage.safety.description',
      items: safetyFeatures,
      renderItem: (feature) => (
        <div key={feature.id} className="feature-card-custom">
          <div className="feature-card-custom__icon">
            <i className={feature.icon}></i>
          </div>
          <h4 className="feature-card-custom__title">{feature.title}</h4>
          <p className="feature-card-custom__text">{feature.description}</p>
        </div>
      ),
      gridClass: 'grid grid--3'
    },
    {
      id: 'services',
      className: `py-5 services-lazy-loading ${isServicesVisible ? 'services-visible' : ''}`,
      titleKey: 'homepage.services.title',
      descriptionKey: 'homepage.services.description',
      items: services,
      renderItem: (service) => (
        <div key={service.id} className="card-custom service-card-custom">
          <div className="card-custom__body">
            <div className="service-card-custom__icon">
              <i className={service.icon}></i>
            </div>
            <h5 className="service-card-custom__title">{service.title}</h5>
            <p className="service-card-custom__text">{service.description}</p>
            {service.link.type === 'link' ? (
              <Link to={service.link.to} className="btn-custom btn-secondary-custom">{service.link.text}</Link>
            ) : (
              <button className="btn-custom btn-secondary-custom">{service.link.text}</button>
            )}
          </div>
        </div>
      ),
      gridClass: 'card-grid-custom'
    }
  ];

  const renderSection = (section) => (
    <section 
      key={section.id} 
      className={section.className}
      id={section.id === 'services' ? 'services-section' : undefined}
    >
      <div className="container-custom">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h2 className="text-3xl font-bold light-green">{t(section.titleKey)}</h2>
            <p className="text-lg">{t(section.descriptionKey)}</p>
          </div>
        </div>
        <div className={section.gridClass}>
          {section.items.map(section.renderItem)}
        </div>
      </div>
    </section>
  );

  useEffect(() => {
    const handleScroll = () => {
      if (hasAnimated) return; // Bir kere animasyon yapıldıysa dur
      
      const servicesSection = document.getElementById('services-section');
      if (servicesSection) {
        const rect = servicesSection.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isVisible) {
          setIsServicesVisible(true);
          setHasAnimated(true); // Animasyon yapıldı olarak işaretle
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // İlk yüklemede kontrol et

    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasAnimated]);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Sağlam Delme & Patlatma",
    "alternateName": "Sağlam Delme ve Patlatma",
    "url": "https://saglam-tr.com",
    "logo": "https://saglam-tr.com/images/logo.jpeg",
    "description": t('homepage.hero.description'),
    "foundingDate": "2025",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "TR",
      "addressLocality": "Türkiye"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+90-XXX-XXX-XXXX",
      "contactType": "customer service",
      "availableLanguage": ["Turkish", "English"]
    },
    "sameAs": [
      "https://saglam-tr.com"
    ],
    "serviceArea": {
      "@type": "Country",
      "name": "Türkiye"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": t('homepage.services.title'),
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": t('navbar.drilling'),
            "description": t('services.drilling.description')
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": t('navbar.blasting'),
            "description": t('services.blasting.description')
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": t('navbar.consulting'),
            "description": t('services.consulting.description')
          }
        }
      ]
    }
  };

  return (
    <>
      <SEO
        title={t('homepage.hero.title')}
        description={t('homepage.hero.description')}
        keywords="delme hizmetleri, patlatma hizmetleri, sondaj, taş ocağı patlatma, şehir içi patlatma, su altı patlatma, MWD, danışmanlık, güvenli patlatma, kontrollü patlatma"
        image="/images/logo.jpeg"
        url="/"
        structuredData={structuredData}
      />
      
      {/* Hero Slider Section */}
      <section className="hero-slider">
        <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            {carouselSlides.map((slide, index) => (
              <button 
                key={slide.id}
                type="button" 
                data-bs-target="#heroCarousel" 
                data-bs-slide-to={index} 
                className={slide.isActive ? "active" : ""} 
                aria-current={slide.isActive ? "true" : "false"} 
                aria-label={`Slide ${index + 1}`}
              ></button>
            ))}
          </div>
          
          <div className="carousel-inner">
            {carouselSlides.map((slide, index) => (
              <div key={slide.id} className={`carousel-item ${slide.isActive ? 'active' : ''}`}>
                <div className={`hero-slide`} style={{ backgroundImage: `url(${slide.backgroundImage})` }}>
                  <div className="container">
                    <div className="row align-items-center min-vh-75">
                      <div className="col-lg-6">
                        <h1 className="display-3 fw-bold mb-4 text-white">
                          {slide.title}
                        </h1>
                        <p className="lead mb-4 text-white">
                          {slide.description}
                        </p>
                        <div className="btn-group-custom">
                          {slide.button.type === 'link' ? (
                            <Link to={slide.button.to} className="btn-custom btn-outline-custom btn-custom--lg">
                              {slide.button.icon && <i className={slide.button.icon}></i>}
                              {slide.button.text}
                            </Link>
                          ) : (
                            <button className="btn-custom btn-outline-custom btn-custom--lg">
                              {slide.button.text}
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">{t('homepage.carousel.navigation.previous')}</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">{t('homepage.carousel.navigation.next')}</span>
          </button>
        </div>
      </section>

      {/* Dinamik Sections */}
      {sectionData.map(renderSection)}

      {/* CTA Section */}
      <section className="py-5 bg-primary-custom text-white">
        <div className="container-custom">
          <div className="flex flex--center flex--between">
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-3">{t('homepage.cta.title')}</h2>
              <p className="text-lg mb-0">
                {t('homepage.cta.description')}
              </p>
            </div>
            <div className="text-right">
              <Link to="/contact" className="btn-custom btn-light-custom btn-custom--lg btn-custom--icon">
                <i className="fas fa-envelope"></i>
{t('homepage.cta.button')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
