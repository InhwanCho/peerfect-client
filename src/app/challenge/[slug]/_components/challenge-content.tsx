'use client';

import { useState } from 'react';
import ChallengeDescription from './challenge-description';
import HowToParticipate from './how-to-participate';
import ReviewSection from './review-section';
import SideInfo from './side-info';
import TabMenu from './tab-menu';
import WorkPreview from './work-preview';
import WorkGallery from './work-gallery';
import ChallengeRequirements from './challenge-requirements';

interface ChallengeContentProps {
  slug: string;
}

export default function ChallengeContent({ slug }: ChallengeContentProps) {
  const [activeTab, setActiveTab] = useState('챌린지설명');

  return (
    <section className="flex w-full justify-center">
      <article className="mb-20 flex-1 space-y-8 md:space-y-14 lg:space-y-20">
        {/* 탭 메뉴 */}
        <TabMenu activeTab={activeTab} setActiveTab={setActiveTab} />
        {/* 탭에 따라 콘텐츠 표시 */}
        {activeTab === '챌린지설명' && (
          <>
            <ChallengeDescription />
            <ChallengeRequirements />
            <WorkPreview />
            <HowToParticipate />
            <ReviewSection />
          </>
        )}
        {activeTab === 'review' && <ReviewSection />}
        {activeTab === '작업물' && <WorkGallery slug={slug} />}
      </article>
      {activeTab === '챌린지설명' && <SideInfo slug={slug} />}
    </section>
  );
}
