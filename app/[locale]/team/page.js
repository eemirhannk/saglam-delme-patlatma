import TeamPage from '@/views/TeamPage/TeamPage';
import { getTeamMetadata } from '@/lib/metadata';

export async function generateMetadata({ params }) {
  return getTeamMetadata(params.locale);
}

export default function Page() {
  return <TeamPage />;
}
