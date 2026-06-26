import AboutPage from '@/views/AboutPage/AboutPage';
import { getAboutMetadata } from '@/lib/metadata';

export async function generateMetadata({ params }) {
  return getAboutMetadata(params.locale);
}

export default function Page() {
  return <AboutPage />;
}
