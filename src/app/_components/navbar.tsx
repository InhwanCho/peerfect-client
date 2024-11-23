/* eslint-disable @next/next/no-img-element */
'use client';

import Link from "next/link";
import { useState } from "react";
import MenuMoreIcon from "./icons/menu-more-icon";
import { MainLogo } from "./icons/logo-icon";
import SvgArrowDown from "./icons/M/ArrowDown";
import SvgBell from "./icons/M/Bell";
import SvgX from "./icons/M/X";

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
      <header className="w-full bg-black flex justify-center select-none sticky top-0 z-10">
        <div className="lg:w-[90%] xl:w-[75%] w-full px-8 h-[90px] flex justify-between items-center">
          <div className="justify-start items-center gap-12 sm:gap-[86px] flex">
            <MainLogo />
            <div className="lg:flex hidden items-center gap-3">
              <nav className="flex items-center">
                <div
                  className="pr-3 flex items-center cursor-pointer relative"
                  onClick={toggleChallengeDropdown}
                >
                  <div className="text-white md:text-base lg:text-lg font-semibold pr-4 whitespace-nowrap">
                    챌린지
                  </div>
                  <SvgArrowDown isOpen={isChallengeOpen} filledColor="#FFFFFF" props={{ width: 22, height: 22 }}/>
                </div>
                {isChallengeOpen && (
                  <div className="absolute top-[90px] bg-background-primary shadow-card p-4">
                    {/* 수정 이유: 배경 색상 `background.primary`와 그림자 `card` 스타일 적용 */}
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
            <div className="relative flex items-center">
              <button onClick={toggleNotification} className="cursor-pointer relative">
                <SvgBell filledColor="#FFFFFF" props={{ width: 24, height: 24 }} />
              </button>
              {isNotificationOpen && (
                <div className="absolute top-[76px] left-1 right-0">
                  <div className="absolute -top-2 w-4 h-4 bg-white transform rotate-45 z-10"></div>
                  <div className="absolute bg-background-primary w-[436px] -left-[170px] rounded-lg border shadow-card">
                    <div className="p-4 flex justify-between items-center border-b border-gray-300">
                      <p className="text-gray-900 font-semibold">읽지 않은 알림 (1)</p>
                      <button className="text-main-primary text-sm font-medium">모두 읽기</button>
                    </div>
                    <div className="divide-y">
                      {[0, 0, 0].map((_, i) => (
                        <div key={isChallengeOpen ? 'open' : 'closed'} className="flex items-center p-4 gap-4">
                          <div className="w-[76px] h-[76px] bg-gray-200 rounded-md"></div>
                          <div className="flex-1">
                            <p className="text-gray-900 text-sm font-medium">
                              닉네임입력 님이 내 작업물에 피드백을 남겼습니다.
                            </p>
                            <p className="text-text-secondary text-xs mt-1">피드백 내용 입력</p>
                            <p className="text-text-tertiary text-xs mt-4">n분 전</p>
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
        className={`fixed inset-0 z-10 ${isDrawerOpen ? "pointer-events-auto" : "pointer-events-none"}`}
      >
        <div
          className={`fixed inset-0 bg-black/30 backdrop-blur-[6px] transition-opacity duration-[400ms] ${isDrawerOpen ? "opacity-100" : "opacity-0"}`}
          onClick={closeDrawer}
        />
        <div
          className={`fixed top-0 right-0 h-full border-l border-gray-700 bg-black w-[330px] z-20 transform transition-transform duration-[400ms] ${isDrawerOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="flex justify-end p-9">
            <button onClick={closeDrawer}>
              <SvgX filledColor="#FFFFFF" props={{ width: 22, height: 22 }}/>
            </button>
          </div>
          <nav className="flex flex-col items-start px-8 pt-2 text-white">
            <div className="w-full flex items-start pb-6 border-b border-gray-700">
              <div className="text-main-primary font-semibold">디자이너</div>
              <span className="pl-2.5 font-medium">(이름)님</span>
            </div>
            <div className="w-full flex flex-col space-y-6 pt-6">
              <div className="w-full relative">
                <button
                  className="w-full flex justify-between items-center text-lg font-medium cursor-pointer"
                  onClick={toggleChallengeDropdown}
                >
                  챌린지
                  <SvgArrowDown isOpen={isChallengeOpen} filledColor="#FFFFFF" props={{ width: 24, height: 24 }} />
                </button>
                {isChallengeOpen && (
                  <ul className="mt-2 bg-gray-900 rounded-md shadow-card w-full py-2">
                    <li className="px-4 py-2 hover:bg-gray-800 cursor-pointer">챌린지 1 임시 디자인</li>
                    <li className="px-4 py-2 hover:bg-gray-800 cursor-pointer">챌린지 2</li>
                  </ul>
                )}
              </div>
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
