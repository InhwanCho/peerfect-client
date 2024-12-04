import { Metadata } from 'next';
import WorkDetail from './_components/work-detail';

export const metadata: Metadata = {
  title: 'Peerfect - Work Detail',
};

interface WorkDetailPageProps {
  params: Promise<{ slug: string; id: string }>;
}

export default async function WorkDetailPage({ params }: WorkDetailPageProps) {
  const { id, slug } = await params;

  return <WorkDetail slug={slug} id={id} isModal={false} />;
}
