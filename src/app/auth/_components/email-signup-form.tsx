import { useState, useEffect } from "react";

import { TermsModal } from "@/app/_components/common/modals/terms-modal";
import CheckIcon from "@/app/_components/icons/check-icon";
import TermsAgreement from "./terms-agrrment";
import CustomButton from "@/app/_components/common/custom-button";
import { NicknameInput } from "@/app/_components/common/nickname-input";

interface SignupFormProps {
  verifiedEmail: string;
}

export default function EmailSignupForm({ verifiedEmail }: SignupFormProps) {
  const [nickname, setNickname] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<"required" | "optional">(
    "required"
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

  const openModal = (content: "required" | "optional") => {
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

  const isFormValid = isNicknameValid && agreements.required;

  return (
    <>
      <h4 className="text-xl lg:text-h4 font-semibold text-text-primary mb-6">회원가입</h4>
      <div className="w-full max-w-md mx-auto space-y-6">
        {/* 이메일 인증된 표시 */}
        <div>
          <div className="flex items-center border border-main-primary rounded-2xl px-5 h-[70px] relative">
            <label className="absolute left-5 top-3 text-text-secondary text-xs">
              이메일
            </label>
            <p className="pt-6 bg-background-primary text-text-primary">{verifiedEmail}</p>
            <div className="absolute right-5">
              <CheckIcon checked={true} />
            </div>
          </div>
          <p className="text-main-primary text-sm mt-1 ml-1">
            인증된 이메일입니다.
          </p>
        </div>
        {/* 닉네임 입력 및 중복 확인 */}
        <div>
          <div className="flex items-center space-x-2 mt-1 relative">
            <NicknameInput
              nicknameValue={nickname}
              onChange={handleNicknameChange}
              isNicknameValid={isNicknameValid}
              error={error}
            />
            <CustomButton type="button" size="xs" color={isNicknameValid ? "purple" : "gray"}>
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
      <CustomButton disabled={!isFormValid} onClick={() => console.log("회원가입")}
        color={isFormValid ? "purple" : "gray"}
      >
        회원가입
      </CustomButton>

      {/* 모달 창 */}
      {isModalOpen && <TermsModal onClose={closeModal} content={modalContent} />}
    </>
  );
}
