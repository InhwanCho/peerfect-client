import Link from "next/link";
import SwitchAuthButton from "./switch-auth-button";

interface EmailVerificationProps {
  verifiedEmail?: string;
  onProceedToSignup: () => void;
  onSwitchAuthType: () => void;
}

export default function EmailVerification({
  verifiedEmail,
  onProceedToSignup,
  onSwitchAuthType
}: EmailVerificationProps) {
  return (
    <div className="flex flex-col items-center justify-between text-center w-full">
      <h2 className="text-2xl font-semibold text-black">이메일 인증</h2>
      <div>
        <div className="whitespace-nowrap text-sm mt-[110px] mb-16">
          <p className="mb-0.5">입력하신 메일 주소로 인증 메일이 발송되었습니다.</p>
          <p>수신된 링크를 클릭하여 서비스에 로그인 할 수 있습니다.</p>
          <p className="text-[#9E9E9E] text-sm pt-2.5">1시간 이내에 인증을 완료해주세요.</p>
        </div>
        <div className="w-full gap-y-4 flex flex-col">
          <button
            className="w-full bg-[#8530F1] text-white rounded-lg py-3 text-sm"
            onClick={onProceedToSignup}
          >
          인증완료
          </button>

          <button
            className="w-full text-[#9E9E9E] border rounded-lg py-3 text-sm"
          >
          인증메일 재발송
          </button>
        </div>
        <div className="flex justify-between w-full pt-4">
          <SwitchAuthButton onClick={onSwitchAuthType} />
          <Link href="" className="text-[#8530F1] text-sm font-medium">회원가입</Link>
        </div>
      </div>
      

      {/* 임시 완료 버튼 */}
    </div>
  );
}
