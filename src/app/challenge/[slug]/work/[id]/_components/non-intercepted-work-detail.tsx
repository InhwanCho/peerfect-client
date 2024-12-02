'use client';

import CustomButton from '@/app/_components/common/custom-button';
import SvgChat from '@/app/_components/icons/L/Chat';
import SvgFilledStar from '@/app/_components/icons/M/FilledStar';

interface NonInterceptedWorkDetailProps {
  slug: string;
  id: string;
}

const currentWork = {
  title: 'Modern UI 챌린지',
  date: '2024-12-01',
  designer: '뉴비 디자이너',
  description: '상세 내용 블라블라...',
  tools: ['Figma', 'Sketch', 'Illustrator'],
  duration: '5 days',
  difficulty: 4,
  link: 'https://example.com/project/modern-ui-design',
};

export default function NonInterceptedWorkDetail({
  slug,
  id,
}: NonInterceptedWorkDetailProps) {
  return (
    <div className="">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-sm font-medium text-main-primary">
          {`#챌린지 ${slug} ${currentWork.title}`}
          이건 새로고침 시 보여지는 문구(인터셉팅 안된거입니다) - 아직 디자인
          작업중
        </h3>
        <span className="text-sm text-gray-500">{currentWork.date}</span>
      </div>
      <h1 className="mb-2 text-h2 font-semibold text-text-primary">
        {currentWork.title}
      </h1>
      <p className="mb-4 text-sm text-gray-600">{currentWork.designer}</p>
      <div className="mb-4 h-[600px] w-full rounded-lg bg-gray-200"></div>
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

        <div className="flex flex-col gap-x-8 gap-y-4">
          {/* 소요 시간 */}
          <div className="flex items-center">
            <p className="w-[100px] text-body text-gray-800">소요 시간</p>
            <p className="text-sm text-text-primary">{currentWork.duration}</p>
          </div>
          {/* 난이도 */}
          <div className="flex items-center">
            <p className="w-[100px] text-body text-gray-800">난이도</p>
            {Array.from({ length: currentWork.difficulty }).map((_, index) => (
              <SvgFilledStar key={index} />
            ))}
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
      <div className="w-full border-b border-gray-300 pb-6">
        <div className="flex w-[1060px] items-center justify-between  pt-40">
          <div className="flex">
            <SvgChat width={26} height={25} />
            <span className="pl-3">피드백 공간</span>
          </div>
          <span>999개의 피드백</span>
        </div>
      </div>

      {/* 댓글 영역 */}
      <div className="flex flex-col gap-y-3.5 rounded-xl pt-[70px]">
        <div className="flex items-center justify-between text-body">
          <p className="text-text-secondary">
            디자이너{' '}
            <span className="font-semibold text-text-primary">(이름)님</span>
            <span className="h-0 pl-2 text-buttonS text-gray-400">|</span>
            <button
              aria-label="report"
              className="pl-2 text-buttonS text-gray-400"
            >
              신고
            </button>
          </p>
          <p className="text-text-tertiary">2024-12-01</p>
        </div>
        {/* 후기 내용 */}
        <p className="leading-relaxed text-text-primary">
          챌린지를 도전함! 챌린지를 도전함! 챌린지를 도전함! 챌린지를 도전함!
          챌린지를 도전함! 챌린지를 도전함! 챌린지를 도전함! 챌린지를 도전함!
          챌린지를 도전함! 챌린지를 도전함! 챌린지를 도전함! 챌린지를 도전함!
        </p>
        <button className="flex text-buttonS text-gray-600">답글달기</button>
      </div>
      <div className="flex w-full justify-end pt-[30px]">
        <div className="flex w-[900px] flex-col gap-y-2.5 rounded-2xl bg-gray-300 p-5">
          <div className="flex items-center justify-between text-body">
            <p className="text-text-secondary">
              디자이너{' '}
              <span className="font-semibold text-text-primary">(이름)님</span>
              <span className="h-0 pl-2 text-buttonS text-gray-400">|</span>
              <button
                aria-label="report"
                className="pl-2 text-buttonS text-gray-400"
              >
                신고
              </button>
            </p>
            <p className="text-text-tertiary">2024-12-01</p>
          </div>
          <div className="flex text-[#7E7E7E]">
            @00님
            <p className="pl-2 text-gray-900">
              챌린지를 도전함! 챌린지를 도전함!답글답글
            </p>
          </div>
          <button className="flex text-buttonS text-gray-600">답글달기</button>
        </div>
      </div>
      <div className="w-full py-[70px]">
        <textarea
          className="h-[192px] w-full resize-none rounded-2xl border bg-background-primary p-5 text-sm text-text-primary placeholder:text-sm placeholder:text-gray-400 focus:outline-none"
          placeholder="작업물에 대한 생각이나 의견을 공유해주세요."
        />

        <div className="flex justify-end pt-8">
          <CustomButton color="purple" size="xs" reviewButton>
            등록
          </CustomButton>
        </div>
      </div>
    </div>
  );
}
