import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
  const [isServicesVisible, setIsServicesVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  const carouselSlides = [
    {
      id: 1,
      isActive: true,
      slideClass: "orange-gold",
      title: "Sağlam Delme & Patlatma",
      description: "1997'den beri güvenli ve profesyonel delme ve patlatma hizmetleri sunuyoruz. Her projede güvenlik önceliğimizdir.",
      button1: { text: "Projenizi Başlatın", type: "button" },
      button2: { text: "Hizmetlerimiz", type: "button" },
      icon: "fas fa-hammer",
      imageTitle: "Profesyonel Ekip",
      imageDescription: "Uzman kadromuzla güvenli çözümler"
    },
    {
      id: 2,
      isActive: false,
      slideClass: "bg-gradient-primary",
      title: "Delme Hizmetleri",
      description: "Hassas delme teknikleri ile her türlü malzeme ve zemin koşulunda çalışıyoruz. Modern ekipmanlarımızla en zorlu projeleri başarıyla tamamlıyoruz.",
      button1: { text: "Delme Hizmetleri", type: "button" },
      button2: { text: "Teknik Detaylar", type: "button" },
      icon: "fas fa-mountain",
      imageTitle: "Hassas Delme",
      imageDescription: "Her türlü zemin koşulunda çalışma"
    },
    {
      id: 3,
      isActive: false,
      slideClass: "bg-gradient-secondary",
      title: "Patlatma Hizmetleri",
      description: "Güvenli ve kontrollü patlatma teknikleri ile büyük ölçekli projeler gerçekleştiriyoruz. En sıkı güvenlik protokolleri ile çalışıyoruz.",
      button1: { text: "Patlatma Hizmetleri", type: "button" },
      button2: { text: "Güvenlik Protokolleri", type: "button" },
      icon: "fas fa-bomb",
      imageTitle: "Kontrollü Patlatma",
      imageDescription: "Güvenli ve profesyonel patlatma"
    },
    {
      id: 4,
      isActive: false,
      slideClass: "bg-gradient-tertiary",
      title: "Teknik Danışmanlık",
      description: "Uzman ekibimizle projeleriniz için kapsamlı teknik danışmanlık hizmetleri sunuyoruz. Her aşamada yanınızdayız.",
      button1: { text: "Danışmanlık", type: "link", to: "/danismanlik", icon: "fas fa-user-tie" },
      button2: { text: "Teknik Destek", type: "button" },
      icon: "fas fa-user-tie",
      imageTitle: "Uzman Danışmanlık",
      imageDescription: "Projelerinizde rehberlik"
    }
  ];

  const safetyFeatures = [
    {
      id: 1,
      icon: "fas fa-shield-alt",
      title: "Güvenlik Protokolleri",
      description: "Her proje için özel güvenlik planları geliştiriyoruz."
    },
    {
      id: 2,
      icon: "fas fa-certificate",
      title: "Uzman Ekip",
      description: "Yüksek eğitimli ve sertifikalı personelimiz."
    },
    {
      id: 3,
      icon: "fas fa-clock",
      title: "7/24 Hizmet",
      description: "Acil durumlar için her zaman hazırız."
    }
  ];

  const services = [
    {
      id: 1,
      icon: "fas fa-mountain",
      title: "Delme Hizmetleri",
      description: "Hassas delme teknikleri ile her türlü malzeme ve zemin koşulunda çalışıyoruz.",
      link: { text: "Detaylar", type: "button" }
    },
    {
      id: 2,
      icon: "fas fa-bomb",
      title: "Patlatma Hizmetleri",
      description: "Güvenli ve kontrollü patlatma teknikleri ile büyük ölçekli projeler gerçekleştiriyoruz.",
      link: { text: "Detaylar", type: "link", to: "/patlatma-hizmetleri" }
    },
    {
      id: 3,
      icon: "fas fa-cogs",
      title: "Proje Yönetimi",
      description: "Uzman ekibimizle projelerinizi planlama aşamasından teslim aşamasına kadar yönetiyoruz.",
      link: { text: "Detaylar", type: "button" }
    },
    {
      id: 4,
      icon: "fas fa-user-tie",
      title: "Danışmanlık",
      description: "Uzman ekibimizle projeleriniz için teknik danışmanlık ve rehberlik hizmetleri sunuyoruz.",
      link: { text: "Detaylar", type: "link", to: "/danismanlik" }
    },
    {
      id: 5,
      icon: "fas fa-water",
      title: "Su Altı İşleri",
      description: "Sertifikalı dalgıç ekibimizle su altı delme ve patlatma hizmetleri.",
      link: { text: "Detaylar", type: "button" }
    },
    {
      id: 6,
      icon: "fas fa-building",
      title: "Yıkım İşleri",
      description: "Binalar, köprüler ve beton yapılar için güvenli yıkım hizmetleri.",
      link: { text: "Detaylar", type: "button" }
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
                <div className={`hero-slide ${slide.slideClass}`}>
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
            <span className="visually-hidden">Önceki</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Sonraki</span>
          </button>
        </div>
      </section>

      {/* Safety Section */}
      <section className="py-5 bg-light-custom">
        <div className="container-custom">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className="text-3xl font-bold orange-gold">Güvenlik Önceliğimiz</h2>
              <p className="text-lg">Her kararımız, halkın, ortaklarımızın ve çalışanlarımızın güvenliği üzerine kuruludur.</p>
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
              <h2 className="text-3xl font-bold orange-gold">Hizmetlerimiz</h2>
              <p className="text-lg">Geniş hizmet yelpazemizle her türlü projeye çözüm sunuyoruz</p>
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
              <h2 className="text-2xl font-bold mb-3">Projenizi Başlatmaya Hazır mısınız?</h2>
              <p className="text-lg mb-0">
                Uzman ekibimizle güvenli ve profesyonel delme & patlatma hizmetleri için hemen iletişime geçin.
              </p>
            </div>
            <div className="text-right">
              <Link to="/iletisim" className="btn-custom btn-light-custom btn-custom--lg btn-custom--icon">
                <i className="fas fa-envelope"></i>
                Bize Ulaşın
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
