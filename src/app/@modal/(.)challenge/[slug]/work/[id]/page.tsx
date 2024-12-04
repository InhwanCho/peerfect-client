import WorkDetail from '@/app/challenge/[slug]/work/[id]/_components/work-detail';

interface WorkDetailModalProps {
  params: Promise<{ slug: string; id: string }>;
}

export default async function WorkDetailModal({
  params,
}: WorkDetailModalProps) {
  // `params`를 Promise에서 언래핑
  const { slug, id } = await params;

  return <WorkDetail slug={slug} id={id} isModal={true} />;
}
