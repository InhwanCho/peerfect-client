import CustomButton from '@/app/_components/common/custom-button';
import SvgChat from '@/app/_components/icons/L/Chat';
import { cn } from '@/lib/utils';

interface FeedbackSectionProps {
  isModal?: boolean;
  className?: string;
}

export default function FeedbackSection({
  className,
  isModal = false,
}: FeedbackSectionProps) {
  return (
    <section>
      <div className={cn('w-full border-b border-gray-300 pb-6', className)}>
        <div className="flex w-full items-center justify-between px-1">
          <div className="flex items-center">
            <SvgChat width={26} height={25} />
            <span className="pl-3 text-h4">피드백 공간</span>
          </div>
          <span className="text-gray-900">
            <span className="font-semibold">999</span>개의 피드백
          </span>
        </div>
      </div>
      {/* 댓글 영역 */}
      <div className="mb-10 flex flex-col gap-y-3.5 rounded-xl pt-[70px]">
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
          <time className="text-text-tertiary">2024-12-01</time>
        </div>
        {/* 후기 내용 */}
        <p className="leading-relaxed text-text-primary">
          챌린지를 도전함! 챌린지를 도전함! 챌린지를 도전함! 챌린지를 도전함!
          챌린지를 도전함! 챌린지를 도전함! 챌린지를 도전함! 챌린지를 도전함!
          챌린지를 도전함! 챌린지를 도전함! 챌린지를 도전함! 챌린지를 도전함!
        </p>
        <span className="flex">
          <button className="text-buttonS text-gray-600">답글달기</button>
        </span>
      </div>
      <div className="flex w-full justify-end">
        <div
          className={`flex w-[300px] flex-col gap-y-2.5 rounded-2xl bg-gray-300 p-5 phone:w-[445px] ${isModal ? 'lg:w-[700px]' : 'lg:w-[900px]'}`}
        >
          <div className="flex items-center justify-between text-body">
            <p className="text-body text-gray-900">
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
            <time className="text-gray-500">2024-12-01</time>
          </div>
          <div className="flex items-start text-[#7E7E7E]">
            <p className="h-6 min-w-[50px] shrink-0">@00님</p>
            <p className="pl-2 text-gray-900">
              챌린지를 도전함! 챌린지 챌린지를 도전함! 챌린지 챌린지를 도전함!
              챌린지
            </p>
          </div>
          <span className="flex">
            <button className="text-buttonS text-gray-600">답글달기</button>
          </span>
        </div>
      </div>
      <div className="w-full py-[70px]">
        <textarea
          className="h-[120px] w-full resize-none rounded-2xl border border-gray-500 bg-background-primary p-5 text-sm text-text-primary placeholder:text-sm placeholder:text-gray-600 focus:outline-none"
          placeholder="작업물에 대한 생각이나 의견을 공유해주세요."
        />

        <div className="flex justify-end pt-8">
          <CustomButton color="purple" size="xs" reviewButton>
            등록
          </CustomButton>
        </div>
      </div>
    </section>
  );
}
