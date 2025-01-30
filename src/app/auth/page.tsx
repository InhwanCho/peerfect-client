'use client';

import { useEffect, useState } from 'react';
import SocialButton from './_components/social-button';
import EmailRegister from './_components/email-register';
import { useSearchParams } from 'next/navigation';
import EmailVerification from './_components/email-verification';
import EmailSignupForm from './_components/email-signup-form';

export default function AuthPage() {
  const [authType, setAuthType] = useState('social');
  const [isSignupScreen, setIsSignupScreen] = useState<boolean>(false);
  const [recentLogin, setRecentLogin] = useState<string | null>(null);
  const searchParam = useSearchParams();
  const verifiedCode = searchParam.get('code');
  const verifiedEmail = searchParam.get('email');

  useEffect(() => {
    const storedRecentLogin = localStorage.getItem('recentLogin');
    setRecentLogin(storedRecentLogin);
  }, []);

  return (
    <>
      {verifiedCode && verifiedEmail ? (
        isSignupScreen ? (
          // 회원가입 화면
          <EmailSignupForm verifiedEmail={verifiedEmail} />
        ) : (
          // 이메일 인증 화면
          <EmailVerification
            verifiedEmail={verifiedEmail}
            verifiedCode={verifiedCode}
            onProceedToSignup={() => setIsSignupScreen(true)}
            onSwitchAuthType={() => setAuthType('social')}
          />
        )
      ) : authType === 'email' ? (
        // 이메일 로그인 폼
        <EmailRegister
          isSignupScreen={isSignupScreen}
          setIsSignupScreen={setIsSignupScreen}
          onSwitchAuthType={() => setAuthType('social')}
        />
      ) : (
        // 소셜 로그인 UI
        <>
          <h2 className="text-center text-xl font-semibold text-text-primary lg:text-h4">
            로그인
          </h2>
          <div className="flex w-full flex-col gap-y-3">
            <SocialButton
              provider="kakao"
              showRecentBadge={recentLogin === 'kakao'}
            />
            <SocialButton
              provider="google"
              showRecentBadge={recentLogin === 'google'}
            />
            {/* <SocialButton provider="apple" showRecentBadge /> */}
            <SocialButton
              showRecentBadge={recentLogin === 'email'}
              className="mt-2"
              provider="email"
              onClick={() => setAuthType('email')}
            />
          </div>
        </>
      )}
    </>
  );
}
