import apiClient from '@/lib/api-client';
import { useMutation } from '@tanstack/react-query';

const sendEmailCheckRequest = async (email: string) => {
  try {
    const response = await apiClient.post('api/email/emailCheck', { email });
    return response.data;
  } catch (error: any) {
    if (error.response) {
      throw new Error(`Error: ${error.response.status}`);
    }
    throw error;
  }
};

export const useEmailCheck = () => {
  return useMutation({
    mutationFn: sendEmailCheckRequest,
    onSuccess: (data) => {
      console.log('API Response:', data);
      alert('인증 이메일이 전송되었습니다.');
    },
    onError: (error: any) => {
      console.error('Error:', error);
      alert('인증 요청에 실패했습니다. 다시 시도해주세요.');
    },
  });
};
