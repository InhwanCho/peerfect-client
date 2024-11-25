'use client';

import { useState } from "react";
import { NicknameInput } from "../_components/common/nickname-input";
import CustomButton from "../_components/common/custom-button";
import CustomToggle from "../_components/common/custom-toggle";


export default function Mypage() {
  const [nickname, setNickname] = useState('뽀'); // 닉네임 상태
  const [error, setError] = useState(""); // 에러 메시지 상태
  const [selectedMenu, setSelectedMenu] = useState<'profile' | 'notification'>('profile'); // 메뉴 상태
  const [marketingEnabled, setMarketingEnabled] = useState(false); // 마케팅 토글 상태
  const [feedbackEnabled, setFeedbackEnabled] = useState(false); // 댓글 알림 토글 상태

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
    <main className="min-h-[calc(100vh-90px)]">
      <div className="bg-background-primary h-[250px]">
        <h1 className="mx-auto px-20 2xl:px-0 2xl:w-[60%] pt-[130px] pb-[70px] text-h2">마이페이지</h1>
      </div>
      <section className="bg-gray-50 min-h-[calc(100vh-250px-90px)]">
        <div className="mx-auto px-20 2xl:px-0 2xl:w-[60%] py-[80px] lg:flex">
          {/* 왼쪽 메뉴 */}
          <aside className="w-[220px] h-[252px] bg-background-primary card-container rounded-2xl pl-8 pt-[60px] mr-[110px]">
            <ul className="space-y-4 text-subtitle2">
              <li
                className={`cursor-pointer ${selectedMenu === 'profile' ? 'text-main-primary' : 'text-gray-400'}`}
                onClick={() => setSelectedMenu('profile')}
              >
                프로필 설정
              </li>
              <li
                className={`cursor-pointer ${selectedMenu === 'notification' ? 'text-main-primary' : 'text-gray-400'}`}
                onClick={() => setSelectedMenu('notification')}
              >
                알림 설정
              </li>
            </ul>
          </aside>

          {/* 섹션 내용 */}
          {selectedMenu === 'profile' && (
            <section className="w-full flex-1 bg-background-primary card-container rounded-2xl px-16 pb-20">
              <h4 className="text-h4 pt-12">프로필 정보</h4>
              <div className="flex w-full px-3 pt-8">
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
              <div className="pt-14">
                <NicknameInput
                  label
                  nicknameValue={nickname}
                  onChange={handleNicknameChange}
                  isNicknameValid={isNicknameValid}
                  error={error}
                />
              </div>
              <div className="flex justify-center items-center mt-20">
                <CustomButton className="" color="gray" size="small">
                  저장하기
                </CustomButton>
              </div>
            </section>
          )}

          {selectedMenu === 'notification' && (
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
    </main>
  );
}
