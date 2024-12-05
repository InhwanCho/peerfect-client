'use client';
import { useSearchParams } from 'next/navigation';
import ProgressBar from './progress-bar';

interface ChallengesHeroProps {
  slug: string;
}

export default function ChallengesHero({ slug }: ChallengesHeroProps) {
  const searchParams = useSearchParams();
  const day = Number(searchParams.get('day'));

  return (
    <div className="h-[361px] bg-[#1E1E1E] text-white">
      <div className="flex w-full justify-center">
        <div className="flex w-full flex-col px-8 lg:w-[90%] xl:w-3/4">
          <nav className="flex pt-[70px]">
            <span className="text-h2">{slug} 챌린지</span>
            <span className="flex items-center justify-center px-6">&gt;</span>
            <span className="text-h2">DAY {day}</span>
          </nav>
          <p className="mt-4 text-2xl font-medium">
            오늘은 챌린지 {day}일차에요!
          </p>
          <div className="relative mt-20">
            {/* SVG 프로그래스바 */}
            <ProgressBar activeDay={day} />
          </div>
        </div>
      </div>
    </div>
  );
}
