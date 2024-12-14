'use client';

import ChallengeCard from '@/app/_components/common/challenge-card';
import H3Title from '@/app/_components/common/h3-title';
import { useState } from 'react';

export default function ChallengePreview() {
  const [activeTab, setActiveTab] = useState('UX');

  return (
    <div className="flex w-full justify-center py-20 2xl:pt-[94px]">
      <div className="flex w-full flex-col px-8 lg:w-[90%] xl:w-3/4">
        {/* 제목 */}
        <H3Title title="챌린지 미리보기" eyes={true} />
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
        <ChallengeCard />
      </div>
    </div>
  );
}
