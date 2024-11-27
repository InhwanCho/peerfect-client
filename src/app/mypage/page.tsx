'use client';

import { useState } from "react";
import { NicknameInput } from "../_components/common/nickname-input";
import CustomButton from "../_components/common/custom-button";
import CustomToggle from "../_components/common/custom-toggle";
import { MenuState } from "../types/types";

export default function Mypage() {
  const [nickname, setNickname] = useState('뽀');
  const [error, setError] = useState("");
  const [selectedMenu, setSelectedMenu] = useState<MenuState>(MenuState.Profile);
  const [marketingEnabled, setMarketingEnabled] = useState(false);
  const [feedbackEnabled, setFeedbackEnabled] = useState(false);

  const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const isValid = /^[a-zA-Z가-힣0-9]*$/.test(value);

    if (!isValid) {
      setError("특수문자는 사용할 수 없습니다.");
    } else {
      setError("");
    }

    setNickname(value);
  };

  const isNicknameValid =
    nickname.trim().length >= 1 &&
    nickname.trim().length <= 12 &&
    !error;

  return (
    <main className="min-h-[calc(100vh-90px)] bg-gray-50">
      <div className="mx-auto px-20 xl:px-0 xl:w-[70%]">
        <h1 className="text-h2 py-[100px]">마이페이지</h1>
        <section className="min-h-[calc(100vh-250px-90px)]">
          <div className="mx-auto w-full lg:flex">
            {/* 왼쪽 메뉴 */}
            <aside className="w-[220px] h-[300px] bg-background-primary card-container rounded-2xl pl-8 pt-[60px] mr-[110px] transition-colors">
              <ul className="space-y-[48px] text-subtitle2">
                <li
                  className={`cursor-pointer ${selectedMenu === MenuState.Profile ? 'text-main-primary' : 'text-gray-400'}`}
                  onClick={() => setSelectedMenu(MenuState.Profile)}
                >
                  프로필 설정
                </li>
                <li
                  className={`cursor-pointer ${selectedMenu === MenuState.MyChallenge ? 'text-main-primary' : 'text-gray-400'}`}
                  onClick={() => setSelectedMenu(MenuState.MyChallenge)}
                >
                  나의 챌린지 과정
                </li>
                <li
                  className={`cursor-pointer ${selectedMenu === MenuState.Notification ? 'text-main-primary' : 'text-gray-400'}`}
                  onClick={() => setSelectedMenu(MenuState.Notification)}
                >
                  알림 설정
                </li>
              </ul>
            </aside>

            {/* 섹션 내용 */}
            {selectedMenu === MenuState.Profile && (
              <section className="w-full flex-1 bg-background-primary card-container rounded-2xl px-16 pb-20">
                <h4 className="text-h4 pt-12">프로필 정보</h4>
                <div className="flex w-full pt-8">
                  <div className="flex flex-col">
                    <div className="size-[130px] bg-gray-200 rounded-full"></div>
                    <button className="mt-6 p-2.5 rounded-full text-main-purple-1 border border-[#AC6BFF] text-buttonS">
                      사진업로드
                    </button>
                  </div>
                  <div className="flex flex-col w-full h-[196px] pl-[100px] justify-center gap-y-12">
                    <div className="flex">
                      <p className="w-[100px] text-gray-600 text-buttonM">이름</p>
                      <span className="text-text-primary font-medium">김뫄뫄</span>
                    </div>
                    <div className="flex">
                      <p className="w-[100px] text-gray-600 text-buttonM">이메일</p>
                      <span className="text-text-primary font-medium">asdfaf@naver.com</span>
                    </div>
                  </div>
                </div>

                {/* 닉네임 입력 */}
                <div className="py-20">
                  <NicknameInput
                    label
                    nicknameValue={nickname}
                    onChange={handleNicknameChange}
                    isNicknameValid={isNicknameValid}
                    error={error}
                  />
                </div>
                <div className="flex justify-center items-center">
                  <CustomButton className="" color="gray" size="small">
                    저장하기
                  </CustomButton>
                </div>
              </section>
            )}

            {selectedMenu === MenuState.MyChallenge && (
              <section className="w-full flex-1 bg-background-primary card-container rounded-2xl px-16 pb-20">
                <h4 className="text-h4 pt-12">나의 챌린지 과정</h4>
                {/* 나의 챌린지 과정 내용 추가 */}
              </section>
            )}

            {selectedMenu === MenuState.Notification && (
              <section className="w-full flex-1 bg-background-primary card-container rounded-2xl px-16 pb-20">
                <h4 className="text-h4 pt-12">알림설정</h4>
                <div className="pt-10 space-y-8">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-gray-900 text-base font-medium">마케팅</p>
                      <p className="text-gray-500 text-sm">
                        새로운 챌린지 및 피어펙트의 소식을 전해드려요
                      </p>
                    </div>
                    <CustomToggle
                      variant="switch"
                      isActive={marketingEnabled}
                      onToggle={() => setMarketingEnabled(!marketingEnabled)}
                    />
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-gray-900 text-base font-medium">댓글 및 피드백 알림</p>
                      <p className="text-gray-500 text-sm">
                        작업물에 대한 피드백 및 댓글을 빠르게 확인하실 수 있어요
                      </p>
                    </div>
                    <CustomToggle
                      variant="switch"
                      isActive={feedbackEnabled}
                      onToggle={() => setFeedbackEnabled(!feedbackEnabled)}
                    />
                  </div>
                </div>
                <div className="flex justify-center items-center mt-20">
                  <CustomButton className="" color="gray" size="small">
                    저장하기
                  </CustomButton>
                </div>
              </section>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
