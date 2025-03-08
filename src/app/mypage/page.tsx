'use client';

import { ChangeEvent, useState, useRef } from 'react';
import { NicknameInput } from '../_components/common/nickname-input';
import CustomButton from '../_components/common/custom-button';
import CustomToggle from '../_components/common/custom-toggle';
import { MenuState } from '../types/types';
import MyChallengeRoadMap from './_components/my-challenge-loadmap';
import { deleteMember } from '@/api/delete-member';
import { useUserStore } from '@/store/use-user-store';
import { fetchMemberInfo } from '@/hooks/use-member-info';
import { uploadUserImage } from '@/api/upload-user-image';

export default function Mypage() {
  const [error, setError] = useState('');
  const [selectedMenu, setSelectedMenu] = useState<MenuState>(
    MenuState.MyChallenge
  );
  const [marketingEnabled, setMarketingEnabled] = useState(false);
  const [feedbackEnabled, setFeedbackEnabled] = useState(false);
  const { memberId, memberImg, memberEmail, nickName } = useUserStore();
  const [nickname, setNickname] = useState(nickName || '');
  const [uploadMessage, setUploadMessage] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

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

  const handleDelete = async () => {
    if (!memberId) return;
    if (window.confirm('정말로 회원 탈퇴를 진행하시겠습니까?')) {
      try {
        await deleteMember(memberId);
        alert('회원 탈퇴가 완료되었습니다.');
      } catch (error) {
        alert('회원 탈퇴 중 문제가 발생했습니다.');
      }
    }
  };

  const handleUserInfo = async () => {
    if (!memberId) return;
    const memberInfo = await fetchMemberInfo(memberId);
    console.log('memberInfo :', memberInfo);
  };

  // 버튼 클릭 시 숨겨진 file input 클릭 트리거
  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  // 파일 선택 시 단일 파일 업로드 (file와 memberId 전송)
  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      try {
        if (!memberId) throw new Error('회원 ID가 없습니다.');
        const data = await uploadUserImage(file, memberId);
        setUploadMessage(data.message);
      } catch (error) {
        console.error(error);
        setUploadMessage('업로드 중 에러 발생');
      }
    }
  };

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
                  className={`cursor-pointer ${
                    selectedMenu === MenuState.MyChallenge
                      ? 'text-main-primary'
                      : 'text-gray-400'
                  }`}
                  onClick={() => setSelectedMenu(MenuState.MyChallenge)}
                >
                  나의 챌린지 로드맵
                </li>
                <li
                  className={`cursor-pointer ${
                    selectedMenu === MenuState.Profile
                      ? 'text-main-primary'
                      : 'text-gray-400'
                  }`}
                  onClick={() => setSelectedMenu(MenuState.Profile)}
                >
                  프로필 설정
                </li>
                <li
                  className={`cursor-pointer ${
                    selectedMenu === MenuState.Notification
                      ? 'text-main-primary'
                      : 'text-gray-400'
                  }`}
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
                    {memberImg ? (
                      <img
                        src={memberImg}
                        alt={`${nickName} profile`}
                        className="min-h-[130px] min-w-[130px] rounded-full object-cover"
                      />
                    ) : (
                      <div className="size-[130px] rounded-full bg-gray-200"></div>
                    )}

                    {/* 숨김 처리된 파일 업로드 input */}
                    <input
                      type="file"
                      accept="image/*"
                      id="upload-user-image"
                      className="hidden"
                      ref={fileInputRef}
                      onChange={handleFileChange}
                    />
                    {/* 버튼 클릭 시 파일 선택창 열림 */}
                    <button
                      type="button"
                      onClick={handleButtonClick}
                      className="mt-6 w-[100px] rounded-full border border-[#AC6BFF] p-2.5 text-buttonS text-main-purple-1"
                      aria-label="upload picture"
                    >
                      사진업로드
                    </button>
                    {uploadMessage && (
                      <p className="mt-4 text-sm text-green-600">
                        {uploadMessage}
                      </p>
                    )}
                  </div>
                  <div className="flex h-[196px] w-full flex-col justify-center gap-y-12 pl-[100px]">
                    <div className="flex">
                      <p className="w-[100px] text-buttonM text-gray-600">
                        이름
                      </p>
                      <span className="font-medium text-text-primary">
                        {nickName || '김뫄뫄'}
                      </span>
                    </div>
                    <div className="flex">
                      <p className="w-[100px] text-buttonM text-gray-600">
                        이메일
                      </p>
                      <span className="font-medium text-text-primary">
                        {memberEmail}
                      </span>
                    </div>
                  </div>
                </div>
                {/* 닉네임 입력 */}
                <div className="py-20">
                  <NicknameInput
                    showSuccess
                    label
                    nicknameValue={nickname!}
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
                <div className="mt-20 flex gap-x-10">
                  <button className="bg-red-50" onClick={handleDelete}>
                    임시 - 회원 탈퇴 버튼
                  </button>
                  <button onClick={handleUserInfo}>임시 - api 호출</button>
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
