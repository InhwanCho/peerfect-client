'use client';
import Link from 'next/link';
import SwitchAuthButton from './switch-auth-button';
import CustomButton from '@/app/_components/common/custom-button';
import { useEffect, useState } from 'react';
import {
  useEmailVerify,
  checkMemberRequest,
} from '@/app/hooks/use-email-verify';
import { useRouter } from 'next/navigation';
import { Timer } from '@/app/_components/common/timer';

interface EmailVerificationProps {
  verifiedEmail?: string;
  verifiedCode?: string;
  onProceedToSignup: () => void;
  onSwitchAuthType: () => void;
}

export default function EmailVerification({
  verifiedEmail,
  verifiedCode,
  onProceedToSignup,
  onSwitchAuthType,
}: EmailVerificationProps) {
  const [value, setValue] = useState('');
  const { mutate } = useEmailVerify();
  const router = useRouter();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleVerify = () => {
    if (verifiedEmail && value) {
      mutate(
        { verifiedEmail, verifiedCode: value },
        {
          onSuccess: async (_, variables) => {
            try {
              const response = await checkMemberRequest(
                variables.verifiedEmail
              );

              console.log('response :', response);
              // 메시지에 따른 분기 처리
              if (response.message === '회원입니다.') {
                //회원입니다.
                console.log('response.memberId :', response.memberId);
                alert('로그인 성공.');
                router.push('/');
              } else if (response.message === '회원이 아닙니다') {
                // 신규 회원: 회원가입 진행
                onProceedToSignup();
              }
            } catch (error: any) {
              console.log('error:', error);
            }
          },
          onError: () => {
            alert('인증에 실패했습니다. 다시 시도해주세요.');
          },
        }
      );
    } else {
      alert('이메일과 인증번호를 모두 입력해주세요.');
    }
  };

  useEffect(() => {
    if (verifiedCode && verifiedEmail) {
      setValue(verifiedCode);
      mutate(
        { verifiedEmail, verifiedCode },
        {
          onSuccess: async (_, variables) => {
            try {
              const response = await checkMemberRequest(
                variables.verifiedEmail
              );

              console.log('response :', response);
              // 메시지에 따른 분기 처리
              if (response.message === '회원입니다.') {
                //회원입니다.
                console.log('response.memberId :', response.memberId);
                alert('로그인 성공.');
                router.push('/');
              } else if (response.message === '회원이 아닙니다') {
                // 신규 회원: 회원가입 진행
                onProceedToSignup();
              }
            } catch (error: any) {
              console.log('error:', error);
            }
          },
          onError: () => {
            alert('인증에 실패했습니다. 다시 시도해주세요.');
          },
        }
      );
    }
  }, [verifiedCode, verifiedEmail, mutate, onProceedToSignup, router]);

  return (
    <div className="flex size-full flex-col items-center justify-evenly">
      <h4 className="text-xl font-semibold text-text-primary lg:text-h4">
        이메일 인증
      </h4>
      <div className="w-full text-center">
        <div className="mb-16 mt-[110px] whitespace-nowrap text-sm text-foreground">
          <p className="mb-0.5">
            <span>
              &quot;
              <span className="underline underline-offset-[3px]">
                {verifiedEmail}
              </span>
              &quot;
            </span>
            <span className="ml-0.5">으로 인증 메일이 발송되었습니다.</span>
          </p>
          <p>수신된 링크를 클릭하여 서비스에 로그인 할 수 있습니다.</p>
          <p className="pt-2.5 text-sm text-gray-500">
            10분 이내에 인증을 완료해주세요.
          </p>
        </div>
        <div className="flex w-full gap-x-2 relative">
          <input
            value={value}
            onChange={handleChange}
            placeholder="인증번호를 입력해주세요."
            maxLength={8}
            className={`h-[70px] w-full rounded-2xl border px-5 py-3 text-buttonS font-semibold text-text-primary placeholder:text-sm focus:outline-none 
              ${
                value
                  ? 'border-main-primary'
                  : 'focus:border-main-primary focus:outline-none'
              } md:text-buttonM`}
          />
          <Timer
            duration={600}
            reset
            className="top-4 left-[260px] select-none pointer-events-none"
          />
          <CustomButton color="purple" onClick={handleVerify} size="xs">
            인증완료
          </CustomButton>
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
