'use client';

import Link from 'next/link';
import { useState } from 'react';
import SvgArrowRight from '../icons/M/ArrowRight';

interface ChallengeCardProps {
  completed?: boolean;
  select: string;
  challengesData: {
    challengeNo: number;
    challengeShortIntro: string;
    challengeTitle: string;
  }[];
}

export default function ChallengeCard({
  completed,
  select,
  challengesData,
}: ChallengeCardProps) {
  const [hoveredChallengeNo, setHoveredChallengeNo] = useState<number | null>(
    null
  );

  return (
    <div className="relative">
      <div className="custom-scrollbar flex w-full overflow-x-auto bg-white pb-6">
        {challengesData.map((card) => (
          <Link
            href={{
              pathname: `/challenge/${card.challengeNo}`,
              query: { active: select },
            }}
            key={card.challengeNo}
            className={`relative max-w-[260px] shrink-0 snap-start rounded-2xl shadow-card ${
              card.challengeNo ===
              challengesData[challengesData.length - 1].challengeNo
                ? 'mr-8'
                : 'mr-4'
            }`}
            onMouseEnter={() => setHoveredChallengeNo(card.challengeNo)}
            onMouseLeave={() => setHoveredChallengeNo(null)}
          >
            <div
              className={`card-blur relative ${
                completed && hoveredChallengeNo === card.challengeNo
                  ? 'blured'
                  : ''
              }`}
            >
              {/* 첫 번째 이미지 */}
              <img
                src={`/assets/home/${select.toLowerCase()}-m/${select.toLowerCase()}-m-day${card.challengeNo}.png`}
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
              {completed && hoveredChallengeNo === card.challengeNo ? (
                <>
                  <div>
                    <h4 className="mb-4 text-lg font-bold text-black">
                      {card.challengeTitle}
                    </h4>
                    <div className="flex justify-between font-medium">
                      <p className="text-text-primary">챌린지 완료일</p>
                      <time className="ml-3.5 text-main-primary">
                        {/* 완료일 데이터 없음 */}
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
                    <h4 className="line-clamp-2 h-14 text-lg font-bold text-black">
                      {card.challengeTitle}
                    </h4>
                    <p className="line-clamp-2 text-[13px] text-gray-600">
                      {card.challengeShortIntro}
                    </p>
                  </div>
                  <div className="flex justify-end text-sm font-semibold text-gray-400">
                    <img
                      src="/assets/home/user.png"
                      alt="user image"
                      className="size-[18px]"
                    />
                    <span className="ml-2 text-gray-900">nn 명</span>
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
