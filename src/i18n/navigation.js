'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { defaultLocale } from '@/i18n/config';

export function useLocale() {
  const params = useParams();
  return params?.locale || defaultLocale;
}

export function localizeHref(locale, href) {
  if (!href || href.startsWith('http') || href.startsWith('mailto:')) {
    return href;
  }

  const [pathPart, hash] = href.split('#');
  const path = pathPart.startsWith('/') ? pathPart : `/${pathPart}`;
  const localizedPath = path === '/' ? `/${locale}` : `/${locale}${path}`;
  return hash ? `${localizedPath}#${hash}` : localizedPath;
}

export function stripLocaleFromPath(pathname) {
  return pathname.replace(/^\/(tr|en)(?=\/|$)/, '') || '/';
}

export default function LocaleLink({ href, ...props }) {
  const locale = useLocale();
  const localizedHref = localizeHref(locale, href);
  return <Link href={localizedHref} {...props} />;
}
