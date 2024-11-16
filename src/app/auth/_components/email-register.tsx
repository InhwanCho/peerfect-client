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
  const { register, handleSubmit, formState: { errors, isValid }, watch } = useForm<{ email: string }>({
    mode: "onChange",
  });

  const [isVerified, setIsVerified] = useState(false);
  const [isSignupScreen, setIsSignupScreen] = useState(false);
  const [verifiedEmail, setVerifiedEmail] = useState("");
  const emailValue = watch("email");

  const onSubmit = (data: { email: string }) => {
    console.log("Valid email:", data.email);
    setVerifiedEmail(data.email); 
    setIsVerified(true); 
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
      register={register}
      onSwitchAuthType={onSwitchAuthType}
    />
  );
}
