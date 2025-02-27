import { useMutation } from '@tanstack/react-query';
import apiClient from '@/lib/api-client';
import { setAuthToken } from '@/lib/token';

interface EmailVerifyRequest {
  verifiedEmail: string;
  verifiedCode: string;
}

interface EmailVerifyResponse {
  message: string;
  status: string;
}

const sendEmailVerifyRequest = async (
  data: EmailVerifyRequest
): Promise<EmailVerifyResponse> => {
  try {
    const response = await apiClient.post('/api/email/verifyCode', {
      email: data.verifiedEmail,
      authCode: data.verifiedCode,
    });
    return response.data;
  } catch (error: any) {
    if (error.response) {
      throw new Error(`Error: ${error.response.status}`);
    }
    throw error;
  }
};

// 기존 회원 확인 요청 함수
export const checkMemberRequest = async (email: string) => {
  try {
    const response = await apiClient.post(
      '/api/member/checkMember',
      { email },
      { withCredentials: true }
    );

    // 메시지가 '회원입니다.'인 경우 헤더를 콘솔에 출력
    if (response.data.message === '회원입니다.') {
      const authorizationHeader = response.headers['authorization'];
      if (authorizationHeader) {
        setAuthToken(authorizationHeader);

        localStorage.setItem('recentLogin', 'email');
      }
    }

    console.log('response :', response);
    return response.data; // 응답 데이터를 반환
  } catch (error: any) {
    throw error;
  }
};

export const useEmailVerify = () => {
  return useMutation<EmailVerifyResponse, Error, EmailVerifyRequest>({
    mutationFn: sendEmailVerifyRequest,
  });
};
