import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

function SEO({ 
  title, 
  description, 
  keywords, 
  image, 
  url, 
  type = 'website',
  structuredData 
}) {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
  
  const baseUrl = 'https://saglam-tr.com';
  const fullUrl = url ? `${baseUrl}${url}` : baseUrl;
  const fullImage = image ? `${baseUrl}${image}` : `${baseUrl}/images/logo.jpeg`;
  
  const defaultTitle = currentLanguage === 'tr' 
    ? 'Sağlam Delme & Patlatma | Güvenli Sondaj ve Patlatma Hizmetleri'
    : 'Sağlam Delme & Patlatma | Safe Drilling and Blasting Services';
    
  const defaultDescription = currentLanguage === 'tr'
    ? "2025'ten beri güvenli ve profesyonel delme, patlatma ve danışmanlık hizmetleri. Taş ocağı, şehir içi ve su altı patlatma projelerinde uzman ekibimizle hizmetinizdeyiz."
    : "Safe and professional drilling, blasting and consulting services since 2025. We serve you with our expert team in quarry, urban and underwater blasting projects.";

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title || defaultTitle}</title>
      <meta name="title" content={title || defaultTitle} />
      <meta name="description" content={description || defaultDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content="Sağlam Delme & Patlatma" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content={currentLanguage === 'tr' ? 'Turkish' : 'English'} />
      <meta name="revisit-after" content="7 days" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title || defaultTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:site_name" content="Sağlam Delme & Patlatma" />
      <meta property="og:locale" content={currentLanguage === 'tr' ? 'tr_TR' : 'en_US'} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullUrl} />
      <meta property="twitter:title" content={title || defaultTitle} />
      <meta property="twitter:description" content={description || defaultDescription} />
      <meta property="twitter:image" content={fullImage} />
      
      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#1B2645" />
      <meta name="msapplication-TileColor" content="#1B2645" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Sağlam Delme & Patlatma" />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
}

export default SEO;
