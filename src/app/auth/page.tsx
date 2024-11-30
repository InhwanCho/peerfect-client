'use client';

import { useState } from 'react';
import FormLayout from './_components/form-layout';
import SocialButton from './_components/social-button';
import EmailRegister from './_components/email-register';

export default function AuthPage() {
  const [authType, setAuthType] = useState('social');

  return (
    <FormLayout>
      {authType === 'email' ? (
        // 이메일 로그인 폼
        <EmailRegister onSwitchAuthType={() => setAuthType('social')} />
      ) : (
        // 소셜 로그인 UI
        <>
          <h2 className="text-center text-xl font-semibold text-text-primary lg:text-h4">
            로그인
          </h2>
          <div className="flex w-full flex-col gap-y-3">
            <SocialButton provider="kakao" showRecentBadge />
            <SocialButton provider="google" />
            {/* <SocialButton provider="apple" showRecentBadge /> */}
            <SocialButton
              className="mt-2"
              provider="email"
              onClick={() => setAuthType('email')}
            />
          </div>
        </>
      )}
    </FormLayout>
  );
}
