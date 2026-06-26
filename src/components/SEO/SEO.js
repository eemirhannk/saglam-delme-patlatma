import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

const BASE_URL = 'https://saglam-tr.com';

function SEO({
  title,
  description,
  keywords,
  image,
  url,
  type = 'website',
  structuredData,
}) {
  const { t } = useTranslation();

  const fullUrl = url ? `${BASE_URL}${url}` : BASE_URL;
  const fullImage = image ? `${BASE_URL}${image}` : `${BASE_URL}${t('seo.defaultImage')}`;
  const pageTitle = title || t('seo.defaultTitle');
  const pageDescription = description || t('seo.defaultDescription');

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="title" content={pageTitle} />
      <meta name="description" content={pageDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content={t('seo.author')} />
      <meta name="robots" content={t('seo.robots')} />
      <meta name="language" content={t('seo.language')} />
      <meta name="revisit-after" content={t('seo.revisitAfter')} />

      <link rel="canonical" href={fullUrl} />

      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:site_name" content={t('seo.siteName')} />
      <meta property="og:locale" content={t('seo.ogLocale')} />

      <meta property="twitter:card" content={t('seo.twitterCard')} />
      <meta property="twitter:url" content={fullUrl} />
      <meta property="twitter:title" content={pageTitle} />
      <meta property="twitter:description" content={pageDescription} />
      <meta property="twitter:image" content={fullImage} />

      <meta name="theme-color" content={t('seo.themeColor')} />
      <meta name="msapplication-TileColor" content={t('seo.tileColor')} />
      <meta name="apple-mobile-web-app-capable" content={t('seo.appleMobileWebAppCapable')} />
      <meta name="apple-mobile-web-app-status-bar-style" content={t('seo.appleMobileWebAppStatusBarStyle')} />
      <meta name="apple-mobile-web-app-title" content={t('seo.appleMobileWebAppTitle')} />

      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
}

export default SEO;
