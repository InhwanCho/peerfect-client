import H3Title from '@/app/_components/common/h3-title';
import HomeCard from './home-card';

interface PeerfectChallengeProps {
  select: string;
  setSelect: (value: string) => void;
}

const temDay = 5;

export default function PeerfectChallenge({
  select,
  setSelect,
}: PeerfectChallengeProps) {
  return (
    <div className="flex w-full justify-center py-20 2xl:pt-[94px]">
      <div className="flex w-full flex-col px-8 lg:w-[90%] xl:w-3/4">
        {/* 섹션 제목 */}
        <H3Title title="피어펙트 챌린지" />

        {/* 카드 리스트 */}
        <div className="mb-10 grid grid-cols-1 gap-[44px] md:grid-cols-2">
          {/* UX 챌린지 카드 */}
          <HomeCard
            title="UX 챌린지"
            description="UX가 처음이신가요? 걱정말고 2주만 도전해보세요!"
            subDescription="UX 관한 기본적인 지식을 쌓아드릴게요!"
            // href={`/challenges/UX?day=${temDay}`}
            imgSrc="/assets/home/chart.png"
            className={`cursor-pointer ${
              select === 'UX' ? 'bg-main-purple-7' : 'bg-white'
            } hover:bg-[#EBDAFF]`}
            onClick={() => setSelect('UX')}
          />

          {/* UI 챌린지 카드 */}
          <HomeCard
            title="UI 챌린지"
            description="매일매일 2주간 다양한 인터페이스를 직접 디자인하고, 실력을 함께 키워가요!"
            // href={`/challenges/UI?day=${temDay}`}
            imgSrc="/assets/home/spheres.png"
            className={`cursor-pointer ${
              select === 'UI' ? 'bg-main-purple-7' : 'bg-white'
            } hover:bg-[#EBDAFF]`}
            onClick={() => setSelect('UI')}
          />
        </div>
      </div>
    </div>
  );
}
