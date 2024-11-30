import { useState, useEffect } from 'react';

import { TermsModal } from '@/app/_components/common/modals/terms-modal';
import CheckIcon from '@/app/_components/icons/check-icon';
import TermsAgreement from './terms-agrrment';
import CustomButton from '@/app/_components/common/custom-button';
import { NicknameInput } from '@/app/_components/common/nickname-input';

interface SignupFormProps {
  verifiedEmail: string;
}

export default function EmailSignupForm({ verifiedEmail }: SignupFormProps) {
  const [nickname, setNickname] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<'required' | 'optional'>(
    'required'
  );
  const [agreements, setAgreements] = useState({
    all: false,
    required: false,
    optional: false,
  });

  // 약관 동의 상태 관리
  useEffect(() => {
    if (agreements.required && agreements.optional) {
      setAgreements((prev) => ({ ...prev, all: true }));
    } else {
      setAgreements((prev) => ({ ...prev, all: false }));
    }
  }, [agreements.required, agreements.optional]);

  const openModal = (content: 'required' | 'optional') => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const handleAgreeAll = () => {
    const newAllValue = !agreements.all;
    setAgreements({
      all: newAllValue,
      required: newAllValue,
      optional: newAllValue,
    });
  };

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

  const isFormValid = isNicknameValid && agreements.required;

  return (
    <>
      <h4 className="mb-6 text-xl font-semibold text-text-primary lg:text-h4">
        회원가입
      </h4>
      <div className="mx-auto w-full max-w-md space-y-6">
        {/* 이메일 인증된 표시 */}
        <div>
          <div className="relative flex h-[70px] items-center rounded-2xl border border-main-primary px-5">
            <label className="absolute left-5 top-3 text-sm text-text-secondary">
              이메일
            </label>
            <p className="bg-background-primary pt-6 text-text-primary">
              {verifiedEmail}
            </p>
            <div className="absolute right-5">
              <CheckIcon checked={true} />
            </div>
          </div>
          <p className="ml-1 mt-1 text-sm text-main-primary">
            인증된 이메일입니다.
          </p>
        </div>
        {/* 닉네임 입력 및 중복 확인 */}
        <div>
          <div className="relative mt-1 flex items-center space-x-2">
            <NicknameInput
              nicknameValue={nickname}
              onChange={handleNicknameChange}
              isNicknameValid={isNicknameValid}
              error={error}
            />
            <CustomButton
              type="button"
              size="xs"
              color={isNicknameValid ? 'purple' : 'gray'}
            >
              중복확인
            </CustomButton>
          </div>
        </div>

        {/* 약관 동의 */}
        <TermsAgreement
          className="pt-6"
          agreements={agreements}
          setAgreements={setAgreements}
          openModal={openModal}
          handleAgreeAll={handleAgreeAll}
        />
      </div>

      {/* 회원가입 버튼 */}
      <CustomButton
        disabled={!isFormValid}
        onClick={() => console.log('회원가입')}
        color={isFormValid ? 'purple' : 'gray'}
      >
        회원가입
      </CustomButton>

      {/* 모달 창 */}
      {isModalOpen && (
        <TermsModal onClose={closeModal} content={modalContent} />
      )}
    </>
  );
}
