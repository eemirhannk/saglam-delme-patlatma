import DrillingPage from '@/views/DrillingPage/DrillingPage';
import { getDrillingMetadata } from '@/lib/metadata';

export async function generateMetadata({ params }) {
  return getDrillingMetadata(params.locale);
}

export default function Page() {
  return <DrillingPage />;
}
