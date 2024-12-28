'use client';

import CardCarousel from '../_components/common/card-carousel';
import PeerfectChallenge from './_components/peerfect-challenge';
import ChallengePreview from './_components/challenge-preview';
import { useState } from 'react';

const images = ['/assets/home/home-hero1.png', '/assets/home/home-hero2.png'];

export default function HomePage() {
  const [select, setSelect] = useState('UX');
  return (
    <>
      <CardCarousel images={images} />
      <PeerfectChallenge select={select} setSelect={setSelect} />
      <ChallengePreview select={select}/>
    </>
  );
}
