'use client';

import CustomButton from '@/app/_components/common/custom-button';
import SvgConnectionThreeDots from '@/app/_components/icons/M/ConnectionThreeDots';
import SvgFilledStar from '@/app/_components/icons/M/FilledStar';
import SvgHalfStar from '@/app/_components/icons/M/HalfStar';
import SvgHeartEmpty from '@/app/_components/icons/M/HeartEmpty';
import { useRouter, useSearchParams } from 'next/navigation';

interface SideInfoProps {
  slug: string;
}

export default function SideInfo({ slug }: SideInfoProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const title = searchParams.get('title') || '임시 제목입니다';

  return (
    <aside className="ml-14 hidden w-[340px] xl:block">
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
          참여하기
        </CustomButton>
        <div className="flex items-center justify-between">
          <button
            className="flex h-[40px] w-[46%] items-center justify-center rounded-lg border border-gray-300 py-2 text-sm text-gray-600"
            aria-label="favorite button"
          >
            <SvgHeartEmpty
              filledColor="#AC6BFF"
              props={{ width: 22, height: 22 }}
            />{' '}
            <span className="ml-2">찜하기</span>
          </button>
          <button
            className="flex h-[40px] w-[46%] items-center justify-center rounded-lg border border-gray-300 py-2 text-sm text-gray-600"
            aria-label="share button"
          >
            <SvgConnectionThreeDots
              filledColor="#AC6BFF"
              props={{ width: 22, height: 22 }}
            />{' '}
            <span className="ml-2">공유하기</span>
          </button>
        </div>
        <p className="mt-6 flex justify-center text-center text-sm text-text-caption ">
          <span className="cursor-pointer decoration-current underline-offset-4 transition-all duration-200 hover:text-text-primary hover:underline">
            챌린지를 중단할래요
          </span>
        </p>
      </div>
    </aside>
  );
}
