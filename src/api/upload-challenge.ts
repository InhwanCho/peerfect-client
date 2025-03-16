import apiClient from '@/lib/api-client';
import { AxiosResponse } from 'axios';

export async function uploadChallenge(
  formData: FormData
): Promise<AxiosResponse> {
  try {
    const response = await apiClient.post(
      'api/member/challenge-upload',
      formData,
      { headers: { 'Content-Type': 'multipart/form-data' } }
    );
    return response;
  } catch (error) {
    throw error;
  }
}
