import { useMutation } from '@tanstack/react-query';
import apiClient from '@/lib/api-client';

const checkNicknameRequest = async (nickname: string) => {
  const response = await apiClient.post('/api/member/checkNickName', {
    nickname: nickname,
  });
  return response.data;
};

export const useNicknameCheck = () => {
  return useMutation({
    mutationFn: checkNicknameRequest,
    onSuccess: (data) => {
      console.log('닉네임 중복 확인 결과:', data);
    },
    onError: (error) => {
      console.error('닉네임 확인 오류:', error);
    },
  });
};
