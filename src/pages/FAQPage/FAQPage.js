import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import SEO from '../../components/SEO';
import './FAQPage.css';
import { Link } from 'react-router-dom';

function FAQPage() {
  const { t } = useTranslation();
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (id) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const faqCategories = [
    {
      id: 'general',
      title: t('faq.categories.general'),
      icon: 'fas fa-building',
      questions: [
        {
          id: 'services',
          question: t('faq.questions.services.question'),
          answer: t('faq.questions.services.answer')
        },
        {
          id: 'sectors',
          question: t('faq.questions.sectors.question'),
          answer: t('faq.questions.sectors.answer')
        },
        {
          id: 'founded',
          question: t('faq.questions.founded.question'),
          answer: t('faq.questions.founded.answer')
        }
      ]
    },
    {
      id: 'technical',
      title: t('faq.categories.technical'),
      icon: 'fas fa-cogs',
      questions: [
        {
          id: 'mwd',
          question: t('faq.questions.mwd.question'),
          answer: t('faq.questions.mwd.answer')
        },
        {
          id: 'underwater',
          question: t('faq.questions.underwater.question'),
          answer: t('faq.questions.underwater.answer')
        },
        {
          id: 'urban-safety',
          question: t('faq.questions.urbanSafety.question'),
          answer: t('faq.questions.urbanSafety.answer')
        }
      ]
    },
    {
      id: 'team',
      title: t('faq.categories.team'),
      icon: 'fas fa-users',
      questions: [
        {
          id: 'leader',
          question: t('faq.questions.leader.question'),
          answer: t('faq.questions.leader.answer')
        },
        {
          id: 'certifications',
          question: t('faq.questions.certifications.question'),
          answer: t('faq.questions.certifications.answer')
        }
      ]
    },
    {
      id: 'environment',
      title: t('faq.categories.environment'),
      icon: 'fas fa-leaf',
      questions: [
        {
          id: 'environmental-impact',
          question: t('faq.questions.environmentalImpact.question'),
          answer: t('faq.questions.environmentalImpact.answer')
        },
        {
          id: 'safety-standards',
          question: t('faq.questions.safetyStandards.question'),
          answer: t('faq.questions.safetyStandards.answer')
        }
      ]
    },
    {
      id: 'process',
      title: t('faq.categories.process'),
      icon: 'fas fa-project-diagram',
      questions: [
        {
          id: 'workflow',
          question: t('faq.questions.workflow.question'),
          answer: t('faq.questions.workflow.answer')
        },
        {
          id: 'regions',
          question: t('faq.questions.regions.question'),
          answer: t('faq.questions.regions.answer')
        },
        {
          id: 'quote',
          question: t('faq.questions.quote.question'),
          answer: t('faq.questions.quote.answer')
        }
      ]
    },
    {
      id: 'cost',
      title: t('faq.categories.cost'),
      icon: 'fas fa-dollar-sign',
      questions: [
        {
          id: 'pricing',
          question: t('faq.questions.pricing.question'),
          answer: t('faq.questions.pricing.answer')
        },
        {
          id: 'duration',
          question: t('faq.questions.duration.question'),
          answer: t('faq.questions.duration.answer')
        }
      ]
    },
    {
      id: 'emergency',
      title: t('faq.categories.emergency'),
      icon: 'fas fa-exclamation-triangle',
      questions: [
        {
          id: 'emergency-response',
          question: t('faq.questions.emergencyResponse.question'),
          answer: t('faq.questions.emergencyResponse.answer')
        }
      ]
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqCategories.flatMap(category => 
      category.questions.map(question => ({
        "@type": "Question",
        "name": question.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": question.answer
        }
      }))
    )
  };

  return (
    <>
      <SEO
        title={t('faq.seo.title')}
        description={t('faq.seo.description')}
        keywords={t('faq.seo.keywords')}
        image="/images/Logo/logo.webp"
        url="/faq"
        type="website"
        structuredData={structuredData}
      />
      
      <div className="faq-page">
        {/* Hero Section */}
        <section className="faq-hero">
          <div className="container-custom">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <h1 className="faq-title">{t('faq.hero.title')}</h1>
                <p className="faq-subtitle">{t('faq.hero.subtitle')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="faq-content">
          <div className="container-custom">
            <div className="row">
              <div className="col-12">
                {faqCategories.map((category) => (
                  <div key={category.id} className="faq-category">
                    <div className="category-header">
                      <i className={category.icon}></i>
                      <h2 className="category-title">{category.title}</h2>
                    </div>
                    
                    <div className="faq-items">
                      {category.questions.map((item) => (
                        <div key={item.id} className="faq-item">
                          <button
                            className={`faq-question ${openItems[item.id] ? 'active' : ''}`}
                            onClick={() => toggleItem(item.id)}
                            aria-expanded={openItems[item.id]}
                          >
                            <span className="question-text">{item.question}</span>
                            <i className={`fas fa-chevron-down ${openItems[item.id] ? 'rotated' : ''}`}></i>
                          </button>
                          
                          <div className={`faq-answer ${openItems[item.id] ? 'show' : ''}`}>
                            <div className="answer-content">
                              <p>{item.answer}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="faq-cta">
          <div className="container-custom">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <h2 className="cta-title">{t('faq.cta.title')}</h2>
                <p className="cta-description">{t('faq.cta.description')}</p>
                <Link to="/contact" className="btn btn-primary btn-lg">
                  {t('faq.cta.button')}
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default FAQPage;
