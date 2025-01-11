import { useMutation } from '@tanstack/react-query';
import apiClient from '@/lib/api-client';

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
      {
        // 200과 409 상태 코드 모두 성공으로 간주
        validateStatus: (status) => status === 200 || status === 409,
      }
    );
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
