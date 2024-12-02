'use client';

import CustomToggle from '@/app/_components/common/custom-toggle';
import SvgFilledStar from '@/app/_components/icons/M/FilledStar';
import SvgX from '@/app/_components/icons/M/X';
import SvgLeft from '@/app/_components/icons/XL/Left';
import SvgRight from '@/app/_components/icons/XL/Right';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface InterceptedWorkDetailModalProps {
  slug: string;
  id: string;
}

const currentWork = {
  title: 'Modern UI 챌린지',
  date: '2024-12-01',
  designer: '뉴비 디자이너',
  description:
    'This project demonstrates modern UI practices with responsive design and accessibility in mind.',
  tools: ['Figma', 'Sketch', 'Illustrator'],
  duration: '5 days',
  difficulty: 4,
  link: 'https://example.com/project/modern-ui-design',
};

export default function InterceptedWorkDetailModal({
  slug,
  id,
}: InterceptedWorkDetailModalProps) {
  const router = useRouter();
  const onClose = () => router.back();
  const xButton = true;
  const [isDesignSelected, setIsDesignSelected] = useState(true);
  const handleToggle = () => {
    setIsDesignSelected((prev) => !prev);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#111111]/80"
      onClick={onClose}
    >
      <div
        className="relative h-[82vh] w-[1280px] rounded-lg bg-background-secondary px-[32px] md:px-[57px] lg:px-[82px] xl:px-[180px]"
        onClick={(e) => e.stopPropagation()}
      >
        {xButton && (
          <button
            className="absolute right-4 top-4 text-2xl text-text-primary"
            onClick={onClose}
            aria-label="close button"
          >
            <SvgX />
          </button>
        )}
        {/* 새부 컨텐츠 */}
        <CustomToggle
          isActive={isDesignSelected}
          onToggle={handleToggle}
          variant="button"
          activeText="디자인 작업물"
          inactiveText="피드백"
        />
        <div className="px-4">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-sm font-medium text-main-primary">
              {`#챌린지 ${slug} ${currentWork.title}`}
            </h3>
            <span className="text-sm text-gray-500">{currentWork.date}</span>
          </div>
          <h1 className="mb-2 text-h2 font-semibold text-text-primary">
            {currentWork.title}
          </h1>
          <p className="mb-4 text-sm text-gray-600">{currentWork.designer}</p>
          <div className="mb-4 h-[400px] w-full rounded-lg bg-gray-200"></div>
          <p className="text-sm text-gray-600">{currentWork.description}</p>
          <div className="mt-6">
            <div className="mb-4 flex flex-wrap items-center">
              <div className="flex items-center space-x-2">
                <p className="w-[100px] text-body text-gray-800">사용한 툴</p>
                <div className="flex flex-wrap gap-2">
                  {currentWork.tools.map((tool, i) => (
                    <span
                      key={i}
                      className="rounded-full border border-gray-300 bg-gray-100 px-4 py-2 text-sm text-gray-800"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-x-8 gap-y-4">
              {/* 소요 시간 */}
              <div className="flex items-center">
                <p className="w-[100px] text-body text-gray-800">소요 시간</p>
                <p className="text-sm text-text-primary">
                  {currentWork.duration}
                </p>
              </div>

              {/* 난이도 */}
              <div className="flex items-center">
                <p className="w-[100px] text-body text-gray-800">난이도</p>
                {Array.from({ length: currentWork.difficulty }).map(
                  (_, index) => (
                    <SvgFilledStar key={index} />
                  )
                )}
              </div>

              {/* 작업 링크 */}
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
        </div>

        <button
          className="absolute -left-[120px] top-1/2 -translate-y-1/2 text-3xl text-text-primary"
          onClick={(e) => {
            e.stopPropagation();
            // onPrev();
          }}
          aria-label="prev button"
        >
          <SvgLeft props={{ width: 80, height: 80 }} />
        </button>
        <button
          className="absolute right-[-120px] top-1/2 -translate-y-1/2 text-3xl text-text-primary"
          onClick={(e) => {
            e.stopPropagation();
            // onNext();
          }}
          aria-label="next button"
        >
          <SvgRight props={{ width: 80, height: 80 }} />
        </button>
      </div>
    </div>
  );
}
