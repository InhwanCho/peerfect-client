'use client';

import CustomToggle from '@/app/_components/common/custom-toggle';
import SvgFilledStar from '@/app/_components/icons/M/FilledStar';
import SvgX from '@/app/_components/icons/M/X';
import SvgLeft from '@/app/_components/icons/XL/Left';
import SvgRight from '@/app/_components/icons/XL/Right';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import FeedbackSection from './feedback-section';

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

  // 모달창 뒤의 body태그(배경) 스크롤 금지
  useEffect(() => {
    if (isModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isModal]);

  return (
    <div
      className={`${
        isModal
          ? 'fixed inset-0 z-50 flex items-center justify-center bg-[#111111]/80'
          : ''
      }`}
      onClick={isModal ? onClose : undefined}
    >
      {/* SVG 버튼 컨테이너 */}
      {isModal && (
        <>
          <button
            className="absolute left-[calc(50%-800px)] top-1/2 -translate-y-1/2 text-3xl text-text-primary"
            onClick={(e) => e.stopPropagation()}
            aria-label="prev button"
            style={{
              zIndex: 60, // 다른 요소 위로 표시
            }}
          >
            <SvgLeft props={{ width: 80, height: 80 }} />
          </button>
          <button
            className="absolute right-[calc(50%-800px)] top-1/2 -translate-y-1/2 text-3xl text-text-primary"
            onClick={(e) => e.stopPropagation()}
            aria-label="next button"
            style={{
              zIndex: 60, // 다른 요소 위로 표시
            }}
          >
            <SvgRight props={{ width: 80, height: 80 }} />
          </button>
        </>
      )}

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
            <p className="text-sm font-medium text-main-primary">
              {`#챌린지 ${slug} ${currentWork.title}`}
            </p>
            <time className="text-sm text-gray-500">{currentWork.date}</time>
          </div>
          <h1 className="mb-2 text-h2 font-semibold text-text-primary">
            {currentWork.title}
          </h1>
          <p className="mb-4 text-sm text-gray-600">{currentWork.designer}</p>

          {/* 디자인 작업물 섹션 */}
          {isDesignSelected ? (
            <>
              <div className="mb-4 h-[400px] w-full rounded-lg bg-gray-200"></div>
              <p className="text-sm text-gray-600">{currentWork.description}</p>
              <div className="mt-6 flex flex-col space-y-5">
                <div className="flex flex-wrap items-center">
                  <div className="flex items-center">
                    <p className="w-[100px] text-body text-gray-800">
                      사용한 툴
                    </p>
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
                    <p className="w-[100px] text-body text-gray-800">
                      소요 시간
                    </p>
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
            </>
          ) : (
            <FeedbackSection className="mt-12" />
          )}
        </div>

        {/* 피드백(댓글 영역) */}
        {!isModal && <FeedbackSection className="mt-20 lg:mt-40" />}
      </div>
    </div>
  );
}
