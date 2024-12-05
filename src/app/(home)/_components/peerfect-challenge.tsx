import HomeCard from './home-card';

const temDay = 5;

export default function PeerfectChallenge() {
  return (
    <div className="flex w-full justify-center py-20 2xl:pt-[94px]">
      <div className="flex w-full flex-col px-8 lg:w-[90%] xl:w-3/4">
        {/* 섹션 제목 */}
        <h3 className="mb-10 text-h3 font-bold text-black">피어펙트 챌린지</h3>

        {/* 카드 리스트 */}
        <div className="grid w-full grid-cols-1 gap-[44px] md:grid-cols-2">
          {/* UX 챌린지 카드 */}
          <HomeCard
            title="UX 챌린지"
            description="한줄소개한줄소개한줄소개한줄소개한줄소개한줄소개"
            href={`/challenges/UX?day=${temDay}`}
            imgSrc="/assets/home/chart.png"
          />

          {/* UI 챌린지 카드 */}
          <HomeCard
            title="UI 챌린지"
            description="한줄소개한줄소개한줄소개한줄소개한줄소개한줄소개"
            href={`/challenges/UI?day=${temDay}`}
            imgSrc="/assets/home/spheres.png"
          />
        </div>
      </div>
    </div>
  );
}
