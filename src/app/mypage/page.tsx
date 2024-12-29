'use client';

import { useState } from 'react';
import { NicknameInput } from '../_components/common/nickname-input';
import CustomButton from '../_components/common/custom-button';
import CustomToggle from '../_components/common/custom-toggle';
import { MenuState } from '../types/types';
import MyChallengeRoadMap from './_components/my-challenge-loadmap';

export default function Mypage() {
  const [nickname, setNickname] = useState('뽀');
  const [error, setError] = useState('');
  const [selectedMenu, setSelectedMenu] = useState<MenuState>(
    MenuState.Profile
  );
  const [marketingEnabled, setMarketingEnabled] = useState(false);
  const [feedbackEnabled, setFeedbackEnabled] = useState(false);

  const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const isValid = /^[a-zA-Z가-힣0-9]*$/.test(value);

    if (!isValid) {
      setError('특수문자는 사용할 수 없습니다.');
    } else {
      setError('');
    }

    setNickname(value);
  };

  const isNicknameValid =
    nickname.trim().length >= 1 && nickname.trim().length <= 12 && !error;

  return (
    <main className="min-h-[calc(100vh-90px)] bg-gray-50">
      <div className="mx-auto px-20 xl:w-[70%] xl:px-0">
        <h1 className="py-[100px] text-h2">마이페이지</h1>
        <section className="min-h-[calc(100vh-250px-90px)]">
          <div className="mx-auto w-full space-y-12 pb-20 lg:flex lg:space-y-0">
            {/* 왼쪽 메뉴 */}
            <aside className="card-container mr-[110px] h-[300px] w-full min-w-[220px] rounded-2xl bg-background-primary pl-8 pt-[60px] transition-colors lg:w-fit">
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
                  나의 챌린지 로드맵
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
              <section className="card-container w-full flex-1 rounded-2xl border bg-background-primary px-16 pb-20">
                <h4 className="pt-12 text-h4">프로필 정보</h4>
                <div className="flex w-full pt-8">
                  <div className="flex flex-col items-center justify-center">
                    <div className="size-[130px] rounded-full bg-gray-200"></div>
                    <button
                      className="mt-6 w-[100px] rounded-full border border-[#AC6BFF] p-2.5 text-buttonS text-main-purple-1"
                      aria-label="upload picture"
                    >
                      사진업로드
                    </button>
                  </div>
                  <div className="flex h-[196px] w-full flex-col justify-center gap-y-12 pl-[100px]">
                    <div className="flex">
                      <p className="w-[100px] text-buttonM text-gray-600">
                        이름
                      </p>
                      <span className="font-medium text-text-primary">
                        김뫄뫄
                      </span>
                    </div>
                    <div className="flex">
                      <p className="w-[100px] text-buttonM text-gray-600">
                        이메일
                      </p>
                      <span className="font-medium text-text-primary">
                        asdfaf@naver.com
                      </span>
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
                <div className="flex items-center justify-center">
                  <CustomButton className="" color="gray" size="small">
                    저장하기
                  </CustomButton>
                </div>
              </section>
            )}

            {selectedMenu === MenuState.MyChallenge && <MyChallengeRoadMap />}

            {selectedMenu === MenuState.Notification && (
              <section className="card-container w-full flex-1 rounded-2xl bg-background-primary px-16 pb-20">
                <h4 className="pt-12 text-h4">알림설정</h4>
                <div className="space-y-8 pt-10">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-base font-medium text-gray-900">
                        마케팅
                      </p>
                      <p className="text-sm text-gray-500">
                        새로운 챌린지 및 피어펙트의 소식을 전해드려요
                      </p>
                    </div>
                    <CustomToggle
                      variant="switch"
                      isActive={marketingEnabled}
                      onToggle={() => setMarketingEnabled(!marketingEnabled)}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-base font-medium text-gray-900">
                        댓글 및 피드백 알림
                      </p>
                      <p className="text-sm text-gray-500">
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
                <div className="mt-20 flex items-center justify-center">
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
