'use client';

import { Dispatch, SetStateAction, useState } from 'react';
import { useForm } from 'react-hook-form';
import EmailSignupForm from './email-signup-form';
import EmailVerification from './email-verification';
import EmailInputForm from './email-input-form';
import { useEmailCheck } from '@/hooks/use-email-send';

interface EmailRegisterProps {
  onSwitchAuthType: () => void;
  isSignupScreen: boolean;
  setIsSignupScreen: Dispatch<SetStateAction<boolean>>;
}

export default function EmailRegister({
  onSwitchAuthType,
  isSignupScreen,
  setIsSignupScreen,
}: EmailRegisterProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = useForm<{ email: string }>({
    mode: 'onChange',
  });

  const [isVerified, setIsVerified] = useState(false);
  const [verifiedEmail, setVerifiedEmail] = useState('');
  const emailValue = watch('email');
  const emailMutation = useEmailCheck();

  const onSubmit = (data: { email: string }) => {
    console.log('Valid email:', data.email);
    emailMutation.mutate(data.email, {
      onSuccess: () => {
        setVerifiedEmail(data.email);
        setIsVerified(true);
      },
      onError: () => {
        alert('인증 요청에 실패했습니다. 다시 시도해주세요.');
      },
    });
  };

  if (isSignupScreen) {
    // 3. 회원가입 화면(인증 후)
    return <EmailSignupForm verifiedEmail={verifiedEmail} />;
  }

  if (isVerified) {
    // 2. 인증 받는 화면(이메일로 인증 간 후)
    return (
      <EmailVerification
        verifiedEmail={verifiedEmail}
        onProceedToSignup={() => setIsSignupScreen(true)}
        onSwitchAuthType={onSwitchAuthType}
      />
    );
  }

  // 1. 이메일 입력 폼 화면
  return (
    <EmailInputForm
      emailValue={emailValue}
      errors={errors}
      isValid={isValid}
      isLoading={emailMutation.isPending}
      onSubmit={handleSubmit(onSubmit)}
      register={register}
      onSwitchAuthType={onSwitchAuthType}
    />
  );
}
