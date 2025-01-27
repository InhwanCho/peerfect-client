import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
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
  const authorizationHeader = response.headers['authorization'];
  console.log('authorizationHeader :', authorizationHeader);
  if (authorizationHeader) {
    // Bearer 토큰에서 "Bearer " 제거
    const token = authorizationHeader.replace('Bearer ', '');
    console.log('Extracted Token:', token);

    // localStorage에 저장
    localStorage.setItem('accessToken', token);
    localStorage.setItem('resentLogin', 'email');
    console.log('Token saved to localStorage');
  }
  return { data: response.data, headers: response.headers };
};

export const useSignup = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: signupRequest,
    onSuccess: (response) => {
      console.log('회원가입 성공:', response.data);
      alert('회원가입이 완료되었습니다.');
      router.push('/');
    },
    onError: (error) => {
      console.error('회원가입 실패:', error);
      alert('회원가입 중 문제가 발생했습니다.');
    },
  });
};
