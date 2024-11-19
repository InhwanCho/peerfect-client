import { useState, useEffect } from "react";

import { TermsModal } from "@/app/_components/common/modals/terms-modal";
import CheckIcon from "@/app/_components/icons/check-icon";
import TermsAgreement from "./terms-agrrment";

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
      <h2 className="text-2xl font-semibold text-black mb-6">회원가입</h2>
      <div className="w-full max-w-md mx-auto space-y-6">
        {/* 이메일 인증된 표시 */}
        <div className="text-left">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            이메일
          </label>
          <div className="flex items-center border border-[#8530F1] rounded-lg px-4 py-3 h-[70px] relative">
            <label className="absolute left-4 top-3 text-gray-500 text-xs">
              이메일
            </label>
            <p className="pt-6 bg-white text-gray-800">{verifiedEmail}</p>
            <div className="absolute right-4">
              <CheckIcon checked={true} />
            </div>
          </div>
          <p className="text-[#8530F1] text-xs mt-1 ml-1">
            인증된 이메일입니다.
          </p>
        </div>

        {/* 닉네임 입력 및 중복 확인 */}
        <div>
          <div className="flex items-center space-x-2 mt-1 relative">
            <div className="w-full relative">
              <input
                type="text"
                placeholder="닉네임을 입력해주세요."
                maxLength={12}
                value={nickname}
                onChange={handleNicknameChange}
                className={`w-full border rounded-lg p-3 text-gray-800 h-[70px] focus:outline-none placeholder:text-sm ${
                  error
                    ? "border-red-500"
                    : isNicknameValid
                      ? "border-[#8530F1]"
                      : "border-gray-300"
                }`}
              />
              <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xs">
                {nickname.length > 0 ? (
                  <span className="text-black">{nickname.length}</span>
                ) : (
                  "0"
                )}
                /12
              </span>
            </div>
            <button
              type="button"
              disabled={!isNicknameValid}
              className={`rounded-lg font-medium h-[70px] w-[120px] text-sm ${
                isNicknameValid
                  ? "bg-[#8530F1] text-white"
                  : "bg-gray-200 text-gray-500 cursor-not-allowed"
              }`}
            >
              중복확인
            </button>
          </div>
          {error ? (
            <p className="text-xs text-left text-red-500 mt-1 ml-1">{error}</p>
          ) : (
            <p className="text-xs text-left text-gray-500 mt-1 ml-1">
              공백 및 특수문자를 제외한 영문, 한글만 사용 가능합니다.
            </p>
          )}
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
      <button
        className={`w-full h-[70px] ${
          isFormValid
            ? "bg-[#8530F1] text-white"
            : "bg-gray-200 text-gray-500 cursor-not-allowed"
        } rounded-lg py-3 font-medium mt-4 text-base sm:text-lg`}
        disabled={!isFormValid}
        onClick={() => console.log("회원가입")}
      >
        회원가입
      </button>

      {/* 모달 창 */}
      {isModalOpen && <TermsModal onClose={closeModal} content={modalContent} />}
    </>
  );
}
