import React from 'react';
import ChallengesHero from './_components/challenges-hero';
import MainChallenge from './_components/main-challenge';

interface ChallengesPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ChallengesPage({ params }: ChallengesPageProps) {
  const { slug } = await params;
  return (
    <div>
      <ChallengesHero slug={slug} />
      <div className="flex w-full justify-center py-20 2xl:pt-[94px]">
        <div className="flex w-full flex-col px-8 lg:w-[90%] xl:w-3/4">
          <MainChallenge />
        </div>
      </div>
    </div>
  );
}
