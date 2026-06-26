import { NextResponse } from 'next/server';
import { defaultLocale, isValidLocale, locales } from './src/i18n/config';

function getLocaleFromPath(pathname) {
  const segment = pathname.split('/')[1];
  return isValidLocale(segment) ? segment : null;
}

export function middleware(request) {
  const { pathname } = request.nextUrl;
  const localeInPath = getLocaleFromPath(pathname);

  if (localeInPath) {
    const response = NextResponse.next();
    response.headers.set('x-locale', localeInPath);
    return response;
  }

  const locale = defaultLocale;
  const localizedPath =
    pathname === '/' ? `/${locale}` : `/${locale}${pathname}`;

  const url = request.nextUrl.clone();
  url.pathname = localizedPath;

  const response = NextResponse.redirect(url);
  response.headers.set('x-locale', locale);
  return response;
}

export const config = {
  matcher: ['/((?!_next|api|favicon|images|robots|sitemap|.*\\..*).*)'],
};
