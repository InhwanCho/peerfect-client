import { useMutation } from '@tanstack/react-query';

const API_URL = 'http://15.165.184.154:8008/api/email/emailCheck';

export const sendEmailCheckRequest = async (email: string) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email }),
  });

  if (!response.ok) {
    throw new Error(`Error: ${response.status}`);
  }

  return response.json();
};

export const useEmailCheck = () => {
  return useMutation({
    mutationFn: sendEmailCheckRequest,
    onSuccess: (data) => {
      console.log('API Response:', data);
      alert('인증 이메일이 전송되었습니다.');
    },
    onError: (error: string) => {
      console.error('Error:', error);
      alert('인증 요청에 실패했습니다. 다시 시도해주세요.');
    },
  });
};
