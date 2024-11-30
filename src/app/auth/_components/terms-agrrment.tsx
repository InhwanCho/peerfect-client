import CheckIcon from '@/app/_components/icons/check-icon';
import CheckMarkIcon from '@/app/_components/icons/check-mark-icon';
import { cn } from '@/lib/utils';

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
  openModal: (content: 'required' | 'optional') => void;
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
    <div className={cn('text-left select-none', className)}>
      <div
        className="mb-2.5 flex cursor-pointer items-center justify-between"
        onClick={handleAgreeAll}
      >
        <div className="flex items-center">
          <CheckMarkIcon type={agreements.all ? 'checked' : 'unchecked'} />
          <label
            className={`pl-2 text-sm font-medium ${agreements.optional ? 'text-text-primary' : 'text-gray-500'} cursor-pointer`}
          >
            약관 전체 동의
          </label>
        </div>
      </div>
      <div className="space-y-2">
        <div
          className="flex cursor-pointer items-center text-text-primary"
          onClick={() =>
            setAgreements((prev) => ({
              ...prev,
              required: !prev.required,
            }))
          }
        >
          <CheckIcon checked={agreements.required} />
          <span
            className={`cursor-pointer pl-2 text-sm ${
              agreements.required
                ? 'font-medium text-text-primary'
                : 'text-gray-400'
            }`}
          >
            [필수] 피어펙트 서비스 이용 회원 약관
          </span>
          <button
            className="ml-auto text-sm text-text-tertiary underline"
            onClick={(e) => {
              e.stopPropagation();
              openModal('required');
            }}
            aria-label="see in detail"
          >
            내용 보기
          </button>
        </div>
        <div
          className="flex cursor-pointer items-center text-text-primary"
          onClick={() =>
            setAgreements((prev) => ({
              ...prev,
              optional: !prev.optional,
            }))
          }
        >
          <CheckIcon checked={agreements.optional} />
          <span
            className={`cursor-pointer pl-2 text-sm ${
              agreements.optional
                ? 'font-medium text-text-primary'
                : 'text-gray-400'
            }`}
          >
            [선택] 마케팅 정보 수신
          </span>
          <button
            className="ml-auto text-sm text-text-tertiary underline"
            onClick={(e) => {
              e.stopPropagation();
              openModal('optional');
            }}
            aria-label="see in detail"
          >
            내용 보기
          </button>
        </div>
      </div>
    </div>
  );
}
