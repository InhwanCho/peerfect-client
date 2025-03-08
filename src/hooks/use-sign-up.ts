import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import apiClient from '@/lib/api-client';
import { useUserStore } from '@/store/use-user-store';
import { fetchMemberInfo } from './use-member-info';
import { setAuthToken } from '@/lib/token';

interface SignupRequest {
  nickname: string;
  email: string;
  requiredterm: string; // "true" 또는 "false" 문자열
  optionalterm: string; // "true" 또는 "false" 문자열
}

const signupRequest = async (data: SignupRequest) => {
  const response = await apiClient.post('/api/member/insertMember', data, {
    withCredentials: true,
  });
  const authorizationHeader = response.headers['authorization'];

  if (authorizationHeader) {
    // 쿠키에 저장
    setAuthToken(authorizationHeader);

    localStorage.setItem('recentLogin', 'email');
    console.log('Token saved to cookie');
  }

  return response.data; // API 응답 데이터 반환
};

export const useSignup = () => {
  const setUserInfo = useUserStore((state) => state.setUserInfo);
  const router = useRouter();

  return useMutation({
    mutationFn: signupRequest,
    onSuccess: async (response) => {
      try {
        console.log('회원가입 성공:', response);

        // `memberId`로 fetchMemberInfo 호출
        const memberInfo = await fetchMemberInfo(response.memberId);
        console.log('Fetched Member Info:', memberInfo);

        // Zustand에 유저 정보 저장
        setUserInfo({
          challengeInfo: memberInfo.challengeInfo,
          nickName: memberInfo.nickName,
          memberImg: memberInfo.memberImg,
          memberId: memberInfo.memberId,
          memberEmail: memberInfo.memberEmail,
        });

        // 회원가입 완료 알림 및 라우팅
        alert('회원가입이 완료되었습니다.');
        router.push('/');
      } catch (error) {
        console.error('유저 정보 불러오기 실패:', error);
        alert('유저 정보를 불러오는 데 문제가 발생했습니다.');
      }
    },
    onError: (error) => {
      console.error('회원가입 실패:', error);
      alert('회원가입 중 문제가 발생했습니다.');
    },
  });
};
