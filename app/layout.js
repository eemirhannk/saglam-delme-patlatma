import { headers } from 'next/headers';
import Script from 'next/script';
import Providers from './providers';
import Layout from '@/components/Layout';
import { defaultLocale } from '@/i18n/config';
import '@/styles/main.css';
import '@/App.css';

export const viewport = {
  themeColor: '#1B2645',
};

export default function RootLayout({ children }) {
  const locale = headers().get('x-locale') || defaultLocale;

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" />
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body>
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
