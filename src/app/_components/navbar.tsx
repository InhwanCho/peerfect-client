'use client';

import Link from "next/link";
import { useState } from "react";
import ArrowIcon from "./icons/arrow-icon";

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
    <header className="w-full bg-[#111111] flex justify-center select-none sticky top-0 z-10">
      <div className="lg:w-[90%] xl:w-[75%] w-full px-8 h-[90px] flex justify-between items-center ">
        <div className="justify-start items-center gap-12 sm:gap-[86px] flex">
          <Link href={'/'} className="w-[120px] sm:w-[170px] h-[55px] flex items-center">
            <picture>
              <source srcSet="/assets/nav/main_logo.webp" type="image/webp" />
              <img src="/assets/nav/main_logo.png" alt="logo image" />
            </picture>
          </Link>
          <div className="lg:flex hidden items-center gap-3">
            <nav className="flex items-center">
              <div className="pr-3 flex items-center cursor-pointer relative" onClick={toggleChallengeDropdown}>
                <div className="text-white md:text-base lg:text-lg font-semibold pr-4 whitespace-nowrap">챌린지</div>
                <ArrowIcon isOpen={isChallengeOpen} color="#FFFFFF" />
              </div>
              {isChallengeOpen && (
                <div className="absolute top-[90px] bg-white shadow-lg p-4">
                  <div>챌린지 나중에 추가</div>
                </div>
              )}
            </nav>
            <Link href="/work" className="pl-4 pr-8 sm:pr-[52px] flex items-center">
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
              <div className="absolute top-[76px] left-1 right-0">
                {/* 삼각형 화살표 */}
                <div className="absolute -top-2 w-4 h-4 bg-white transform rotate-45 z-10"></div>

                {/* 알림 박스 */}
                <div className="absolute bg-white w-[436px] -left-[170px] rounded-lg border shadow-lg">
                  <div className="p-4 flex justify-between items-center border-b">
                    <p className="text-gray-900 font-semibold">읽지 않은 알림 (1)</p>
                    <button className="text-purple-500 text-sm font-medium">모두 읽기</button>
                  </div>

                  {/* 알림 목록 */}
                  <div className="divide-y">
                    {[0, 0, 0].map((_, i) => (
                      <div key={i} className="flex items-center p-4 gap-4">
                        <div className="w-[76px] h-[76px] bg-gray-200 rounded-md"></div> {/* 이미지 placeholder */}
                        <div className="flex-1">
                          <p className="text-gray-900 text-sm font-medium">닉네임입력 님이 내 작업물에 피드백을 남겼습니다.</p>
                          <p className="text-gray-500 text-xs mt-1">피드백 내용 입력</p>
                          <p className="text-gray-400 text-xs mt-4">n분 전</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

          </div>
          <div className="flex items-center">
            <Link href="/auth" className="text-white text-base font-semibold hidden lg:inline-flex">
              <span className="text-nowrap">로그인 / 회원가입</span>              
            </Link>
          </div>
          <picture className="cursor-pointer lg:hidden">
            <source srcSet="/assets/nav/menu_more.webp" type="image/webp" />
            <img alt="see more button" src="/assets/nav/menu_more.png" className="w-6 h-6" />            
          </picture>
        </div>
      </div>
    </header>
  );
}
