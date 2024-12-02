// /app/@modal/(.)challenge/[slug]/work/[id]/page.tsx

import InterceptedWorkDetailModal from '@/app/challenge/[slug]/work/[id]/_components/intercepted-work-detail-modal';

interface WorkDetailModalProps {
  params: Promise<{ slug: string; id: string }>;
}

export default async function WorkDetailModal({
  params,
}: WorkDetailModalProps) {
  // `params`를 Promise에서 언래핑
  const { slug, id } = await params;

  return <InterceptedWorkDetailModal slug={slug} id={id} />;
}
