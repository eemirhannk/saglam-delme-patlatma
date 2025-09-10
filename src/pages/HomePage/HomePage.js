import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './HomePage.css';

function HomePage() {
  const { t } = useTranslation();
  const [isServicesVisible, setIsServicesVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  const carouselSlides = [
    {
      id: 1,
      isActive: true,
      title: t('homepage.hero.title'),
      description: t('homepage.hero.description'),
      button1: { text: t('homepage.hero.button1'), type: "button" },
      button2: { text: t('homepage.hero.button2'), type: "button" },
      icon: "fas fa-hammer",
      imageTitle: t('homepage.carousel.slide1.imageTitle'),
      imageDescription: t('homepage.carousel.slide1.imageDescription')
    },
    {
      id: 2,
      isActive: false,
      title: t('homepage.carousel.slide2.title'),
      description: t('homepage.carousel.slide2.description'),
      button1: { text: t('homepage.carousel.slide2.button1'), type: "link", to: "/drilling-services" },
      button2: { text: t('homepage.carousel.slide2.button2'), type: "button" },
      icon: "fas fa-mountain",
      imageTitle: t('homepage.carousel.slide2.imageTitle'),
      imageDescription: t('homepage.carousel.slide2.imageDescription')
    },
    {
      id: 3,
      isActive: false,
      title: t('homepage.carousel.slide3.title'),
      description: t('homepage.carousel.slide3.description'),
      button1: { text: t('homepage.carousel.slide3.button1'), type: "button" },
      button2: { text: t('homepage.carousel.slide3.button2'), type: "button" },
      icon: "fas fa-bomb",
      imageTitle: t('homepage.carousel.slide3.imageTitle'),
      imageDescription: t('homepage.carousel.slide3.imageDescription')
    },
    {
      id: 4,
      isActive: false,
      title: t('homepage.carousel.slide4.title'),
      description: t('homepage.carousel.slide4.description'),
      button1: { text: t('homepage.carousel.slide4.button1'), type: "link", to: "/consulting", icon: "fas fa-user-tie" },
      button2: { text: t('homepage.carousel.slide4.button2'), type: "button" },
      icon: "fas fa-user-tie",
      imageTitle: t('homepage.carousel.slide4.imageTitle'),
      imageDescription: t('homepage.carousel.slide4.imageDescription')
    }
  ];

  const safetyFeatures = [
    {
      id: 1,
      icon: "fas fa-shield-alt",
      title: t('safetyFeatures.experience.title'),
      description: t('safetyFeatures.experience.description')
    },
    {
      id: 2,
      icon: "fas fa-cogs",
      title: t('safetyFeatures.technology.title'),
      description: t('safetyFeatures.technology.description')
    },
    {
      id: 3,
      icon: "fas fa-user-shield",
      title: t('safetyFeatures.safety.title'),
      description: t('safetyFeatures.safety.description')
    }
  ];

  const services = [
    {
      id: 1,
      icon: "fas fa-mountain",
      title: t('services.drilling.title'),
      description: t('services.drilling.description'),
      link: { text: t('common.details'), type: "link", to: "/drilling-services" }
    },
    {
      id: 2,
      icon: "fas fa-bomb",
      title: t('services.blasting.title'),
      description: t('services.blasting.description'),
      link: { text: t('common.details'), type: "link", to: "/blasting-services" }
    },
    {
      id: 3,
      icon: "fas fa-cogs",
      title: t('homepage.services.projectManagement.title'),
      description: t('homepage.services.projectManagement.description'),
      link: { text: t('common.details'), type: "button" }
    },
    {
      id: 4,
      icon: "fas fa-user-tie",
      title: t('services.consulting.title'),
      description: t('services.consulting.description'),
      link: { text: t('common.details'), type: "link", to: "/consulting" }
    },
    {
      id: 5,
      icon: "fas fa-water",
      title: t('services.underwater.title'),
      description: t('services.underwater.description'),
      link: { text: t('common.details'), type: "link", to: "/blasting-services#underwater-blasting" }
    },
    {
      id: 6,
      icon: "fas fa-building",
      title: t('services.demolition.title'),
      description: t('services.demolition.description'),
      link: { text: t('common.details'), type: "button" }
    }
  ];

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

  return (
    <>
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
                <div className={`hero-slide`}>
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
                          {slide.button1.type === 'link' ? (
                            <Link to={slide.button1.to} className="btn-custom btn-light-custom btn-custom--lg btn-custom--icon">
                              {slide.button1.icon && <i className={slide.button1.icon}></i>}
                              {slide.button1.text}
                            </Link>
                          ) : (
                            <button className="btn-custom btn-light-custom btn-custom--lg">
                              {slide.button1.text}
                            </button>
                          )}
                          <button className="btn-custom btn-outline-custom btn-custom--lg">
                            {slide.button2.text}
                          </button>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="hero-image text-center">
                          <i className={`${slide.icon} fa-5x mb-3 text-white`}></i>
                          <h3 className="text-white">{slide.imageTitle}</h3>
                          <p className="text-white">{slide.imageDescription}</p>
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

      {/* Safety Section */}
      <section className="py-5 bg-light-custom">
        <div className="container-custom">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className="text-3xl font-bold orange-gold">{t('homepage.safety.title')}</h2>
              <p className="text-lg">{t('homepage.safety.description')}</p>
            </div>
          </div>
          <div className="grid grid--3">
            {safetyFeatures.map((feature) => (
              <div key={feature.id} className="feature-card-custom">
                <div className="feature-card-custom__icon">
                  <i className={feature.icon}></i>
                </div>
                <h4 className="feature-card-custom__title">{feature.title}</h4>
                <p className="feature-card-custom__text">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services-section" className={`py-5 services-lazy-loading ${isServicesVisible ? 'services-visible' : ''}`}>
        <div className="container-custom">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className="text-3xl font-bold orange-gold">{t('homepage.services.title')}</h2>
              <p className="text-lg">{t('homepage.services.description')}</p>
            </div>
          </div>
          <div className="card-grid-custom">
            {services.map((service) => (
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
            ))}
          </div>
        </div>
      </section>

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
