import { locales } from '@/i18n/config';

const BASE_URL = 'https://saglam-tr.com';

const routes = [
  { path: '', priority: 1.0, changeFrequency: 'weekly' },
  { path: '/about', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/drilling-services', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/blasting-services', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/consulting', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/contact', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/team', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/faq', priority: 0.8, changeFrequency: 'monthly' },
];

export default function sitemap() {
  const lastModified = new Date();

  return routes.flatMap((route) =>
    locales.map((locale) => ({
      url: `${BASE_URL}/${locale}${route.path}`,
      lastModified,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
      alternates: {
        languages: Object.fromEntries(
          locales.map((l) => [l, `${BASE_URL}/${l}${route.path}`])
        ),
      },
    }))
  );
}
