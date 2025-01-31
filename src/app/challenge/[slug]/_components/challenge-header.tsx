'use client';

import { useChallengeDetail } from '@/hooks/use-challenge-detail';
import { useSearchParams } from 'next/navigation';

export default function ChallengeHeader({ slug }: { slug: string }) {
  const searchParams = useSearchParams();
  const active = searchParams.get('active') || 'ux';

  const {
    data: challengeDetailData,
    isLoading,
    isError,
  } = useChallengeDetail(slug, active);
  if (isLoading) return <div>Loading...</div>;
  if (isError || !challengeDetailData)
    return <div>Error loading challenges</div>;

  const slugNumber = Number(slug);

  return (
    <header className="mb-10 rounded-3xl shadow-md md:mb-12 lg:mb-[78px]">
      <img
        src={`/assets/home/${active.toLowerCase()}-xl/${active.toLowerCase()}-xl-day${slugNumber > 14 ? slugNumber - 14 : slugNumber}.png`}
        alt="ui challenge hero image"
        className="min-h-[130px] sm:min-h-[178px]"
      />
      <div className="px-8 py-5 md:px-14">
        <h2 className="text-lg font-semibold text-main-primary">
          #챌린지 {slugNumber > 14 ? slugNumber - 14 : slugNumber}
        </h2>
        <h1 className="mt-1 text-2xl font-semibold text-text-primary">
          {challengeDetailData.challengeGroup}
        </h1>
        <ul className="mt-2 list-disc text-body text-gray-600">
          {challengeDetailData?.challengeShortIntro || '짧은 소개글란 입니다.'}
        </ul>
      </div>
    </header>
  );
}
