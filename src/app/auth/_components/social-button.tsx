/* eslint-disable @next/next/no-img-element */

import { cn } from "@/app/_components/lib/utils";

interface SocialButtonProps {
  className?: string;
  provider: 'kakao' | 'google' | 'apple' | 'email';
  onClick?: () => void;
  showRecentBadge?: boolean;
}

export default function SocialButton({ className, provider, onClick, showRecentBadge = false }: SocialButtonProps) {
  const settings = {
    kakao: {
      iconSrc: '/assets/auth/kakao_logo.png',
      iconWebpSrc: '/assets/auth/kakao_logo.webp',
      bgColor: 'bg-[#FFE05C]',
      textColor: 'text-black',
      label: '카카오 계정으로 계속하기',
    },
    google: {
      iconSrc: '/assets/auth/google_logo.png',
      iconWebpSrc: '/assets/auth/google_logo.webp',
      bgColor: 'bg-white',
      textColor: 'text-gray-700',
      label: '구글 계정으로 계속하기',
    },
    apple: {
      iconSrc: '/assets/auth/apple_logo.png',
      iconWebpSrc: '/assets/auth/apple_logo.webp',
      bgColor: 'bg-white',
      textColor: 'text-gray-700',
      label: '애플 계정으로 계속하기',
    },
    email: {
      bgColor: 'bg-white',
      textColor: 'text-gray-700',
      label: '이메일로 계속하기',
    },
  }[provider];

  return (
    <button
      className={cn(`flex relative items-center justify-center w-full h-[70px] ${settings.bgColor} rounded-2xl card-container`, className)}
      onClick={onClick}
    >
      {provider !== 'email' &&
        <picture className="w-6 h-6 mr-2 relative">
          <source srcSet={settings.iconWebpSrc} type="image/webp" />
          <img src={settings.iconSrc} alt={`${provider} Icon`} className="w-6 h-6" />

          {showRecentBadge && (
            <>
              <div className="absolute -top-5 left-[25%] w-3 h-3 bg-main-primary transform rotate-45 z-0 pointer-events-none"></div>
              <div className="absolute w-28 -top-[46px] left-[40%] transform -translate-x-1/2 bg-main-primary text-white font-semibold p-1.5 rounded-full text-buttonS md:text-buttonM pointer-events-none">
                최근 로그인
              </div>              
            </>
          )}
        </picture>
      }
      {provider === 'email' && showRecentBadge && (
        <>
          <div className="absolute -top-0 left-[49%] w-3 h-3 bg-main-primary transform rotate-45 z-0 pointer-events-none"></div>
          <div className="absolute w-28 -top-[26px] left-[50%] transform -translate-x-1/2 bg-main-primary text-white font-semibold p-1.5 rounded-full text-buttonS md:text-buttonM pointer-events-none">
            최근 로그인
          </div>          
        </>
      )}
      <span className={`${settings.textColor} font-semibold w-[140px] sm:w-[160px] text-buttonS md:text-buttonM`}>
        {settings.label}
      </span>
    </button>
  );
}
