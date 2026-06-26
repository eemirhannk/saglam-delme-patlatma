import { notFound } from 'next/navigation';
import { locales, isValidLocale } from '@/i18n/config';
import LocaleSync from '@/components/LocaleSync';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function LocaleLayout({ children, params }) {
  if (!isValidLocale(params.locale)) {
    notFound();
  }

  return <LocaleSync locale={params.locale}>{children}</LocaleSync>;
}
