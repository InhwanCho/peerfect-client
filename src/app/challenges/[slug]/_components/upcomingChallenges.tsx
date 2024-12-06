import ChallengeCard from '@/_components/common/challenge-card';
import H3Title from '@/_components/common/home-title';
import React from 'react';

export default function UpcomoingChallenges() {
  return (
    <div className="my-20">
      <H3Title title="다가오는 챌린지" eyes={true} />
      {/* 카드 */}
      <ChallengeCard />
    </div>
  );
}