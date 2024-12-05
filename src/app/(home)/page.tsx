'use client';

import CardCarousel from '../_components/common/card-carousel';
import Testpage from './_components/testpage';
import PeerfectChallenge from './_components/peerfect-challenge';
import ChallengePreview from './_components/challenge-preview';

const images = ['/assets/home/home-hero1.png', '/assets/home/home-hero2.png'];

export default function HomePage() {
  return (
    <>
      <CardCarousel images={images} />
      <PeerfectChallenge />
      <ChallengePreview />
      <p className="flex justify-center">
        아래는 작업 중인 멀티 셀렉입니다 참고해서 UI를 만들어주세요
      </p>
      <Testpage />
    </>
  );
}
