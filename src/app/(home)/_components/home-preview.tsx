'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import H3Title from '@/app/_components/common/h3-title';
import SvgArrowDown from '@/app/_components/icons/M/ArrowDown';
import SvgArrowUp from '@/app/_components/icons/M/ArrowUp';
import { useChallengePreview } from '@/hooks/use-challenge-preview';
import CustomButton from '@/app/_components/common/custom-button';

interface HomePreviewProps {
  activeTab: string;
}

export default function HomePreview({ activeTab }: HomePreviewProps) {
  const {
    data: challenges,
    isLoading,
    isError,
  } = useChallengePreview(activeTab);
  const [showAll, setShowAll] = useState(false);
  const router = useRouter();

  if (isLoading) return <div>Loading...</div>;
  if (isError || !challenges) return <div>Error loading challenges</div>;

  const visibleChallenges = showAll ? challenges : challenges.slice(0, 4);

  const handleToggle = () => {
    if (showAll) {
      router.push('#challengeList');
    }
    setShowAll(!showAll);
  };

  return (
    <div
      className="flex w-full justify-center py-20 2xl:pt-[94px]"
      id="challengeList"
    >
      <div className="flex w-full flex-col px-8 lg:w-[90%] xl:w-3/4">
        {/* 제목 */}
        <H3Title title={`${activeTab} 챌린지에서는 이런걸 진행해요`} eyes />

        {/* 챌린지 리스트 */}
        <div
          className={`mt-8 transition-all duration-500 ${
            showAll ? 'max-h-[1450px]' : 'max-h-[340px]'
          } overflow-hidden`}
        >
          {visibleChallenges.map((challenge, index) => (
            <div key={challenge.challengeNo} className="mb-8 flex items-start">
              {/* Day (왼쪽) */}
              <div className="ml-10 w-[100px] shrink-0">
                <span className="text-subtitle1 font-bold text-main-primary">{`DAY ${index + 1}`}</span>
              </div>

              {/* 제목 및 설명 (오른쪽) */}
              <div className="flex flex-col">
                <h4 className="mb-2 line-clamp-1 text-subtitle1 font-semibold text-black">
                  {challenge.challengeTitle}
                </h4>
                <p className="text-body text-gray-600">
                  {challenge.challengeShortIntro}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 펼치기 / 접기 버튼 */}
        <div className="my-8 flex justify-center">
          <span className="cursor-pointer" onClick={handleToggle}>
            {showAll ? <SvgArrowUp /> : <SvgArrowDown />}
          </span>
        </div>

        {/* 하단 버튼 */}
        <div className="my-20 flex justify-center">
          <CustomButton
            color="purple"
            size="small"
            onClick={() => {
              router.push(
                `${activeTab === 'UX' ? '/challenges/UX?day=1' : '/challenges/UI?day=1'}`
              );
            }}
          >
            {activeTab} 챌린지 시작하기
          </CustomButton>
        </div>
      </div>
    </div>
  );
}
