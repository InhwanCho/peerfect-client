'use client';

import { useState } from "react";
import FormLayout from "./_components/form-layout";
import SocialButton from "./_components/social-button";
import EmailRegister from "./_components/email-register";

export default function AuthPage() {
  const [authType, setAuthType] = useState("social");

  return (
    <FormLayout>
      {authType === "email" ? (
        // 이메일 로그인 폼
        <EmailRegister onSwitchAuthType={() => setAuthType("social")} />
      ) : (
        // 소셜 로그인 UI
        <>
          <h2 className="text-center text-black text-xl lg:text-2xl font-semibold">
            로그인
          </h2>
          <div className="flex flex-col gap-y-8 w-full">
            <SocialButton provider="kakao" />
            <SocialButton provider="google"  />
            {/* <SocialButton provider="apple" showRecentBadge /> */}
            <SocialButton
              showRecentBadge
              provider="email"
              onClick={() => setAuthType("email")}
            />
          </div>
        </>
      )}
    </FormLayout>
  );
}
