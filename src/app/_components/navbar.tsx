'use client';

import Link from "next/link";
import { useState } from "react";
import ArrowIcon from "./icons/arrow-icon";
import XIcon from "./icons/x-icon";
import MenuMoreIcon from "./icons/menu-more-icon";

export default function Navbar() {
  const [isChallengeOpen, setIsChallengeOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleChallengeDropdown = () => {
    setIsChallengeOpen(!isChallengeOpen);
  };

  const toggleNotification = () => {
    setIsNotificationOpen(!isNotificationOpen);
  };

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <>
      <header className="w-full bg-[#111111] flex justify-center select-none sticky top-0 z-10">
        <div className="lg:w-[90%] xl:w-[75%] w-full px-8 h-[90px] flex justify-between items-center">
          <div className="justify-start items-center gap-12 sm:gap-[86px] flex">
            <Link href="/" className="w-[120px] sm:w-[170px] h-[55px] flex items-center">
              <picture>
                <source srcSet="/assets/nav/main_logo.webp" type="image/webp" />
                <img src="/assets/nav/main_logo.png" alt="logo image" />
              </picture>
            </Link>
            <div className="lg:flex hidden items-center gap-3">
              <nav className="flex items-center">
                <div
                  className="pr-3 flex items-center cursor-pointer relative"
                  onClick={toggleChallengeDropdown}
                >
                  <div className="text-white md:text-base lg:text-lg font-semibold pr-4 whitespace-nowrap">
                    챌린지
                  </div>
                  <ArrowIcon isOpen={isChallengeOpen} color="#FFFFFF" />
                </div>
                {isChallengeOpen && (
                  <div className="absolute top-[90px] bg-white shadow-lg p-4">
                    <div>챌린지 나중에 추가</div>
                  </div>
                )}
              </nav>
              <Link href="/work" className="pl-4 pr-8 sm:pr-[52px] flex items-center">
                <div className="text-white md:text-base lg:text-lg font-semibold whitespace-nowrap">
                  작업물
                </div>
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-2 sm:gap-[30px]">
            <div className="relative">
              <picture onClick={toggleNotification} className="cursor-pointer relative">
                <source srcSet="/assets/nav/bell.webp" type="image/webp" />
                <img alt="alarm bell" src="/assets/nav/bell.png" className="w-6 h-6" />
                <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-[#111111]" />
              </picture>
              {isNotificationOpen && (
                <div className="absolute top-[76px] left-1 right-0">
                  <div className="absolute -top-2 w-4 h-4 bg-white transform rotate-45 z-10"></div>
                  <div className="absolute bg-white w-[436px] -left-[170px] rounded-lg border shadow-lg">
                    <div className="p-4 flex justify-between items-center border-b">
                      <p className="text-gray-900 font-semibold">읽지 않은 알림 (1)</p>
                      <button className="text-[#8530F1] text-sm font-medium">모두 읽기</button>
                    </div>
                    <div className="divide-y">
                      {[0, 0, 0].map((_, i) => (
                        <div key={i} className="flex items-center p-4 gap-4">
                          <div className="w-[76px] h-[76px] bg-gray-200 rounded-md"></div>
                          <div className="flex-1">
                            <p className="text-gray-900 text-sm font-medium">
                              닉네임입력 님이 내 작업물에 피드백을 남겼습니다.
                            </p>
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
            <button className="cursor-pointer lg:hidden" onClick={toggleDrawer}>
              <MenuMoreIcon />
            </button>
          </div>
        </div>
      </header>

      {/* 드로어 메뉴 */}
      <div
        className={`fixed inset-0 z-10 ${isDrawerOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        {/* 배경 블러 처리 */}
        <div
          className={`fixed inset-0 bg-black/30 backdrop-blur-[6px] transition-opacity duration-500 ${isDrawerOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={closeDrawer}
        />

        {/* 드로어 메뉴 */}
        <div
          className={`fixed top-0 right-0 h-full border-l border-[#333] bg-[#111111] w-[330px] z-20 transform transition-transform duration-500 ${isDrawerOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-end p-8">
            <button onClick={closeDrawer}>
              <XIcon color="white" />
            </button>
          </div>
          <nav className="flex flex-col items-start px-8 pt-2 text-white">
            {/* 상단 디자이너 정보 */}
            <div className="w-full flex items-start pb-6 border-b border-gray-700">
              <div className="text-[#8530F1] font-semibold">디자이너</div>
              <span className="pl-2.5 font-medium">(이름)님</span>
            </div>

            {/* 메뉴 항목 */}
            <div className="w-full flex flex-col space-y-6 pt-6">
              {/* 챌린지 드롭다운 */}
              <div className="w-full relative">
                <button
                  className="w-full flex justify-between items-center text-lg font-medium cursor-pointer"
                  onClick={toggleChallengeDropdown}
                >
                  챌린지
                  <ArrowIcon isOpen={isChallengeOpen} color="#FFFFFF" />
                </button>
                {isChallengeOpen && (
                  <ul className="mt-2 bg-[#1A1A1A] rounded-md shadow-lg w-full py-2">
                    <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">챌린지 1 임시 디자인</li>
                    <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">챌린지 2</li>
                  </ul>
                )}
              </div>
              {/* 작업물 링크 */}
              <Link
                href="/work"
                onClick={closeDrawer}
                className="text-lg font-medium w-full"
              >
                작업물
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
