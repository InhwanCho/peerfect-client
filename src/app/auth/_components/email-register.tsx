'use client';

import { useState } from "react";
import { useForm } from "react-hook-form";
import EmailSignupForm from "./email-signup-form";
import EmailVerification from "./email-verification";
import EmailInputForm from "./email-input-form";

interface EmailRegisterProps {
  onSwitchAuthType: () => void;
}

export default function EmailRegister({ onSwitchAuthType }: EmailRegisterProps) {
  const { register, handleSubmit, formState: { errors, isValid }, setValue, watch } = useForm<{ email: string }>({
    mode: "onBlur",
  });

  const [isVerified, setIsVerified] = useState(false); // 인증 화면 전환 상태
  const [isSignupScreen, setIsSignupScreen] = useState(false); // 회원가입 화면 전환 상태
  const [verifiedEmail, setVerifiedEmail] = useState(""); // 유효성이 통과된 이메일 저장
  const emailValue = watch("email"); // 현재 이메일 입력값 추적

  const onSubmit = (data: { email: string }) => {
    console.log("Valid email:", data.email);
    setVerifiedEmail(data.email); // 유효성 통과된 이메일 저장
    setIsVerified(true); // 인증 성공 시 화면 전환
  };

  const handleClearInput = () => {
    setValue("email", ""); // react-hook-form의 값 초기화
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
      onSubmit={handleSubmit(onSubmit)}
      handleClearInput={handleClearInput}
      register={register}
      onSwitchAuthType={onSwitchAuthType}
    />
  );
}
