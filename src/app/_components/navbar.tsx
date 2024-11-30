'use client';

import Link from 'next/link';
import { useState } from 'react';
import MenuMoreIcon from './icons/menu-more-icon';
import SvgArrowDown from './icons/M/ArrowDown';
import SvgBell from './icons/M/Bell';
import SvgX from './icons/M/X';

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
      <header className="sticky top-0 z-10 flex w-full select-none justify-center bg-black">
        <div className="flex h-[90px] w-full items-center justify-between px-8 lg:w-[90%] xl:w-3/4">
          <div className="flex items-center justify-start gap-12 sm:gap-[86px]">
            <Link className="h-[55px] w-[177px]" href="/">
              <img src="/assets/nav/logo-with-text.png" alt="logo" />
            </Link>
            <div className="hidden items-center gap-3 lg:flex">
              <nav className="flex items-center">
                <div
                  className="relative flex cursor-pointer items-center pr-3"
                  onClick={toggleChallengeDropdown}
                >
                  <div className="whitespace-nowrap pr-4 font-semibold text-white md:text-base lg:text-subtitle2">
                    <Link href={'/challenge/002'}>챌린지</Link>
                  </div>
                  <SvgArrowDown
                    isOpen={isChallengeOpen}
                    filledColor="#FFFFFF"
                    props={{ width: 22, height: 22 }}
                  />
                </div>
                {/* {isChallengeOpen && (
                  <div className="absolute top-[90px] bg-background-primary shadow-card p-4">                    
                    <div>챌린지 나중에 추가</div>
                  </div>
                )} */}
              </nav>
            </div>
          </div>
          <div className="flex items-center gap-2 sm:gap-[30px]">
            <div className="relative flex items-center">
              <button
                onClick={toggleNotification}
                className="relative cursor-pointer"
                aria-label="alert button"
              >
                <SvgBell
                  filledColor="#FFFFFF"
                  props={{ width: 24, height: 24 }}
                />
              </button>
              {isNotificationOpen && (
                <div className="absolute left-1 right-0 top-[76px]">
                  <div className="absolute -top-2 z-10 size-4 rotate-45 border-l border-t bg-white"></div>
                  <div className="absolute -left-[170px] w-[436px] rounded-lg border bg-background-primary shadow-card">
                    <div className="flex items-center justify-between border-b border-gray-300 p-4">
                      <p className="font-semibold text-gray-900">
                        읽지 않은 알림 (1)
                      </p>
                      <button
                        className="text-sm font-medium text-main-primary"
                        aria-label="read all contents button"
                      >
                        모두 읽기
                      </button>
                    </div>
                    <div className="divide-y">
                      {[0, 0, 0].map((_, i) => (
                        <div
                          key={isChallengeOpen ? 'open' + i : 'closed' + i}
                          className="flex items-center gap-4 p-4"
                        >
                          <div className="size-[76px] rounded-md bg-gray-200"></div>
                          <div className="flex-1">
                            <p className="text-sm font-medium text-gray-900">
                              닉네임입력 님이 내 작업물에 피드백을 남겼습니다.
                            </p>
                            <p className="mt-1 text-small text-text-secondary">
                              피드백 내용 입력
                            </p>
                            <p className="mt-4 text-small text-text-tertiary">
                              n분 전
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="flex items-center">
              <Link
                href="/auth"
                className="hidden text-base font-semibold text-white lg:inline-flex"
              >
                <span className="text-nowrap font-semibold md:text-base lg:text-subtitle2">
                  로그인 / 회원가입
                </span>
              </Link>
            </div>
            <button
              className="cursor-pointer lg:hidden"
              onClick={toggleDrawer}
              aria-label="see more button"
            >
              <MenuMoreIcon />
            </button>
          </div>
        </div>
      </header>

      {/* 드로어 메뉴 */}
      <div
        className={`fixed z-50 ${
          isDrawerOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        {/* 백그라운드 오버레이 */}
        <div
          className={`fixed inset-0 bg-black/30 backdrop-blur-[6px] transition-opacity duration-[400ms] ${
            isDrawerOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={closeDrawer}
        />
        {/* 드로어 메뉴 */}
        <div
          className={`fixed right-0 top-0 z-20 h-full w-[330px] border-l border-gray-700 bg-black transition-transform duration-[400ms] ${
            isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex justify-end p-9">
            <button onClick={closeDrawer} aria-label="close button">
              <SvgX filledColor="#FFFFFF" props={{ width: 22, height: 22 }} />
            </button>
          </div>
          <nav className="flex flex-col items-start px-8 pt-2 text-white">
            <div className="flex w-full items-start border-b border-gray-700 pb-6">
              <div className="font-semibold text-main-primary">디자이너</div>
              <span className="pl-2.5 font-medium">(이름)님</span>
            </div>
            <div className="flex w-full flex-col space-y-6 pt-6">
              <div className="relative w-full">
                <button
                  className="flex w-full cursor-pointer items-center justify-between text-lg font-medium"
                  onClick={toggleChallengeDropdown}
                >
                  챌린지
                  <SvgArrowDown
                    isOpen={isChallengeOpen}
                    filledColor="#FFFFFF"
                    props={{ width: 24, height: 24 }}
                  />
                </button>
                {isChallengeOpen && (
                  <ul className="mt-2 w-full rounded-md bg-gray-900 py-2 shadow-card">
                    <li className="cursor-pointer px-4 py-2 hover:bg-gray-800">
                      챌린지 1 임시 디자인
                    </li>
                    <li className="cursor-pointer px-4 py-2 hover:bg-gray-800">
                      챌린지 2
                    </li>
                  </ul>
                )}
              </div>
              <Link
                href="/work"
                onClick={closeDrawer}
                className="w-full text-lg font-medium"
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
