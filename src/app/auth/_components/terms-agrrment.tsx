// TermsAgreement.jsx
import React, { useEffect } from 'react';
import ArrowIcon from "@/app/_components/icons/arrow-icon";
import CheckIcon from "@/app/_components/icons/check-icon";
import CheckMarkIcon from "@/app/_components/icons/check-mark-icon";

interface TermsAgreementProps {
  agreements: {
    all: boolean;
    required: boolean;
    optional: boolean;
  };
  setAgreements: React.Dispatch<
    React.SetStateAction<{
      all: boolean;
      required: boolean;
      optional: boolean;
    }>
  >;
  openModal: (content: "required" | "optional") => void;
  handleAgreeAll: () => void;
}

export default function TermsAgreement({
  agreements,
  setAgreements,
  openModal,
  handleAgreeAll,
}: TermsAgreementProps) {
  return (
    <div className="text-left">
      <div className="flex justify-between items-center mb-2.5">
        <div className="flex items-center">
          <div onClick={handleAgreeAll} className="cursor-pointer">
            <CheckMarkIcon checked={agreements.all} />
          </div>
          <label className="pl-2 text-sm font-medium text-gray-700">
            약관 전체 동의
          </label>
        </div>
        <ArrowIcon isOpen={false} color="#B5B5B5" />
      </div>
      <div className="space-y-2">
        <div className="flex items-center text-gray-700">
          <div
            onClick={() =>
              setAgreements((prev) => ({
                ...prev,
                required: !prev.required,
              }))
            }
            className="cursor-pointer"
          >
            <CheckIcon checked={agreements.required} />
          </div>
          <span
            className={`text-sm pl-2 ${
              agreements.required ? "text-[#8530F1]" : "text-gray-700"
            }`}
          >
            [필수] 피어펙트 서비스 이용 회원 약관
          </span>
          <button
            className="text-slate-400 text-xs ml-auto underline"
            onClick={() => openModal("required")}
          >
            내용 보기
          </button>
        </div>
        <div className="flex items-center text-gray-700">
          <div
            onClick={() =>
              setAgreements((prev) => ({
                ...prev,
                optional: !prev.optional,
              }))
            }
            className="cursor-pointer"
          >
            <CheckIcon checked={agreements.optional} />
          </div>
          <span
            className={`text-sm pl-2 ${
              agreements.optional ? "text-[#8530F1]" : "text-gray-700"
            }`}
          >
            [선택] 마케팅 정보 수신
          </span>
          <button
            className="text-slate-400 text-xs ml-auto underline"
            onClick={() => openModal("optional")}
          >
            내용 보기
          </button>
        </div>
      </div>
    </div>
  );
}
