'use client';

import CenterLogo from "../_components/center-logo";

/* eslint-disable @next/next/no-img-element */

export default function AuthPage() {
  return (
    <div className="w-[1920px] h-[1080px] relative bg-[#19161d]">
      <img src="/assets/auth/이메일로그인.webp" alt="hero image" />
      <div className="w-[640px] h-[809px] left-[1040px] top-[183px] absolute bg-white rounded-2xl backdrop-blur-[34px]" />
      
      <div className="w-[460px] h-[340px] left-[1130px] top-[418px] absolute">
        <div className="w-[460px] h-[70px] left-0 top-[94px] absolute flex-col justify-start items-start gap-[15px] inline-flex">
          <div className="self-stretch h-[70px] px-5 py-6 bg-white rounded-2xl border border-[#b4b4b4] flex-col justify-start items-start flex">
            <div className="self-stretch justify-start items-center inline-flex">
              <div className="grow shrink basis-0 text-[#b4b4b4] text-base font-medium font-['Pretendard'] leading-snug">이메일</div>
            </div>
          </div>
        </div>
        <div className="w-[460px] h-[70px] left-0 top-[270px] absolute justify-start items-start inline-flex">
          <div className="w-[460px] h-[70px] p-5 bg-[#e0e0e0] rounded-2xl justify-center items-center flex">
            <div className="w-[150px] text-center text-[#9e9e9e] text-base font-semibold font-['Pretendard'] leading-snug">인증 후 로그인</div>
          </div>
        </div>
        <div className="left-[146px] top-0 absolute text-black text-2xl font-semibold font-['Pretendard'] leading-[33.60px]">이메일로 계속하기</div>
      </div>
    </div>
  );
}
