/* eslint-disable @next/next/no-img-element */

interface SocialButtonProps {
  provider: 'kakao' | 'google' | 'apple' | 'email';
  onClick?: () => void;
  showBadge?: boolean;
}

export default function SocialButton({ provider, onClick, showBadge = false }: SocialButtonProps) {
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
      className={`flex relative items-center justify-center w-full h-12 ${settings.bgColor} rounded-2xl mb-4 shadow drop-shadow-sm`}
      onClick={onClick}
    >
      {provider !== 'email' &&
        <picture className="w-6 h-6 mr-2 ">
          <source srcSet={settings.iconWebpSrc} type="image/webp" />
          <img src={settings.iconSrc} alt={`${provider} Icon`} className="w-6 h-6" />
          {showBadge && (
            <>
              <div className="absolute -top-[18px] left-1/2 w-3 h-3 bg-purple-500 transform rotate-45 z-0 pointer-events-none"></div>
              <div className="absolute w-20 -top-8 left-[51%] transform -translate-x-1/2 bg-purple-500 text-white text-xs font-semibold py-1 px-2 rounded-full before:absolute before:-bottom-1 before:left-1/2 before:transform before:-translate-x-1/2 before:border-4 before:border-transparent before:border-t-purple-500 pointer-events-none">
                최근 로그인
              </div>
            </>
          )}
        </picture>
      }
      <span className={`${settings.textColor} font-semibold w-[160px]`}>{settings.label}</span>
    </button>
  );
}
