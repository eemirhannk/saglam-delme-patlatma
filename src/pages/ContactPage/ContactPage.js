import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';
import SEO from '../../components/SEO';
import './ContactPage.css';

function ContactPage() {
  const { t } = useTranslation();
  const [companyType, setCompanyType] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null

  const handleCompanyTypeChange = (e) => {
    const value = e.target.value;
    setCompanyType(value);
  };

  const formFields = [
    {
      id: 'companyType',
      type: 'select',
      label: t('contact.form.companyType'),
      name: 'companyType',
      required: true,
      options: [
        { value: '', text: t('contact.form.selectOption') },
        { value: 'individual', text: t('contact.form.individual') },
        { value: 'company', text: t('contact.form.company') }
      ],
      onChange: handleCompanyTypeChange,
      value: companyType
    },
    {
      id: 'serviceType',
      type: 'select',
      label: t('contact.form.serviceType'),
      name: 'serviceType',
      required: true,
      options: [
        { value: '', text: t('contact.form.selectOption') },
        { value: 'drilling', text: t('contact.form.drilling') },
        { value: 'blasting', text: t('contact.form.blasting') },
        { value: 'consulting', text: t('contact.form.consulting') },
        { value: 'other', text: t('contact.form.other') }
      ]
    },
    {
      id: 'name',
      type: 'text',
      label: companyType === 'company' ? t('contact.form.companyName') : t('contact.form.name'),
      name: 'name',
      placeholder: companyType === 'company' ? t('contact.form.companyPlaceholder') : t('contact.form.namePlaceholder'),
      required: true
    },
    {
      id: 'email',
      type: 'email',
      label: t('contact.form.email'),
      name: 'email',
      placeholder: t('contact.form.emailPlaceholder'),
      required: true
    },
    {
      id: 'phone',
      type: 'tel',
      label: t('contact.form.phone'),
      name: 'phone',
      placeholder: t('contact.form.phonePlaceholder'),
      required: true
    },
    {
      id: 'subject',
      type: 'text',
      label: t('contact.form.subject'),
      name: 'subject',
      placeholder: t('contact.form.subjectPlaceholder'),
      required: true
    }
  ];

  const alertMessages = [
    {
      type: 'success',
      icon: 'fas fa-check-circle',
      text: t('contact.form.success')
    },
    {
      type: 'error',
      icon: 'fas fa-exclamation-circle',
      text: t('contact.form.error')
    }
  ];

  const formRows = [
    {
      id: 1,
      fields: ['companyType', 'serviceType']
    },
    {
      id: 2,
      fields: ['name', 'email']
    },
    {
      id: 3,
      fields: ['phone', 'subject']
    }
  ];

  const renderFormField = (fieldId) => {
    const field = formFields.find(f => f.id === fieldId);
    if (!field) return null;

    if (field.type === 'select') {
      return (
        <div className="form-group" key={field.id}>
          <label htmlFor={field.id} className="form-label">{field.label}</label>
          <select
            id={field.id}
            name={field.name}
            className="form-input"
            value={field.value || ''}
            onChange={field.onChange}
            required={field.required}
          >
            {field.options.map((option, index) => (
              <option key={index} value={option.value}>{option.text}</option>
            ))}
          </select>
        </div>
      );
    }

    return (
      <div className="form-group" key={field.id}>
        <label htmlFor={field.id} className="form-label">{field.label}</label>
        <input
          type={field.type}
          id={field.id}
          name={field.name}
          className="form-input"
          placeholder={field.placeholder}
          required={field.required}
        />
      </div>
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    const formData = new FormData(e.target);
    const data = {
      companyType: formData.get('companyType'),
      serviceType: formData.get('serviceType'),
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      subject: formData.get('subject'),
      message: formData.get('message')
    };

    try {
      // EmailJS ile e-posta gönder
      const result = await emailjs.send(
        'service_5v1epin', // EmailJS Service ID
        'template_oxnvwrt', // EmailJS Template ID
        {
          to_email: 'emirhank5466@gmail.com',
          to_name: 'Emirhan',
          from_name: data.name,
          from_email: data.email,
          phone: data.phone,
          company_type: data.companyType === 'individual' ? t('contact.form.individual') : t('contact.form.company'),
          service_type: data.serviceType,
          subject: data.subject,
          message: data.message
        },
        'BdQi-hU_cHJ4sSEFD' // EmailJS Public Key
      );

      if (result.status === 200) {
        setSubmitStatus('success');
        e.target.reset(); // Formu temizle
        setCompanyType(''); // State'i de temizle
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('E-posta gönderme hatası:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": t('contact.title'),
    "description": "Sağlam Delme & Patlatma ile iletişime geçin. Delme, patlatma ve danışmanlık hizmetleri için bizimle iletişime geçin.",
    "mainEntity": {
      "@type": "Organization",
      "name": "Sağlam Delme & Patlatma",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+90-XXX-XXX-XXXX",
        "contactType": "customer service",
        "availableLanguage": ["Turkish", "English"],
        "areaServed": "TR"
      },
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "TR",
        "addressLocality": "Türkiye"
      }
    }
  };

  return (
    <div className="contact-page">
      <SEO
        title={`${t('contact.title')} | Sağlam Delme & Patlatma`}
        description="Sağlam Delme & Patlatma ile iletişime geçin. Delme, patlatma ve danışmanlık hizmetleri için bizimle iletişime geçin."
        keywords="iletişim, delme patlatma iletişim, sondaj hizmetleri iletişim, patlatma danışmanlığı, teknik destek, proje danışmanlığı"
        image="/images/logo.jpeg"
        url="/contact"
        type="contact"
        structuredData={structuredData}
      />

      {/* Contact Form Section */}
      <div className="contact-form-section">
        <div className="container-custom">
          <div className="contact-form-container">
            <div className="contact-form-wrapper">
              <h2 className="form-title">{t('contact.title')}</h2>
              
              {/* Dinamik Alert Mesajları */}
              {submitStatus && (
                <div className={`alert alert-${submitStatus}`}>
                  <i className={alertMessages.find(msg => msg.type === submitStatus)?.icon}></i>
                  {alertMessages.find(msg => msg.type === submitStatus)?.text}
                </div>
              )}
              
              <form className="contact-form" onSubmit={handleSubmit}>
                        {/* Dinamik Form Rows */}
                        {formRows.map((row) => (
                          <div key={row.id} className="form-row">
                            {row.fields.map((fieldId) => renderFormField(fieldId))}
                          </div>
                        ))}

                        <div className="form-group">
                          <label htmlFor="message" className="form-label">{t('contact.form.message')}</label>
                          <textarea 
                            id="message" 
                            name="message" 
                            className="form-textarea" 
                            rows="5" 
                            placeholder={t('contact.form.messagePlaceholder')} 
                            required
                          ></textarea>
                        </div>

                        <div className="form-actions">
                          <button 
                            type="submit" 
                            className="btn-submit"
                            disabled={isSubmitting}
                          >
                            {isSubmitting ? (
                              <>
                                <i className="fas fa-spinner fa-spin"></i>
                                {t('contact.form.submitting')}
                              </>
                            ) : (
                              <>
                                <i className="fas fa-paper-plane"></i>
                                {t('contact.form.submit')}
                              </>
                            )}
                          </button>
                        </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
