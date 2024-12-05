'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function ChallengePreview() {
  const [activeTab, setActiveTab] = useState('UX');
  const cards = [
    {
      id: 1,
      day: '1',
      description:
        '챌린지 간단 소개글을 입력해주세요. 챌린지 간단 소개글을 입력해주세요.',
      title: '로그인 / 회원가입 페이지',
      participants: 'n',
    },
    {
      id: 2,
      day: '2',
      description:
        '챌린지 간단 소개글을 입력해주세요. 챌린지 간단 소개글을 입력해주세요.',
      title: 'HMW statement',
      participants: 'n',
    },
    {
      id: 3,
      day: '3',
      description:
        '챌린지 간단 소개글을 입력해주세요. 챌린지 간단 소개글을 입력해주세요.',
      title: '사용자 페르소나 작성',
      participants: 'n',
    },
    {
      id: 4,
      day: '4',
      description:
        '챌린지 간단 소개글을 입력해주세요. 챌린지 간단 소개글을 입력해주세요.',
      title: '대시보드 UI 만들기',
      participants: 'n',
    },
    {
      id: 5,
      day: '5',
      description:
        '챌린지 간단 소개글을 입력해주세요. 챌린지 간단 소개글을 입력해주세요.',
      title: '대시보드 UX 수정하기',
      participants: 'n',
    },
  ];

  return (
    <div className="flex w-full justify-center py-20 2xl:pt-[94px]">
      <div className="flex w-full flex-col px-8 lg:w-[90%] xl:w-3/4">
        {/* 제목 */}
        <h3 className="mb-10 text-h3 font-bold text-foreground">
          챌린지 미리보기
          <span className="ml-3">👀</span>
        </h3>

        {/* 탭 메뉴 */}
        <nav className="mb-[44px] w-full">
          <ul className="flex w-fit border-b-2 border-gray-200 text-text-caption">
            {['UX', 'UI'].map((tab) => (
              <li
                key={tab}
                className={`w-[90px] cursor-pointer py-2.5 text-center text-subtitle2 transition-colors ${
                  activeTab === tab
                    ? '-mb-[2px] border-b-2 border-main-primary text-main-primary'
                    : 'hover:text-main-primary'
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </li>
            ))}
          </ul>
        </nav>

        {/* 카드 섹션 */}
        <div className="relative">
          <div className="flex w-full overflow-x-scroll bg-white pb-10">
            {cards.map((card, index) => (
              <Link
                //index자리에 카테고리(ui, ux)로 넣기
                href={`/challenge/${index}`}
                key={card.id}
                className={`relative w-[260px] shrink-0 snap-start rounded-2xl shadow-card ${
                  index === cards.length - 1 ? 'mr-8' : 'mr-4'
                }`}
              >
                <img
                  src={`/assets/home/ux-m/ux-m-day${Number(index) + 1}.png`}
                  alt="challenge card image"
                  className=""
                />
                <article className="p-5">
                  <h4 className="mb-4 text-lg font-bold text-black">
                    {card.title}
                  </h4>
                  <p className="mb-4 text-[13px] text-gray-600">
                    {card.description}
                  </p>
                  <div className="flex justify-end text-sm font-semibold text-gray-400">
                    <img
                      src="/assets/home/user.png"
                      alt="user image"
                      className="size-[18px]"
                    />
                    <span className="text-gray-900">{card.participants}명</span>
                    <span className="pl-1.5 text-main-primary">참가 중</span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
