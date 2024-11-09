'use client';

import { useState } from "react";
import FormLayout from "./_components/formlayout";

export default function AuthPage() {
  const [authType, setAuthType] = useState("social");

  return (
    <FormLayout>
      {authType === "email" ? (
        // 이메일 로그인 폼
        <>
          <h2 className="text-center text-black text-2xl font-semibold mb-[140px]">
            이메일로 계속하기
          </h2>
          <div className="w-full mb-4">
            <input
              type="email"
              placeholder="이메일"
              className="w-full h-12 px-4 py-2 bg-white rounded-2xl border border-gray-300 focus:outline-none"
            />
          </div>
          <button className="w-full h-12 bg-gray-300 rounded-2xl text-gray-700 font-semibold">
            인증 후 로그인
          </button>
          <button
            className="w-full h-12 mt-4 bg-white border text-gray-700 rounded-2xl font-semibold"
            onClick={() => setAuthType("social")}
          >
            소셜 로그인으로 전환
          </button>
        </>
      ) : (
        // 소셜 로그인 UI
        <>
          <h2 className="text-center text-black text-2xl font-semibold mb-[140px]">로그인</h2>

          <button className="flex items-center justify-center w-full h-12 bg-[#FEE500] rounded-2xl mb-4 shadow drop-shadow-sm">
            <picture className="w-6 h-6 mr-2 relative">
              <source srcSet="/assets/auth/kakao_logo.webp" type="image/webp" />
              <img src="/assets/auth/kakao_logo.png" alt="Kakao Icon" className="w-6 h-6" />
              <div className="absolute -top-8 left-1/4 w-3 h-3 bg-purple-500 transform rotate-45 z-0 "></div>
              <div className="absolute w-20 -top-12 left-1/2 transform -translate-x-1/2 bg-purple-500 text-white text-xs font-semibold py-1 px-2 rounded-full before:absolute before:-bottom-1 before:left-1/2 before:transform before:-translate-x-1/2 before:border-4 before:border-transparent before:border-t-purple-500">                
                최근 로그인
              </div>
            </picture>
            <span className="text-black font-semibold">카카오 계정으로 계속하기</span>
          </button>

          <button className="flex items-center justify-center w-full h-12 bg-white rounded-2xl mb-4 shadow drop-shadow-sm">
            <picture className="w-6 h-6 mr-2">
              <source srcSet="/assets/auth/google_logo.webp" type="image/webp" />
              <img src="/assets/auth/google_logo.png" alt="Google Icon" className="w-6 h-6" />
            </picture>
            <span className="text-gray-700 font-semibold">구글 계정으로 계속하기</span>
          </button>

          <button className="flex items-center justify-center w-full h-12 bg-white rounded-2xl mb-4 shadow drop-shadow-sm">
            <picture className="w-6 h-6 mr-2">
              <source srcSet="/assets/auth/apple_logo.webp" type="image/webp" />
              <img src="/assets/auth/apple_logo.png" alt="Apple Icon" className="w-6 h-6" />
            </picture>
            <span className="text-gray-700 font-semibold">애플 계정으로 계속하기</span>
          </button>

          <button
            className="flex items-center justify-center w-full h-12 bg-white rounded-2xl shadow drop-shadow-sm"
            onClick={() => setAuthType("email")}
          >
            <span className="text-gray-700 font-semibold">이메일로 계속하기</span>
          </button>
        </>
      )}
    </FormLayout>
  );
}
