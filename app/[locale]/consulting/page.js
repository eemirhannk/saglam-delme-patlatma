import ConsultingPage from '@/views/ConsultingPage/ConsultingPage';
import { getConsultingMetadata } from '@/lib/metadata';

export async function generateMetadata({ params }) {
  return getConsultingMetadata(params.locale);
}

export default function Page() {
  return <ConsultingPage />;
}
