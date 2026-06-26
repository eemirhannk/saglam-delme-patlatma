import BlastingPage from '@/views/BlastingPage/BlastingPage';
import { getBlastingMetadata } from '@/lib/metadata';

export async function generateMetadata({ params }) {
  return getBlastingMetadata(params.locale);
}

export default function Page() {
  return <BlastingPage />;
}
