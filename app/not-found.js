import NotFoundPage from '@/views/NotFoundPage/NotFoundPage';
import { getNotFoundMetadata } from '@/lib/metadata';
import { defaultLocale } from '@/i18n/config';

export const metadata = getNotFoundMetadata(defaultLocale);

export default function NotFound() {
  return <NotFoundPage />;
}
