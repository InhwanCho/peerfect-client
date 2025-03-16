import { uploadChallenge } from '@/api/upload-challenge';
import apiClient from '@/lib/api-client';
import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';

export interface ChallengeUploadPayload {
  challengeNo: string;
  memberId: string;
  title: string;
  url: string;
  tool: string[];
  content: string;
}

export const useUploadChallenge = (): UseMutationResult<
  AxiosResponse,
  unknown,
  FormData,
  unknown
> => {
  return useMutation<AxiosResponse, unknown, FormData, unknown>({
    mutationFn: (formData: FormData) => uploadChallenge(formData),
    onSuccess: (data) => {
      console.log('업로드 성공', data);
      alert('업로드 성공');
    },
    onError: (error: unknown) => {
      console.error('업로드 실패', error);
    },
  });
};
