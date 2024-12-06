import ChallengeCard from '@/_components/common/challenge-card';
import H3Title from '@/_components/common/home-title';
import React from 'react';

export default function CompletedChallenges() {
  return (
    <div className="py-20">
      <H3Title title="완료된 챌린지" />
      <ChallengeCard completed />
    </div>
  );
}
