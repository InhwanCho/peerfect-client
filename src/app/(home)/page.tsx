'use client';

import CardCarousel from '../_components/common/card-carousel';
import PeerfectChallenge from './_components/peerfect-challenge';
import ChallengePreview from './_components/challenge-preview';

const images = ['/assets/home/home-hero1.png', '/assets/home/home-hero2.png'];

export default function HomePage() {
  return (
    <>
      <CardCarousel images={images} />
      <PeerfectChallenge />
      <ChallengePreview />
    </>
  );
}
