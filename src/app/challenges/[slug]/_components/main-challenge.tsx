import H3Title from '@/_components/common/home-title';
import React from 'react';

export default function MainChallenge() {
  return (
    <div>
      <H3Title title="피어펙트 챌린지" />
      <article className="w-full rounded-2xl shadow-card">
        <img src="/assets/home/ux-xl/ux-xl-day1.png" alt="ux card image" />
        <div className="flex flex-col gap-y-4 px-[30px] py-5">
          <h4 className="text-subtitle1">UX란 무엇인가요?</h4>
          <li className="text-body text-gray-600">
            UX와 UI의 차이를 간단히 조사하고, 노트에 정리해보세요.
          </li>
          <div className="flex justify-end text-sm font-semibold text-gray-400">
            <img
              src="/assets/home/user.png"
              alt="user image"
              className="size-[18px]"
            />
            <span className="text-gray-900">nn 명</span>
            <span className="pl-1.5 text-main-primary">참가 중</span>
          </div>
        </div>
      </article>
    </div>
  );
}
