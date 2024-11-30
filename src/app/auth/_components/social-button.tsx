import { cn } from '@/lib/utils';

interface SocialButtonProps {
  className?: string;
  provider: 'kakao' | 'google' | 'apple' | 'email';
  onClick?: () => void;
  showRecentBadge?: boolean;
}

export default function SocialButton({
  className,
  provider,
  onClick,
  showRecentBadge = false,
}: SocialButtonProps) {
  const settings = {
    kakao: {
      iconSrc: '/assets/auth/kakao-icon.png',
      iconWebpSrc: '/assets/auth/kakao-icon.webp',
      bgColor: 'bg-[#FFE05C]',
      textColor: 'text-black',
      label: '카카오 계정으로 계속하기',
    },
    google: {
      iconSrc: '/assets/auth/google-icon.png',
      iconWebpSrc: '/assets/auth/google-icon.webp',
      bgColor: 'bg-white',
      textColor: 'text-gray-700',
      label: '구글 계정으로 계속하기',
    },
    apple: {
      iconSrc: '/assets/auth/apple-icon.png',
      iconWebpSrc: '/assets/auth/apple-icon.webp',
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
      className={cn(
        `flex relative items-center justify-center w-full h-[70px] ${settings.bgColor} rounded-2xl card-container`,
        className
      )}
      onClick={onClick}
      aria-label="login button"
    >
      {provider !== 'email' && (
        <picture className="relative mr-2 size-6">
          <source srcSet={settings.iconWebpSrc} type="image/webp" />
          <img
            src={settings.iconSrc}
            alt={`${provider} Icon`}
            className="size-6"
          />

          {showRecentBadge && (
            <>
              <div className="pointer-events-none absolute -top-5 left-1/4 z-0 size-3 rotate-45 bg-main-primary"></div>
              <div className="pointer-events-none absolute -top-[46px] left-[40%] w-28 -translate-x-1/2 rounded-full bg-main-primary p-1.5 text-buttonS font-semibold text-white md:text-buttonM">
                최근 로그인
              </div>
            </>
          )}
        </picture>
      )}
      {provider === 'email' && showRecentBadge && (
        <>
          <div className="pointer-events-none absolute -top-0 left-[49%] z-0 size-3 rotate-45 bg-main-primary"></div>
          <div className="pointer-events-none absolute -top-[26px] left-1/2 w-28 -translate-x-1/2 rounded-full bg-main-primary p-1.5 text-buttonS font-semibold text-white md:text-buttonM">
            최근 로그인
          </div>
        </>
      )}
      <span
        className={`${settings.textColor} w-[140px] text-buttonS font-semibold sm:w-[160px] md:text-buttonM`}
      >
        {settings.label}
      </span>
    </button>
  );
}
