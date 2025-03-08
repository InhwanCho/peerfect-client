'use client';

import { useEffect } from 'react';
import { reissueToken } from '@/api/reissue-api';
import { getAuthToken, removeAuthToken, setAuthToken } from '@/lib/token';
import { useUserStore } from '@/store/use-user-store';
import { useRouter } from 'next/navigation';
import { fetchMemberInfo } from '@/hooks/use-member-info';

export default function TokenCheck() {
  const router = useRouter();
  const { clearUserInfo, clearAuthToken, setUserInfo } = useUserStore();

  useEffect(() => {
    const checkToken = async () => {
      let token = getAuthToken();

      // 토큰이 없으면 재발급 요청
      if (!token) {
        try {
          const newAccessToken = await reissueToken();
          if (!newAccessToken) {
            console.log('🔴 토큰 재발급 실패, 로그아웃 처리');
            removeAuthToken();
            clearAuthToken();
            clearUserInfo();
            // router.push('/auth');
            return;
          } else {
            console.log('✅ 토큰이 성공적으로 재발급됨');
            setAuthToken(newAccessToken);
            token = newAccessToken;
          }
        } catch (error) {
          console.error('🔴 토큰 검증 중 오류 발생:', error);
          removeAuthToken();
          clearAuthToken();
          clearUserInfo();
          // router.push('/auth');
          return;
        }
      } else {
        // 토큰이 존재하는 경우, 만료 여부를 확인
        try {
          const tokenParts = token.split('.');
          if (tokenParts.length !== 3) {
            throw new Error('Invalid token format');
          }
          const payloadBase64 = tokenParts[1];
          const decodedPayload = JSON.parse(atob(payloadBase64));
          const exp = decodedPayload.exp;
          const currentTime = Math.floor(Date.now() / 1000);
          if (currentTime >= exp) {
            console.log('🔴 토큰이 만료되어 재발급을 요청합니다.');
            const newAccessToken = await reissueToken();
            if (!newAccessToken) {
              console.log('🔴 토큰 재발급 실패, 로그아웃 처리');
              removeAuthToken();
              clearAuthToken();
              clearUserInfo();
              // router.push('/auth');
              return;
            } else {
              console.log('✅ 토큰이 성공적으로 재발급됨');
              setAuthToken(newAccessToken);
              token = newAccessToken;
            }
          } else {
            console.log('✅ 토큰이 유효합니다.');
          }
        } catch (error) {
          console.error('🔴 토큰 검증 중 오류 발생:', error);
          removeAuthToken();
          clearAuthToken();
          clearUserInfo();
          // router.push('/auth');
          return;
        }
      }

      // 토큰이 정상적으로 존재하면 회원정보를 업데이트
      try {
        const tokenParts = token!.split('.');
        if (tokenParts.length !== 3) {
          throw new Error('Invalid token format');
        }
        const payloadBase64 = tokenParts[1];
        const decodedPayload = JSON.parse(atob(payloadBase64));
        const memberIdFromToken = decodedPayload.sub;

        const memberInfo = await fetchMemberInfo(memberIdFromToken);
        setUserInfo(memberInfo);
      } catch (error) {
        console.error('🔴 회원정보 업데이트 중 오류 발생:', error);
        removeAuthToken();
        clearAuthToken();
        clearUserInfo();
        // router.push('/auth');
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
  }, [router, clearUserInfo, clearAuthToken, setUserInfo]);

  return null; // UI 렌더링 없음
}
