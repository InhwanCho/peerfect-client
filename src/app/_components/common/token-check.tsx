'use client';

import { useEffect } from 'react';
import { reissueToken } from '@/api/reissue-api';
import { getAuthToken, removeAuthToken } from '@/lib/token';
import { useUserStore } from '@/store/use-user-store';
import { useRouter } from 'next/navigation';

export default function TokenCheck() {
  const router = useRouter();
  useEffect(() => {
    const checkToken = async () => {
      console.log('실행1');
      const token = getAuthToken();
      if (!token) {
        console.log('🔴 토큰이 없습니다. 로그아웃 처리');
        removeAuthToken();
        useUserStore.getState().clearAuthToken();
        router.push('/auth');
        return;
      }
      console.log('실행2');

      try {
        // 토큰 만료 여부 확인
        const tokenDataStr = localStorage.getItem('AuthorizationToken');
        if (!tokenDataStr) return;

        const { expiresAt } = JSON.parse(tokenDataStr) as { expiresAt: number };

        if (new Date().getTime() > expiresAt) {
          console.log('🔄 토큰 만료됨, 갱신 시도');
          const newAccessToken = await reissueToken(token);
          console.log('실행3');

          if (!newAccessToken) {
            console.log('🔴 토큰 재발급 실패, 로그아웃 처리');
            removeAuthToken();
            useUserStore.getState().clearAuthToken();
            router.push('/auth');
          } else {
            console.log('✅ 토큰이 성공적으로 재발급됨');
          }
        } else {
          console.log('✅ 토큰이 유효합니다.');
        }
      } catch (error) {
        console.error('🔴 토큰 검증 중 오류 발생:', error);
        removeAuthToken();
        useUserStore.getState().clearAuthToken();
        router.push('/auth');
      }
    };

    // 최초 실행 및 5분 간격 반복 실행
    checkToken();
    const interval = setInterval(checkToken, 5 * 60 * 1000);

    // 브라우저 탭이 다시 활성화될 때 실행
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        checkToken();
      }
    };

    // 브라우저 창이 포커스를 얻을 때 실행
    const handleWindowFocus = () => {
      checkToken();
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('focus', handleWindowFocus);

    // 컴포넌트 언마운트 시 클린업
    return () => {
      clearInterval(interval);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('focus', handleWindowFocus);
    };
  }, [router]);

  return null; // UI를 렌더링하지 않음
}
