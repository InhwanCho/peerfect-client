'use client';
import Link from 'next/link';
import SwitchAuthButton from './switch-auth-button';
import CustomButton from '@/app/_components/common/custom-button';
import { useState } from 'react';

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
  const [value, setValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    console.log(value);
  };
  return (
    <div className="flex size-full flex-col items-center justify-evenly">
      <h4 className="text-xl font-semibold text-text-primary lg:text-h4">
        이메일 인증
      </h4>
      <div className="w-full text-center">
        <div className="mb-16 mt-[110px] whitespace-nowrap text-sm text-foreground">
          <p className="mb-0.5">
            <span className="underline">&quot;{verifiedEmail}&quot;</span>
            <span className="ml-1">로 인증 메일이 발송되었습니다.</span>
          </p>
          <p>수신된 링크를 클릭하여 서비스에 로그인 할 수 있습니다.</p>
          <p className="pt-2.5 text-sm text-gray-500">
            10분 이내에 인증을 완료해주세요.
          </p>
        </div>
        <div className="flex w-full gap-x-2">
          <input
            value={value}
            onChange={handleChange}
            placeholder="인증번호를 입력해주세요."
            maxLength={7}
            className={`h-[70px] w-full rounded-2xl border px-5 py-3 text-buttonS font-semibold text-text-primary placeholder:text-sm focus:outline-none 
        ${
          value
            ? 'border-main-primary'
            : 'focus:border-main-primary focus:outline-none'
        } md:text-buttonM`}
          />
          <CustomButton color="purple" onClick={onProceedToSignup} size="xs">
            인증완료
          </CustomButton>
          {/* <TestButton /> */}
          {/* <CustomButton color="default">인증메일 재발송</CustomButton> */}
        </div>
        <div className="mt-4 flex w-full justify-between px-2 pt-1">
          <SwitchAuthButton onClick={onSwitchAuthType} />
          <Link href="" className="text-sm font-medium text-main-primary">
            회원가입
          </Link>
        </div>
      </div>
    </div>
  );
}
