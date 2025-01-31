'use client';

import CardCarousel from '../_components/common/card-carousel';
import { useState } from 'react';
import HomeChallenge from './_components/home-challenge';
import HomePreview from './_components/home-preview';
import { useUserStore } from '@/store/use-user-store';

const images = ['/assets/home/home-hero1.png', '/assets/home/home-hero2.png'];

export default function HomePage() {
  const [activeTab, setActiveTab] = useState('UX');
  const { memberId } = useUserStore();
  console.log('memberId :', memberId);
  return (
    <>
      <CardCarousel images={images} />
      <HomeChallenge activeTab={activeTab} setActiveTab={setActiveTab} />
      <HomePreview activeTab={activeTab} />
      {/* <PeerfectChallenge select={activeTab} setSelect={setActiveTab} /> */}
      {/* <ChallengePreview select={activeTab} /> */}
    </>
  );
}
