'use client';

import '@/i18n/i18n';
import ErrorBoundary from '@/components/ErrorBoundary';
import ScrollToTop from '@/helpers/ScrollToTop';

export default function Providers({ children }) {
  return (
    <ErrorBoundary>
      <ScrollToTop />
      {children}
    </ErrorBoundary>
  );
}
