import ArrowIcon from "@/app/_components/icons/arrow-icon";
import CheckIcon from "@/app/_components/icons/check-icon";
import CheckMarkIcon from "@/app/_components/icons/check-mark-icon";
import { cn } from "@/app/_components/lib/utils";

interface TermsAgreementProps {
  className?: string;
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
  className,
  agreements,
  setAgreements,
  openModal,
  handleAgreeAll,
}: TermsAgreementProps) {
  return (
    <div className={cn("text-left select-none", className)}>
      <div
        className="flex justify-between items-center mb-2.5 cursor-pointer"
        onClick={handleAgreeAll}
      >
        <div className="flex items-center">
          <CheckMarkIcon checked={agreements.all} />
          <label className="pl-2 text-sm font-medium text-gray-700 cursor-pointer">
            약관 전체 동의
          </label>
        </div>
        {/* <ArrowIcon isOpen={false} color="#B5B5B5" /> */}
      </div>
      <div className="space-y-2">
        <div
          className="flex items-center text-gray-700 cursor-pointer"
          onClick={() =>
            setAgreements((prev) => ({
              ...prev,
              required: !prev.required,
            }))
          }
        >
          <CheckIcon checked={agreements.required} />
          <span
            className={`text-sm pl-2 cursor-pointer ${
              agreements.required ? "text-[#8530F1]" : "text-gray-700"
            }`}
          >
            [필수] 피어펙트 서비스 이용 회원 약관
          </span>
          <button
            className="text-slate-400 text-xs ml-auto underline"
            onClick={(e) => {
              e.stopPropagation(); // 부모 이벤트 버블링 방지
              openModal("required");
            }}
          >
            내용 보기
          </button>
        </div>
        <div
          className="flex items-center text-gray-700 cursor-pointer"
          onClick={() =>
            setAgreements((prev) => ({
              ...prev,
              optional: !prev.optional,
            }))
          }
        >
          <CheckIcon checked={agreements.optional} />
          <span
            className={`text-sm pl-2 cursor-pointer ${
              agreements.optional ? "text-[#8530F1]" : "text-gray-700"
            }`}
          >
            [선택] 마케팅 정보 수신
          </span>
          <button
            className="text-slate-400 text-xs ml-auto underline"
            onClick={(e) => {
              e.stopPropagation(); // 부모 이벤트 버블링 방지
              openModal("optional");
            }}
          >
            내용 보기
          </button>
        </div>
      </div>
    </div>
  );
}
