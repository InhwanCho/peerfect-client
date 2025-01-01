'use client';

import CustomButton from '@/app/_components/common/custom-button';

import SvgFilledStar from '@/app/_components/icons/M/FilledStar';
import SvgHalfStar from '@/app/_components/icons/M/HalfStar';
import SvgXCricleFill from '@/app/_components/icons/M/XCricleFill';
import { useRouter, useSearchParams } from 'next/navigation';

interface SideInfoProps {
  location: 'content' | 'side';
  slug: string;
}

export default function SideInfo({ slug, location }: SideInfoProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const title = searchParams.get('title') || '임시 제목입니다';

  return (
    <>
      {location === 'side' ? (
        <aside className="ml-10 hidden w-[320px] lg:block xl:ml-14 xl:w-[340px]">
          <div className="card-container sticky top-32 rounded-lg bg-background-primary px-7 py-8">
            <div>
              <p className="mb-1 text-sm text-text-primary">#챌린지 {slug}</p>
              <h2 className="text-xl font-bold text-black">{title}</h2>
            </div>
            <div>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-sm text-gray-600">등록날짜</span>
                <time className="text-sm font-bold text-text-primary">
                  2024-11-10
                </time>
              </div>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-sm text-gray-600">참여자 수</span>
                <span className="text-sm font-bold text-main-primary">
                  23 명 참가 중
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
              onClick={() => {
                router.push(`${slug}/upload`);
              }}
              color="purple"
              className="my-10"
            >
              시작하기
            </CustomButton>
            <p className="mt-6 flex justify-center text-center text-sm text-text-caption ">
              <span className="cursor-pointer decoration-current underline-offset-4 transition-all duration-200 hover:text-text-primary hover:underline">
                챌린지를 중단할래요
              </span>
            </p>
          </div>
        </aside>
      ) : (
        <aside className="sticky bottom-12 mx-auto block w-full sm:bottom-20 lg:hidden">
          <div className="card-container flex items-center justify-between rounded-lg bg-background-primary">
            {/* 왼쪽 섹션 챌린지,타이틀*/}
            <div className="flex w-full items-center justify-between p-6 sm:px-10">
              <div className="flex flex-col">
                <p className="text-sm text-gray-600">#챌린지 {slug}</p>
                <h2 className="mt-1 text-xl font-bold text-black">{title}</h2>
              </div>
              {/* 오른쪽 섹션 날짜, 난이도*/}
              <div className="hidden flex-col items-end space-y-2 sm:flex">
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600">등록날짜</span>
                  <time className="text-sm font-bold text-text-primary">
                    2024-00-10
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
              onClick={() => {
                router.push(`/start-challenge`);
              }}
              color="purple"
              size="xs"
              className="mr-6 sm:mr-10 "
            >
              시작하기
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
