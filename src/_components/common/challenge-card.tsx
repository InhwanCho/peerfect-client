'use client';

import Link from 'next/link';
import { useState } from 'react';
import SvgArrowRight from '../icons/M/ArrowRight';

export const cards = [
  {
    id: 1,
    day: '1',
    description:
      '챌린지 간단 소개글을 입력해주세요. 챌린지 간단 소개글을 입력해주세요.',
    title: '로그인 / 회원가입 페이지',
    participants: '5',
    completedDate: '2024-10-01',
  },
  {
    id: 2,
    day: '2',
    description:
      '챌린지 간단 소개글을 입력해주세요. 챌린지 간단 소개글을 입력해주세요.',
    title: 'HMW statement',
    participants: '10',
    completedDate: '2024-10-02',
  },
  {
    id: 3,
    day: '3',
    description:
      '챌린지 간단 소개글을 입력해주세요. 챌린지 간단 소개글을 입력해주세요.',
    title: '사용자 페르소나 작성',
    participants: '8',
    completedDate: '2024-10-03',
  },
  {
    id: 4,
    day: '4',
    description:
      '챌린지 간단 소개글을 입력해주세요. 챌린지 간단 소개글을 입력해주세요.',
    title: '대시보드 UI 만들기',
    participants: '12',
    completedDate: '2024-10-04',
  },
  {
    id: 5,
    day: '5',
    description:
      '챌린지 간단 소개글을 입력해주세요. 챌린지 간단 소개글을 입력해주세요.',
    title: '대시보드 UX 수정하기',
    participants: '15',
    completedDate: '2024-10-05',
  },
  {
    id: 6,
    day: '6',
    description:
      '챌린지 간단 소개글을 입력해주세요. 챌린지 간단 소개글을 입력해주세요.',
    title: '프로토타입 테스트',
    participants: '9',
    completedDate: '2024-10-06',
  },
  {
    id: 7,
    day: '7',
    description:
      '챌린지 간단 소개글을 입력해주세요. 챌린지 간단 소개글을 입력해주세요.',
    title: '사용성 평가',
    participants: '7',
    completedDate: '2024-10-07',
  },
  {
    id: 8,
    day: '8',
    description:
      '챌린지 간단 소개글을 입력해주세요. 챌린지 간단 소개글을 입력해주세요.',
    title: 'UI 컴포넌트 라이브러리 제작',
    participants: '11',
    completedDate: '2024-10-08',
  },
  {
    id: 9,
    day: '9',
    description:
      '챌린지 간단 소개글을 입력해주세요. 챌린지 간단 소개글을 입력해주세요.',
    title: '반응형 UI 설계',
    participants: '13',
    completedDate: '2024-10-09',
  },
  {
    id: 10,
    day: '10',
    description:
      '챌린지 간단 소개글을 입력해주세요. 챌린지 간단 소개글을 입력해주세요.',
    title: 'UI 디자인 개선',
    participants: '14',
    completedDate: '2024-10-10',
  },
  {
    id: 11,
    day: '11',
    description:
      '챌린지 간단 소개글을 입력해주세요. 챌린지 간단 소개글을 입력해주세요.',
    title: '디자인 시스템 정리',
    participants: '16',
    completedDate: '2024-10-11',
  },
  {
    id: 12,
    day: '12',
    description:
      '챌린지 간단 소개글을 입력해주세요. 챌린지 간단 소개글을 입력해주세요.',
    title: '사용자 테스트',
    participants: '18',
    completedDate: '2024-10-12',
  },
  {
    id: 13,
    day: '13',
    description:
      '챌린지 간단 소개글을 입력해주세요. 챌린지 간단 소개글을 입력해주세요.',
    title: '최종 피드백 반영',
    participants: '20',
    completedDate: '2024-10-13',
  },
  {
    id: 14,
    day: '14',
    description:
      '챌린지 간단 소개글을 입력해주세요. 챌린지 간단 소개글을 입력해주세요.',
    title: '최종 결과물 제출',
    participants: '22',
    completedDate: '2024-10-14',
  },
];

interface ChallengeCardProps {
  completed?: boolean;
}

export default function ChallengeCard({ completed }: ChallengeCardProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="relative">
      <div className="flex w-full overflow-x-auto bg-white pb-10">
        {cards.map((card, index) => (
          <Link
            href={`/challenge/${index}`}
            key={card.id}
            className={`relative max-w-[260px] shrink-0 snap-start rounded-2xl shadow-card ${
              index === cards.length - 1 ? 'mr-8' : 'mr-4'
            }`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div
              className={`card-blur relative ${
                completed && card.completedDate && hoveredIndex === index
                  ? 'blured'
                  : ''
              }`}
            >
              {/* 첫 번째 이미지 */}
              <img
                src={`/assets/home/ux-m/ux-m-day${Number(index) + 1}.png`}
                alt="challenge card image"
                className="card-image"
              />

              {/* 완료된 챌린지 스탬프 */}
              {completed && (
                <img
                  src="/assets/challenges/completed-stamp.png"
                  alt="completed stamp image"
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                  style={{ width: '65%' }}
                />
              )}
            </div>

            {/* 텍스트 영역 */}
            <article className="flex h-[160px] flex-col justify-between p-5">
              {completed && card.completedDate && hoveredIndex === index ? (
                <>
                  <div>
                    <h4 className="mb-4 text-lg font-bold text-black">
                      {card.title}
                    </h4>
                    <div className="flex justify-between font-medium">
                      <p className="text-text-primary">챌린지 완료일</p>
                      <time className="ml-3.5 text-main-primary ">
                        {card.completedDate}
                      </time>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <button className="flex items-center border-b-2 border-transparent font-medium text-gray-500 hover:border-gray-300">
                      챌린지 후기 작성
                      <span className="ml-2">
                        <SvgArrowRight filledColor="#9E9E9E" />
                      </span>
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <h4 className="mb-4 text-lg font-bold text-black">
                      {card.title}
                    </h4>
                    <p className="text-[13px] text-gray-600">
                      {card.description}
                    </p>
                  </div>
                  <div className="flex justify-end text-sm font-semibold text-gray-400">
                    <img
                      src="/assets/home/user.png"
                      alt="user image"
                      className="size-[18px]"
                    />
                    <span className="ml-2 text-gray-900">
                      {card.participants}명
                    </span>
                    <span className="pl-1.5 text-main-primary">참가 중</span>
                  </div>
                </>
              )}
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}
