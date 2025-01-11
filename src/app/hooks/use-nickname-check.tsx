// src/hooks/use-nickname-check.tsx
import { useMutation } from '@tanstack/react-query';
import apiClient from '@/lib/api-client';

interface CheckNicknameResponse {
  message: string;
  status: string;
}

const checkNicknameRequest = async (
  nickname: string
): Promise<CheckNicknameResponse> => {
  const response = await apiClient.post('/api/member/checkMember', {
    member: nickname,
  });
  return response.data;
};

export const useNicknameCheck = () => {
  return useMutation<CheckNicknameResponse, Error, string>({
    mutationFn: checkNicknameRequest,
    onSuccess: (data) => {
      console.log('닉네임 중복 확인 결과:', data);
      alert('사용 가능한 닉네임입니다.');
    },
    onError: (error) => {
      console.error('닉네임 확인 오류:', error);
      alert('닉네임 확인에 실패했거나 이미 존재합니다.');
    },
  });
};
