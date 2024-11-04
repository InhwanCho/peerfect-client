'use client';

import CenterLogo from "../_components/center-logo";

/* eslint-disable @next/next/no-img-element */

export default function AuthPage() {
  return (
    <div className="w-[1920px] h-[1080px] relative bg-[#19161d]">
      <img alt='pic' className="w-[206px] h-52 left-[270px] bottom-0 absolute" src="/assets/auth/Asset91.png" />
      <img alt='pic' className="w-[408.63px] h-[403.72px] left-[-48.63px] bottom-0 absolute " src="/assets/auth/Asset15.png" />
      <img alt='pic' className="w-[229.95px] h-[226px] left-[1652px] top-[38px] absolute" src="/assets/auth/Asset102.png" />
      <img alt='pic' className="w-[94.98px] h-[341.65px] right-0 top-[481.21px] absolute" src="/assets/auth/Asset86.png" />
      <img alt='pic' className="w-[284.45px] h-[288.18px] right-0 bottom-0 absolute" src="/assets/auth/Asset42.png" />
      <img alt='pic' className="w-[94.76px] h-[84.49px] left-[1755.98px] top-[755.90px] absolute " src="/assets/auth/Asset148.png" />
      <img alt='pic' className="w-[159.11px] h-[144.15px] left-[183.98px] top-[86.82px] absolute" src="/assets/auth/Asset149.png" />
      <img alt='pic' className="w-[97.17px] h-[448.62px] left-0 top-[151px] absolute" src="/assets/auth/Asset82.png" />
      <div className="w-[640px] h-[809px] left-[1040px] top-[183px] absolute bg-white rounded-2xl backdrop-blur-[34px]" />
      <CenterLogo/>
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
