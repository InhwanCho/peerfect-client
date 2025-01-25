'use client';

import CardCarousel from '../_components/common/card-carousel';
import PeerfectChallenge from './_components/peerfect-challenge';
import ChallengePreview from './_components/challenge-preview';
import { useState } from 'react';
import HomeChallenge from './_components/home-challenge';
import HomePreview from './_components/home-preview';

const images = ['/assets/home/home-hero1.png', '/assets/home/home-hero2.png'];

export default function HomePage() {
  const [activeTab, setActiveTab] = useState('UX');

  return (
    <>
      <CardCarousel images={images} />
      <HomeChallenge activeTab={activeTab} setActiveTab={setActiveTab} />
      <HomePreview activeTab={activeTab} />
      {/* <PeerfectChallenge select={activeTab} setSelect={setActiveTab} /> */}
      <ChallengePreview select={activeTab} />
    </>
  );
}
