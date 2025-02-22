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
      const token = getAuthToken();

      if (!token) {
        try {
          // 토큰이 없으면 재발급 요청
          const newAccessToken = await reissueToken();

          if (!newAccessToken) {
            console.log('🔴 토큰 재발급 실패, 로그아웃 처리');
            removeAuthToken();
            clearAuthToken();
            clearUserInfo();
            // router.push('/auth');
          } else {
            console.log('✅ 토큰이 성공적으로 재발급됨');

            // 새 토큰 저장 (필요시 setAuthToken 호출)
            setAuthToken(newAccessToken);

            // 새 토큰의 payload 디코딩 (JWT 포맷: header.payload.signature)
            const tokenParts = newAccessToken.split('.');
            if (tokenParts.length !== 3) {
              throw new Error('Invalid token format');
            }
            const payloadBase64 = tokenParts[1];
            const decodedPayload = JSON.parse(atob(payloadBase64));
            const memberIdFromToken = decodedPayload.sub;

            // memberId로 회원정보 fetch 후 업데이트
            const memberInfo = await fetchMemberInfo(memberIdFromToken);
            setUserInfo(memberInfo);
          }
        } catch (error) {
          console.error('🔴 토큰 검증 중 오류 발생:', error);
          removeAuthToken();
          clearAuthToken();
          clearUserInfo();
          // router.push('/auth');
        }
      } else {
        console.log('✅ 토큰이 유효합니다.');
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

  return null; // UI를 렌더링하지 않음
}
