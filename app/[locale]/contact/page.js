import ContactPage from '@/views/ContactPage/ContactPage';
import { getContactMetadata } from '@/lib/metadata';

export async function generateMetadata({ params }) {
  return getContactMetadata(params.locale);
}

export default function Page() {
  return <ContactPage />;
}
