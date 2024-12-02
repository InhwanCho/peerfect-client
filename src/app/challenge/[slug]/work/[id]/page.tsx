// /app/challenge/[slug]/work/[id]/page.tsx
import { Metadata } from 'next';
import NonInterceptedWorkDetail from './_components/non-intercepted-work-detail';

export const metadata: Metadata = {
  title: 'Peerfect - Work Detail',
};

interface WorkDetailPageProps {
  params: Promise<{ slug: string; id: string }>;
}

export default async function WorkDetailPage({ params }: WorkDetailPageProps) {
  const { id, slug } = await params;
  console.log(params);

  return <NonInterceptedWorkDetail slug={slug} id={id} />;
}
