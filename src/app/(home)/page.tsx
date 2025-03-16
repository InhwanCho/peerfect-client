'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import CardCarousel from '../_components/common/card-carousel';
import HomeChallenge from './_components/home-challenge';
import HomePreview from './_components/home-preview';
import { useUserStore } from '@/store/use-user-store';

const images = ['/assets/home/home-hero1.png', '/assets/home/home-hero2.png'];

export default function HomePage() {
  const [activeTab, setActiveTab] = useState('UX');
  const { challengeInfo } = useUserStore();
  const router = useRouter();

  // challengeInfo가 있을 경우 페이지 이동 처리 - > challenges로 변경해야됨.
  useEffect(() => {
    if (challengeInfo?.challengeNo) {
      const targetPath = `/challenges/${challengeInfo.currentChallenge}?day=${challengeInfo.currentDay}`;

      router.push(targetPath);
    }
  }, [challengeInfo, router]);

  return (
    <>
      <CardCarousel images={images} />
      <HomeChallenge activeTab={activeTab} setActiveTab={setActiveTab} />
      <HomePreview activeTab={activeTab} />
    </>
  );
}
