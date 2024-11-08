'use client';

import Link from "next/link";
import { useState } from "react";
// 나중에 컴포넌트로 리펙토링
/* eslint-disable @next/next/no-img-element */
export default function Navbar() {
  const [isChallengeOpen, setIsChallengeOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  const toggleChallengeDropdown = () => {
    setIsChallengeOpen(!isChallengeOpen);
  };

  const toggleNotification = () => {
    setIsNotificationOpen(!isNotificationOpen);
  };

  return (
    // Navbar를 항상 화면 상단에 고정시키고 z-index를 추가
    <header className="w-full bg-[#111111] flex justify-center select-none fixed top-0 left-0 z-50">
      <div className="md:w-[80%] px-6 md:px-0 h-[90px] flex justify-between items-center">
        <div className="justify-start items-center gap-[86px] flex">
          <Link href={'/'} className="w-[170px] h-[55px] flex items-center">
            <picture>
              <source srcSet="/assets/nav/main_logo.webp" type="image/webp" />
              <img src="/assets/nav/main_logo.png" alt="logo image" />
            </picture>
          </Link>
          <div className="flex items-center gap-[17px]">
            <nav className="flex items-center">
              <div className="pr-3 flex items-center cursor-pointer relative" onClick={toggleChallengeDropdown}>
                <div className="text-white md:text-base lg:text-lg font-semibold pr-4 whitespace-nowrap">챌린지</div>
                <picture className={`transform transition-all ${isChallengeOpen ? "rotate-180" : "rotate-0"}`}>
                  <source srcSet="/assets/nav/arrow_down.webp" type="image/webp" />
                  <img src="/assets/nav/arrow_down.png" alt="arrow down image" />
                </picture>
              </div>
              {isChallengeOpen && (
                <div className="absolute top-[90px] bg-white shadow-lg p-4">
                  <div>some</div>
                </div>
              )}
            </nav>
            <Link href="/work" className="pl-4 pr-[52px] flex items-center">
              <div className="text-white md:text-base lg:text-lg font-semibold whitespace-nowrap">작업물</div>
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-2 sm:gap-[30px]">
          <div className="relative">
            <picture onClick={toggleNotification} className="cursor-pointer relative">
              <source srcSet="/assets/nav/bell.webp" type="image/webp" />
              <img alt="alarm bell" src="/assets/nav/bell.png" className="w-6 h-6" />
              {/* 알림 표시 빨간색 점 */}
              <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-[#111111]" />
            </picture>
            {isNotificationOpen && (
              <div className="absolute top-[35px] right-0 bg-white shadow-lg p-4 rounded-lg w-[200px]">
                <div className="text-gray-900 font-medium">읽지않은 알림 (1)</div>
                <Link href="/notifications" className="text-purple-500 text-sm text-right block mt-2">모두 읽기</Link>
              </div>
            )}
          </div>
          <div className="flex items-center">
            <Link href="/auth/register" className="text-white text-base font-semibold">
              <span className="text-nowrap">로그인 / </span>
              <span>회원가입</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
