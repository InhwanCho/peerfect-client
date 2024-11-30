'use client';
import { useCallback, useEffect } from 'react';
import SvgX from '../../icons/S/X';

interface ModalProps {
  onClose: () => void;
  content: 'required' | 'optional' | 'all';
}

export function TermsModal({ onClose, content }: ModalProps) {
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={onClose}
    >
      <div
        className="relative w-11/12 max-w-md rounded-lg bg-background-primary p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute right-6 top-6 text-text-secondary"
          onClick={onClose}
          aria-label="Close button"
        >
          <SvgX filledColor="#111111" />
        </button>
        <h2 className="mb-4 pb-1.5 text-h4 font-semibold text-text-primary">
          {content === 'required'
            ? 'Peerfect 이용약관 동의'
            : '마케팅 정보 수신 동의'}
        </h2>
        <div className="max-h-[450px] overflow-y-auto text-sm text-text-secondary">
          {content === 'required' ? (
            // 필수 항목
            <div>
              <h3 className="pb-1.5 font-semibold text-text-primary">
                제1조 (목적)
              </h3>
              <p>
                이 약관은 Peerfect (이하 &quot;회사&quot;라 합니다)가 제공하는
                제반 서비스의 이용과 관련하여 회사와 회원과의 권리, 의무 및
                책임사항, 기타 필요한 사항을 규정함을 목적으로 합니다.
              </p>

              <h3 className="mt-4 pb-1.5 font-semibold text-text-primary">
                제2조 (정의)
              </h3>
              <p>이 약관에서 사용하는 주요 용어의 정의는 다음과 같습니다.</p>
              <p>
                서비스: 구현되는 단말기(PC, TV, 휴대형단말기 등의 각종 유무선
                장치를 포함)와 상관없이 이용자가 이용할 수 있는 회사가 제공하는
                제반 서비스를 의미합니다.
              </p>
              <p>
                이용자: 약관에 따라 회사가 제공하는 서비스를 받는 개인회원,
                기업회원 및 비회원을 말합니다.
              </p>
              <p>
                개인회원: 회사에 개인정보를 제공하여 회원등록을 한 사람으로,
                회사로부터 지속적으로 정보를 제공받고 회사가 제공하는 서비스를
                계속적으로 이용할 수 있는 자를 말합니다.
              </p>
              <p>
                비회원: 회원가입 없이 회사가 제공하는 서비스를 이용하는 자를
                말합니다.
              </p>
              <h3 className="mt-4 pb-1.5 font-semibold text-text-primary">
                제3조 (약관 외 준칙)
              </h3>
              <p>
                이 약관에서 정하지 아니한 사항에 대해서는 법령 또는 회사가 정한
                서비스의 개별약관, 운영정책 및 규칙에 따릅니다. 또한 본 약관과
                세부지침이 충돌할 경우에는 세부지침이 우선합니다.
              </p>

              <h3 className="mt-4 pb-1.5 font-semibold text-text-primary">
                제4조 (약관의 효력과 변경)
              </h3>
              <p>
                이 약관은 Peerfect(이)가 제공하는 모든 인터넷서비스에 게시하여
                공지합니다. 회사는 약관의 규제에 관한 법률, 전자문서 및 전자거래
                기본법, 정보통신망법, 소비자기본법 등 관계 법령에 따라 이 약관을
                변경할 수 있으며, 약관이 변경되는 경우 회사는 최소
                7일(이용자에게 불리하거나 중대한 사항의 변경의 경우에는 30일)
                이전부터 시행일자 후 상당한 기간 동안 공지하여, 기존
                이용자에게는 변경된 약관 적용을 받습니다.
              </p>

              <h3 className="mt-4 pb-1.5 font-semibold text-text-primary">
                제22조 (관할법원 및 준거법)
              </h3>
              <p>
                서비스와 관련하여 분쟁이 발생한 경우 관할법원은 민사소송법에
                따른 관할법원으로 정하며, 준거법은 대한민국의 법령을 적용합니다.
              </p>

              <h3 className="mt-4 pb-1.5 font-semibold text-text-primary">
                부칙
              </h3>
              <p>
                <strong>제1조 (시행일)</strong>
                <br />본 약관은 2024.08.31.부터 시행됩니다.
              </p>
            </div>
          ) : (
            // 선택 항목
            <div>
              <h3 className="pb-1.5 font-semibold text-text-primary">
                1. 수집 및 이용 목적
              </h3>
              <p className="mb-2">
                Peerfect에서 제공하는 마케팅 정보 수신에 동의하시면 다음과 같은
                목적으로 귀하의 정보를 수집 및 이용하게 됩니다.
              </p>
              <p>서비스 관련 최신 정보 제공</p>
              <p>이벤트 및 프로모션 안내</p>
              <p>맞춤형 광고 및 혜택 정보 제공</p>

              <h3 className="mt-4 pb-1.5 font-semibold text-text-primary">
                2. 수집하는 정보 항목
              </h3>
              <p>이메일</p>

              <h3 className="mt-4 pb-1.5 font-semibold text-text-primary">
                3. 정보의 보유 및 이용 기간
              </h3>
              <p>
                귀하의 마케팅 정보 수신 동의는 철회 요청 시까지 유효합니다. 동의
                철회 요청이 있을 경우 즉시 수신 동의를 취소하며, 이후 마케팅
                정보를 제공하지 않습니다.
              </p>

              <h3 className="mt-4 pb-1.5 font-semibold text-text-primary">
                4. 수신 동의 철회 방법
              </h3>
              <p>
                언제든지 마케팅 정보 수신을 거부하거나 철회할 수 있으며, 이는
                고객센터 또는 각 마케팅 정보 수신 채널에서 설정을 통해 변경하실
                수 있습니다.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
