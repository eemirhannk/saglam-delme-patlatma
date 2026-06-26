import HomePage from '@/views/HomePage/HomePage';
import { getHomeMetadata } from '@/lib/metadata';

export async function generateMetadata({ params }) {
  return getHomeMetadata(params.locale);
}

export default function Page() {
  return <HomePage />;
}
