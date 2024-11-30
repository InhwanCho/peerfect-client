import Link from 'next/link';
import SwitchAuthButton from './switch-auth-button';
import CustomButton from '@/app/_components/common/custom-button';

interface EmailVerificationProps {
  verifiedEmail?: string;
  onProceedToSignup: () => void;
  onSwitchAuthType: () => void;
}

export default function EmailVerification({
  verifiedEmail,
  onProceedToSignup,
  onSwitchAuthType,
}: EmailVerificationProps) {
  return (
    <div className="flex size-full flex-col items-center justify-evenly">
      <h4 className="text-xl font-semibold text-text-primary lg:text-h4">
        이메일 인증
      </h4>
      <div className="w-full text-center">
        <div className="mb-16 mt-[110px] whitespace-nowrap text-sm text-[#000000]">
          <p className="mb-0.5">
            입력하신 메일 주소로 인증 메일이 발송되었습니다.
          </p>
          <p>수신된 링크를 클릭하여 서비스에 로그인 할 수 있습니다.</p>
          <p className="pt-2.5 text-sm text-gray-500">
            10분 이내에 인증을 완료해주세요.
          </p>
        </div>
        <div className="flex w-full flex-col gap-y-4">
          <CustomButton color="purple" onClick={onProceedToSignup}>
            인증완료
          </CustomButton>
          <CustomButton color="default">인증메일 재발송</CustomButton>
        </div>
        <div className="flex w-full justify-between pt-4">
          <SwitchAuthButton onClick={onSwitchAuthType} />
          <Link href="" className="text-sm font-medium text-main-primary">
            회원가입
          </Link>
        </div>
      </div>
    </div>
  );
}
