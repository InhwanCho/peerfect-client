/* eslint-disable @next/next/no-img-element */

interface SocialButtonProps {
  provider: 'kakao' | 'google' | 'apple' | 'email';
  onClick?: () => void;
  showRecentBadge?: boolean;
}

export default function SocialButton({ provider, onClick, showRecentBadge = false }: SocialButtonProps) {
  const settings = {
    kakao: {
      iconSrc: '/assets/auth/kakao_logo.png',
      iconWebpSrc: '/assets/auth/kakao_logo.webp',
      bgColor: 'bg-[#FEE500]',
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
      className={`flex relative items-center justify-center w-full h-12 ${settings.bgColor} rounded-2xl shadow drop-shadow-sm`}
      onClick={onClick}
    >
      {provider !== 'email' &&
        <picture className="w-6 h-6 mr-2 relative">
          <source srcSet={settings.iconWebpSrc} type="image/webp" />
          <img src={settings.iconSrc} alt={`${provider} Icon`} className="w-6 h-6" />
          {showRecentBadge && (
            <>
              <div className="absolute -top-6 left-[31%] w-3 h-3 bg-[#8530F1] transform rotate-45 z-0 pointer-events-none"></div>
              <div className="absolute w-28 -top-[52px] left-1/2 transform -translate-x-1/2 bg-[#8530F1] text-white text-sm font-semibold py-2 rounded-full pointer-events-none">
                최근 로그인
              </div>
            </>
          )}
        </picture>
      }
      {showRecentBadge && (
        <>
          <div className="absolute -top-4 left-[49%] w-3 h-3 bg-[#8530F1] transform rotate-45 z-0 pointer-events-none"></div>
          <div className="absolute w-28 -top-[44px] left-1/2 transform -translate-x-1/2 bg-[#8530F1] text-white text-sm font-semibold py-2 rounded-full pointer-events-none">
                최근 로그인
          </div>
        </>
      )}
      <span className={`${settings.textColor} font-semibold w-[140px] sm:w-[160px] text-sm sm:text-base`}>{settings.label}</span>
    </button>
  );
}
