import FAQPage from '@/views/FAQPage/FAQPage';
import { getFaqMetadata } from '@/lib/metadata';

export async function generateMetadata({ params }) {
  return getFaqMetadata(params.locale);
}

export default function Page() {
  return <FAQPage />;
}
