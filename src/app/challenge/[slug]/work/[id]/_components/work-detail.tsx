'use client';

import CustomToggle from '@/_components/common/custom-toggle';
import CustomButton from '@/_components/common/custom-button';
import SvgChat from '@/app/_components/icons/L/Chat';
import SvgFilledStar from '@/app/_components/icons/M/FilledStar';
import SvgX from '@/app/_components/icons/M/X';
import SvgLeft from '@/app/_components/icons/XL/Left';
import SvgRight from '@/app/_components/icons/XL/Right';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface WorkDetailProps {
  slug: string;
  id: string;
  isModal: boolean;
}

const currentWork = {
  title: 'Modern UI 챌린지',
  date: '2024-12-01',
  designer: '뉴비 디자이너',
  description: '상세 내용 블라블라...',
  tools: ['Figma', 'Sketch', 'Illustrator'],
  duration: '5일',
  difficulty: 4,
  link: 'https://example.com/project/modern-ui-design',
};

export default function WorkDetail({ slug, id, isModal }: WorkDetailProps) {
  const router = useRouter();
  const onClose = () => router.back();
  const [isDesignSelected, setIsDesignSelected] = useState(true);
  const handleToggle = () => {
    setIsDesignSelected((prev) => !prev);
  };

  return (
    <div
      className={`${
        isModal
          ? 'fixed inset-0 z-50 flex items-center justify-center bg-[#111111]/80'
          : ''
      }`}
      onClick={isModal ? onClose : undefined}
    >
      <div
        className={`relative ${
          isModal
            ? 'h-[82vh] w-[1280px] overflow-y-auto rounded-lg bg-background-secondary px-[32px] pb-14 md:px-[57px] lg:px-[82px] xl:px-[180px]'
            : ''
        }`}
        onClick={isModal ? (e) => e.stopPropagation() : undefined}
      >
        {isModal && (
          <button
            className="absolute right-4 top-4 text-2xl text-text-primary"
            onClick={onClose}
            aria-label="close button"
          >
            <SvgX />
          </button>
        )}

        {isModal && (
          <CustomToggle
            isActive={isDesignSelected}
            onToggle={handleToggle}
            variant="button"
            activeText="디자인 작업물"
            inactiveText="피드백"
          />
        )}

        <div className="px-4">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-sm font-medium text-main-primary">
              {`#챌린지 ${slug} ${currentWork.title}`}
            </h3>
            <time className="text-sm text-gray-500">{currentWork.date}</time>
          </div>
          <h1 className="mb-2 text-h2 font-semibold text-text-primary">
            {currentWork.title}
          </h1>
          <p className="mb-4 text-sm text-gray-600">{currentWork.designer}</p>
          <div className="mb-4 h-[400px] w-full rounded-lg bg-gray-200"></div>
          <p className="text-sm text-gray-600">{currentWork.description}</p>
          <div className="mt-6 flex flex-col space-y-5">
            <div className="flex flex-wrap items-center">
              <div className="flex items-center">
                <p className="w-[100px] text-body text-gray-800">사용한 툴</p>
                <div className="flex flex-wrap space-x-4">
                  {currentWork.tools.map((tool, i) => (
                    <span
                      key={i}
                      className="flex h-[33px] w-[128px] cursor-pointer items-center justify-center rounded-full border border-gray-700 font-medium text-gray-800"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex gap-x-8">
              <div className="flex items-center">
                <p className="w-[100px] text-body text-gray-800">소요 시간</p>
                <p className="text-sm text-text-primary">
                  {currentWork.duration}
                </p>
              </div>

              <div className="flex items-center">
                <p className="w-[100px] text-body text-gray-800">난이도</p>
                {Array.from({ length: currentWork.difficulty }).map(
                  (_, index) => (
                    <SvgFilledStar key={index} />
                  )
                )}
              </div>
            </div>

            <div className="flex items-center">
              <p className="w-[100px] text-body text-gray-800">작업 링크</p>
              <a
                href={currentWork.link}
                className="text-body text-[#0B74F0]"
                target="_blank"
                rel="noopener noreferrer"
              >
                링크
              </a>
            </div>
          </div>
        </div>

        {isModal && (
          <>
            <button
              className="absolute -left-[120px] top-1/2 -translate-y-1/2 text-3xl text-text-primary"
              onClick={(e) => e.stopPropagation()}
              aria-label="prev button"
            >
              <SvgLeft props={{ width: 80, height: 80 }} />
            </button>
            <button
              className="absolute right-[-120px] top-1/2 -translate-y-1/2 text-3xl text-text-primary"
              onClick={(e) => e.stopPropagation()}
              aria-label="next button"
            >
              <SvgRight props={{ width: 80, height: 80 }} />
            </button>
          </>
        )}

        {/* 피드백(댓글 영역) */}
        {!isModal && (
          <>
            <div className="w-full border-b border-gray-300 pb-6">
              <div className="flex w-[1060px] items-center justify-between pt-40">
                <div className="flex items-center">
                  <SvgChat width={26} height={25} />
                  <span className="pl-3 text-h4">피드백 공간</span>
                </div>
                <span>999개의 피드백</span>
              </div>
            </div>
            {/* 댓글 영역 */}
            <div className="flex flex-col gap-y-3.5 rounded-xl pt-[70px]">
              <div className="flex items-center justify-between text-body">
                <p className="text-text-secondary">
                  디자이너{' '}
                  <span className="font-semibold text-text-primary">
                    (이름)님
                  </span>
                  <span className="h-0 pl-2 text-buttonS text-gray-400">|</span>
                  <button
                    aria-label="report"
                    className="pl-2 text-buttonS text-gray-400"
                  >
                    신고
                  </button>
                </p>
                <time className="text-text-tertiary">2024-12-01</time>
              </div>
              {/* 후기 내용 */}
              <p className="leading-relaxed text-text-primary">
                챌린지를 도전함! 챌린지를 도전함! 챌린지를 도전함! 챌린지를
                도전함! 챌린지를 도전함! 챌린지를 도전함! 챌린지를 도전함!
                챌린지를 도전함! 챌린지를 도전함! 챌린지를 도전함! 챌린지를
                도전함! 챌린지를 도전함!
              </p>
              <button className="flex text-buttonS text-gray-600">
                답글달기
              </button>
            </div>
            <div className="flex w-full justify-end pt-[30px]">
              <div className="flex w-[900px] flex-col gap-y-2.5 rounded-2xl bg-gray-300 p-5">
                <div className="flex items-center justify-between text-body">
                  <p className="text-text-secondary">
                    디자이너{' '}
                    <span className="font-semibold text-text-primary">
                      (이름)님
                    </span>
                    <span className="h-0 pl-2 text-buttonS text-gray-400">
                      |
                    </span>
                    <button
                      aria-label="report"
                      className="pl-2 text-buttonS text-gray-400"
                    >
                      신고
                    </button>
                  </p>
                  <time className="text-text-tertiary">2024-12-01</time>
                </div>
                <div className="flex text-[#7E7E7E]">
                  @00님
                  <p className="pl-2 text-gray-900">
                    챌린지를 도전함! 챌린지를 도전함!답글답글
                  </p>
                </div>
                <button className="flex text-buttonS text-gray-600">
                  답글달기
                </button>
              </div>
            </div>
            <div className="w-full py-[70px]">
              <textarea
                className="h-[192px] w-full resize-none rounded-2xl border border-gray-500 bg-background-primary p-5 text-sm text-text-primary placeholder:text-sm placeholder:text-gray-600 focus:outline-none"
                placeholder="작업물에 대한 생각이나 의견을 공유해주세요."
              />

              <div className="flex justify-end pt-8">
                <CustomButton color="purple" size="xs" reviewButton>
                  등록
                </CustomButton>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
