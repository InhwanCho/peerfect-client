'use client';

import { startChallenge } from '@/api/start-challenge';
import CustomButton from '@/app/_components/common/custom-button';
import ServiceModal from '@/app/_components/common/modals/service-modal';
import SvgFilledStar from '@/app/_components/icons/M/FilledStar';
import SvgHalfStar from '@/app/_components/icons/M/HalfStar';
import SvgXCricleFill from '@/app/_components/icons/M/XCricleFill';
import { useChallengeDetail } from '@/hooks/use-challenge-detail';
import { useUserStore } from '@/store/use-user-store';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

interface SideInfoProps {
  location: 'content' | 'side';
  slug: string;
}

export default function SideInfo({ slug, location }: SideInfoProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [modalOpen, setModalOpen] = useState(false);
  const active = searchParams.get('active') || '임시 제목입니다';
  const slugNumber = Number(slug);
  const { memberId, challengeInfo } = useUserStore();
  console.log('challengeInfo :', challengeInfo);

  // 챌린지 상세 정보를 가져옴
  const {
    data: challengeDetailData,
    isLoading,
    isError,
  } = useChallengeDetail(slug, active);

  if (isLoading) return <div>Loading...</div>;
  if (isError || !challengeDetailData)
    return <div>Error loading challenge detail</div>;

  const handleStartChallenge = async () => {
    try {
      if (!memberId) return;
      await startChallenge(slugNumber, memberId);
      console.log('Challenge started successfully');
      router.push(`/challenges/${active}?day=1`);
    } catch (error) {
      console.error('Failed to start challenge:', error);
    }
  };

  // 버튼 조건 결정
  const isChallengeStarted =
    challengeInfo?.challengeNo &&
    challengeDetailData.challengeType === challengeInfo.currentChallenge &&
    challengeDetailData.challengeDay === challengeInfo.currentDay;

  const isStartable =
    !challengeInfo?.challengeNo && challengeDetailData.challengeDay === '1';

  console.log('challengeInfo :', challengeInfo);
  console.log('challengeDetailData :', challengeDetailData);
  let buttonText = '';
  let buttonAction = () => {};
  if (isChallengeStarted) {
    buttonText = '업로드하기';
    buttonAction = () => router.push(`/challenge/${slug}/upload`);
  } else if (isStartable) {
    buttonText = '시작하기';
    buttonAction = handleStartChallenge;
  } else {
    buttonText = '미리보기 중';
    buttonAction = () => {};
  }

  return (
    <>
      {location === 'side' ? (
        <aside className="ml-10 hidden w-[320px] lg:block xl:ml-14 xl:w-[340px]">
          <div className="card-container sticky top-32 rounded-lg bg-background-primary px-7 py-8">
            <div>
              <p className="mb-1 text-body text-gray-900">
                #챌린지 {challengeDetailData.challengeDay}
              </p>
              <h2 className="text-xl font-bold text-black">
                {challengeDetailData.challengeTitle}
              </h2>
            </div>
            <div>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-sm text-gray-600">등록날짜</span>
                <time className="text-sm font-bold text-text-primary">
                  {challengeDetailData.challengeReg.split(' ')[0]}
                </time>
              </div>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-sm text-gray-600">참여자 수</span>
                <span className="text-sm font-bold text-main-primary">
                  {challengeDetailData.challengeCountMember} 명 참가 중
                </span>
              </div>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-sm text-gray-600">난이도</span>
                <div className="flex items-center space-x-1">
                  {[0, 0, 0].map((_, i) => (
                    <SvgFilledStar key={i} />
                  ))}
                  <SvgHalfStar />
                  <SvgFilledStar filledColor="#E0E0E0" />
                </div>
              </div>
            </div>
            <CustomButton
              color="purple"
              className="my-10"
              onClick={buttonAction}
              disabled={buttonText === '미리보기 중'}
            >
              {buttonText}
            </CustomButton>
            <p className="mt-6 flex justify-center text-center text-sm text-text-caption ">
              <button
                onClick={() => setModalOpen(!modalOpen)}
                className="cursor-pointer decoration-current underline-offset-4 transition-all duration-200 hover:text-text-primary hover:underline"
              >
                챌린지를 중단할래요
              </button>
            </p>
            {modalOpen && (
              <ServiceModal
                serviceType="stopChallenge"
                onClose={() => setModalOpen(false)}
              />
            )}
          </div>
        </aside>
      ) : (
        <aside className="sticky bottom-12 mx-auto block w-full sm:bottom-20 lg:hidden">
          <div className="card-container flex items-center justify-between rounded-lg bg-background-primary">
            <div className="flex w-full items-center justify-between p-6 sm:px-10">
              <div className="flex flex-col">
                <p className="text-sm text-gray-600">
                  #챌린지 {challengeDetailData.challengeDay}
                </p>
                <h2 className="mt-1 text-xl font-bold text-black">
                  {challengeDetailData.challengeTitle}
                </h2>
              </div>
              <div className="hidden flex-col items-start space-y-2 sm:flex">
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600">등록날짜</span>
                  <time className="text-sm font-bold text-text-primary">
                    {challengeDetailData.challengeReg.split(' ')[0]}
                  </time>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600">난이도</span>
                  <div className="flex items-center space-x-1">
                    {[0, 0, 0].map((_, i) => (
                      <SvgFilledStar key={i} />
                    ))}
                    <SvgHalfStar />
                    <SvgFilledStar filledColor="#E0E0E0" />
                  </div>
                </div>
              </div>
            </div>
            <CustomButton
              onClick={buttonAction}
              color="purple"
              size="xs"
              className="mr-6 sm:mr-10"
              disabled={buttonText === '미리보기 중'}
            >
              {buttonText}
            </CustomButton>
            <button className="mr-6 sm:mr-10">
              <SvgXCricleFill
                filledColor="#E0E0E0"
                props={{ width: 24, height: 24 }}
              />
            </button>
          </div>
        </aside>
      )}
    </>
  );
}
