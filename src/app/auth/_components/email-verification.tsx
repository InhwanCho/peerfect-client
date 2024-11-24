import Link from "next/link";
import SwitchAuthButton from "./switch-auth-button";
import CustomButton from "@/app/_components/common/custom-button";

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
    <div className="w-full flex flex-col justify-evenly items-center h-full">
      <h2 className="text-2xl font-semibold text-text-primary">이메일 인증</h2>
      <div className="w-full text-center">
        <div className="whitespace-nowrap text-sm mt-[110px] mb-16 text-text-primary">
          <p className="mb-0.5">입력하신 메일 주소로 인증 메일이 발송되었습니다.</p>
          <p>수신된 링크를 클릭하여 서비스에 로그인 할 수 있습니다.</p>
          <p className="text-gray-500 text-sm pt-2.5">10분 이내에 인증을 완료해주세요.</p>
        </div>
        <div className="w-full gap-y-4 flex flex-col">
          <CustomButton color="purple" onClick={onProceedToSignup}>인증완료</CustomButton>
          <CustomButton color="default" >인증메일 재발송</CustomButton>
        </div>
        <div className="flex justify-between w-full pt-4">
          <SwitchAuthButton onClick={onSwitchAuthType} />
          <Link href="" className="text-main-primary text-sm font-medium">
            회원가입
          </Link>
        </div>
      </div>
    </div>
  );
}
