'use client';

import { useState } from "react";
import FormLayout from "./_components/formlayout";
import SocialButton from "./_components/social-button";

export default function AuthPage() {
  const [authType, setAuthType] = useState("social");

  return (
    <FormLayout>
      {authType === "email" ? (
        // 이메일 로그인 폼
        <>
          <h2 className="text-center text-black text-xl lg:text-2xl font-semibold mb-[60px]">
            이메일로 계속하기
          </h2>
          <div className="w-full mb-[106px]">
            <input
              type="email"
              placeholder="이메일"
              className="w-full h-12 px-4 py-2 bg-white rounded-lg border border-gray-300 text-gray-800 focus:outline-none"
            />
          </div>
          <button
            className="w-full h-12 bg-gray-200 text-[#9E9E9E] rounded-lg font-semibold mb-[28px] cursor-not-allowed"
            disabled
          >
            인증 후 로그인
          </button>
          <button
            className="w-full text-[#9E9E9E] text-sm font-medium underline"
            onClick={() => setAuthType("social")}
          >
            다른 방법으로 로그인
          </button>
        </>
      ) : (
        // 소셜 로그인 UI
        <>
          <h2 className="text-center text-black text-xl lg:text-2xl font-semibold mb-[140px]">
            로그인
          </h2>
          <div className="flex flex-col gap-y-5 w-full">
            <SocialButton
              provider="kakao"
              showBadge={true}
            />

            <SocialButton provider="google" />

            <SocialButton provider="apple" showBadge/>

            <SocialButton
              provider="email"
              onClick={() => setAuthType("email")}
            />
          </div>

        </>
      )}
    </FormLayout>
  );
}
