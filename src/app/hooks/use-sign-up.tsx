import { useMutation } from '@tanstack/react-query';
import apiClient from '@/lib/api-client';

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
  return { data: response.data, headers: response.headers };
};

export const useSignup = () => {
  return useMutation({
    mutationFn: signupRequest,
    onSuccess: (response) => {
      const authorizationHeader = response.headers.authorization;

      if (authorizationHeader) {
        // Bearer 토큰에서 "Bearer " 제거
        const token = authorizationHeader.replace('Bearer ', '');
        console.log('Extracted Token:', token);

        // localStorage에 저장
        localStorage.setItem('accessToken', token);
        console.log('Token saved to localStorage');
      }

      console.log('회원가입 성공:', response.data);
      alert('회원가입이 완료되었습니다.');
    },
    onError: (error) => {
      console.error('회원가입 실패:', error);
      alert('회원가입 중 문제가 발생했습니다.');
    },
  });
};
