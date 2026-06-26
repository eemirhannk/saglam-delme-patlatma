import { getDictionary } from '@/i18n/dictionary';
import { locales } from '@/i18n/config';

const BASE_URL = 'https://saglam-tr.com';

function buildAlternates(locale, path) {
  const normalizedPath = path === '/' ? '' : path;
  const languages = Object.fromEntries(
    locales.map((l) => [l, `${BASE_URL}/${l}${normalizedPath}`])
  );

  return {
    canonical: `${BASE_URL}/${locale}${normalizedPath}`,
    languages,
  };
}

export function createPageMetadata({
  locale,
  title,
  description,
  keywords,
  image = '/images/Logo/logo.webp',
  path = '/',
}) {
  const fullImage = `${BASE_URL}${image}`;
  const normalizedPath = path === '/' ? '' : path;
  const fullUrl = `${BASE_URL}/${locale}${normalizedPath}`;
  const dictionary = getDictionary(locale);

  return {
    title,
    description,
    keywords,
    authors: [{ name: dictionary.seo.author }],
    robots: { index: true, follow: true },
    alternates: buildAlternates(locale, path),
    openGraph: {
      type: 'website',
      url: fullUrl,
      title,
      description,
      images: [{ url: fullImage }],
      siteName: dictionary.seo.siteName,
      locale: dictionary.seo.ogLocale,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [fullImage],
    },
  };
}

export function getHomeMetadata(locale) {
  const d = getDictionary(locale);
  return createPageMetadata({
    locale,
    title:
      locale === 'tr'
        ? `${d.homepage.hero.title} | Güvenli Sondaj ve Patlatma Hizmetleri`
        : d.seo.defaultTitle,
    description: d.seo.defaultDescription,
    keywords:
      locale === 'tr'
        ? 'Rıza Sağlam, Sağlam Delme, delme hizmetleri, patlatma hizmetleri, sondaj, MWD, danışmanlık'
        : 'Riza Saglam, drilling services, blasting services, MWD, consulting, quarry blasting',
    path: '/',
  });
}

export function getAboutMetadata(locale) {
  const d = getDictionary(locale);
  return createPageMetadata({
    locale,
    title:
      locale === 'tr'
        ? `${d.about.title} | Sağlam Delme & Patlatma - Uzman Kadro ve Deneyim`
        : `${d.about.title} | Sağlam Drilling & Blasting - Expert Team and Experience`,
    description:
      locale === 'tr'
        ? `${d.about.content.paragraph1} 2025'ten beri madencilik, inşaat ve altyapı projelerinde güvenli delme ve patlatma hizmetleri.`
        : `${d.about.content.paragraph1} Safe drilling and blasting services in mining, construction and infrastructure projects since 2025.`,
    keywords:
      locale === 'tr'
        ? 'hakkımızda, delme patlatma şirketi, sondaj uzmanı, patlatma mühendisi'
        : 'about us, drilling blasting company, drilling expert, blasting engineer',
    image: '/images/AboutPage/hakkimizda.webp',
    path: '/about',
  });
}

export function getContactMetadata(locale) {
  const d = getDictionary(locale);
  return createPageMetadata({
    locale,
    title:
      locale === 'tr'
        ? `${d.contact.title} | Sağlam Delme & Patlatma - Proje Teklifi ve İletişim`
        : `${d.contact.title} | Sağlam Drilling & Blasting - Project Quote and Contact`,
    description:
      locale === 'tr'
        ? 'Sağlam Delme & Patlatma ile iletişime geçin. Delme, patlatma ve danışmanlık hizmetleri için ücretsiz proje teklifi alın.'
        : 'Contact Sağlam Drilling & Blasting for a free project quote for drilling, blasting and consulting services.',
    keywords:
      locale === 'tr'
        ? 'iletişim, delme patlatma iletişim, proje teklifi'
        : 'contact, drilling blasting contact, project quote',
    path: '/contact',
  });
}

export function getConsultingMetadata(locale) {
  const d = getDictionary(locale);
  return createPageMetadata({
    locale,
    title:
      locale === 'tr'
        ? `${d.navbar.consulting} | Sağlam Delme & Patlatma - Teknik Danışmanlık`
        : `${d.navbar.consulting} | Sağlam Drilling & Blasting - Technical Consulting`,
    description: d.services.consulting.description,
    keywords:
      locale === 'tr'
        ? 'danışmanlık hizmetleri, teknik danışmanlık, proje danışmanlığı'
        : 'consulting services, technical consulting, project consulting',
    image: '/images/ConsultingPage/consulting3.webp',
    path: '/consulting',
  });
}

export function getDrillingMetadata(locale) {
  const d = getDictionary(locale);
  return createPageMetadata({
    locale,
    title:
      locale === 'tr'
        ? `${d.navbar.drilling} | Sağlam Delme & Patlatma - MWD Teknolojisi`
        : `${d.navbar.drilling} | Sağlam Drilling & Blasting - MWD Technology`,
    description: d.services.drilling.description,
    keywords:
      locale === 'tr'
        ? 'delme hizmetleri, MWD, sondaj, tünel delme'
        : 'drilling services, MWD, tunnel drilling, open field drilling',
    image: '/images/DrillingPage/3d-tunel-gorunumu.webp',
    path: '/drilling-services',
  });
}

export function getBlastingMetadata(locale) {
  const d = getDictionary(locale);
  return createPageMetadata({
    locale,
    title:
      locale === 'tr'
        ? `${d.navbar.blasting} | Sağlam Delme & Patlatma - Güvenli Patlatma`
        : `${d.navbar.blasting} | Sağlam Drilling & Blasting - Safe Blasting`,
    description: d.services.blasting.description,
    keywords:
      locale === 'tr'
        ? 'patlatma hizmetleri, taş ocağı patlatma, şehir içi patlatma'
        : 'blasting services, quarry blasting, urban blasting, underwater blasting',
    image: '/images/BlastingPage/quarry-blasting2.webp',
    path: '/blasting-services',
  });
}

export function getTeamMetadata(locale) {
  const d = getDictionary(locale);
  return createPageMetadata({
    locale,
    title:
      locale === 'tr'
        ? `${d.team.title} | Sağlam Delme & Patlatma - Uzman Mühendis Kadromuz`
        : `${d.team.title} | Sağlam Drilling & Blasting - Our Expert Engineering Team`,
    description: d.team.description,
    keywords:
      locale === 'tr'
        ? 'ekibimiz, uzman kadro, Rıza Sağlam, patlayıcı mühendisi'
        : 'our team, expert staff, Riza Saglam, blasting engineer',
    image: '/images/TeamPage/riza-saglam.webp',
    path: '/team',
  });
}

export function getFaqMetadata(locale) {
  const d = getDictionary(locale);
  return createPageMetadata({
    locale,
    title: d.faq.seo.title,
    description: d.faq.seo.description,
    keywords: d.faq.seo.keywords,
    path: '/faq',
  });
}

export function getNotFoundMetadata(locale) {
  const d = getDictionary(locale);
  return createPageMetadata({
    locale,
    title:
      locale === 'tr'
        ? '404 - Sayfa Bulunamadı | Sağlam Delme & Patlatma'
        : '404 - Page Not Found | Sağlam Drilling & Blasting',
    description:
      locale === 'tr'
        ? "Aradığınız sayfa bulunamadı. Ana sayfaya dönebilir veya iletişim sayfamızdan bize ulaşabilirsiniz."
        : 'The page you are looking for could not be found. Return to the homepage or contact us.',
    keywords:
      locale === 'tr'
        ? '404, sayfa bulunamadı, hata sayfası'
        : '404, page not found, error page',
    image: '/images/NotFoundPage/ALT YARI PATLATMA SONRASI GÖRÜNÜM.webp',
    path: '/404',
  });
}
