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
  const { challengeInfo, memberId } = useUserStore();
  const router = useRouter();

  // challengeInfo가 있을 경우 페이지 이동 처리 - > challenges로 변경해야됨.
  useEffect(() => {
    if (challengeInfo) {
      const targetPath =
        activeTab === 'UX' ? '/challenges/UX?day=1' : '/challenges/UI?day=1';
      router.push(targetPath);
    }
  }, [challengeInfo, activeTab, router]);

  // UI 렌더링
  if (challengeInfo) {
    return null; // challengeInfo가 있으면 렌더링하지 않음
  }

  return (
    <>
      <CardCarousel images={images} />
      <HomeChallenge activeTab={activeTab} setActiveTab={setActiveTab} />
      <HomePreview activeTab={activeTab} />
    </>
  );
}
