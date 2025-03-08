'use client';

import { useState } from 'react';
import ChallengeDescription from './challenge-description';
import HowToParticipate from './how-to-participate';
import ReviewSection from './review-section';
import SideInfo from './side-info';
import TabMenu from './tab-menu';
import WorkGallery from './work-gallery';
import ChallengeRequirements from './challenge-requirements';
import { useRouter, useSearchParams } from 'next/navigation';
import { useChallengeDetail } from '@/hooks/use-challenge-detail';
import { useUserStore } from '@/store/use-user-store';

interface ChallengeContentProps {
  slug: string;
}

export default function ChallengeContent({ slug }: ChallengeContentProps) {
  const [activeTab, setActiveTab] = useState('챌린지설명');
  const searchParams = useSearchParams();
  const { challengeInfo } = useUserStore();
  const active = searchParams.get('active') || 'ux';
  const router = useRouter();

  const {
    data: challengeDetailData,
    isLoading,
    isError,
  } = useChallengeDetail(slug, active);

  if (!challengeInfo) {
    router.push('/');
  }
  if (isLoading) return <div>Loading...</div>;
  if (isError || !challengeDetailData)
    return <div>Error loading challenge details</div>;
  console.log('challengeDetailData :', challengeDetailData);

  return (
    <section className="flex w-full justify-center">
      <article className="mb-20 flex-1 space-y-8 sm:first:space-y-[40px] md:space-y-14 md:first:space-y-[60px] lg:space-y-20 lg:first:space-y-20">
        {/* 탭 메뉴 */}
        <TabMenu activeTab={activeTab} setActiveTab={setActiveTab} />
        {/* 탭에 따라 콘텐츠 표시 */}
        {activeTab === '챌린지설명' && (
          <>
            <ChallengeDescription
              challengeIntro={challengeDetailData.challengeIntro}
              challengeMission={challengeDetailData.challengeMission}
            />
            {/* <ChallengeRequirements /> */}
            <HowToParticipate />
            <ReviewSection slug={slug} />
            <SideInfo slug={slug} location="content" />
          </>
        )}
        {activeTab === 'review' && <ReviewSection slug={slug} />}
        {activeTab === '작업물' && <WorkGallery slug={slug} />}
      </article>
      {activeTab === '챌린지설명' && <SideInfo slug={slug} location="side" />}
    </section>
  );
}
