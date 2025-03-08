import apiClient from '@/lib/api-client';

export async function uploadChallenge(formData: FormData): Promise<any> {
  try {
    const response = await apiClient.post(
      'api/member/challenge-upload',
      formData,
      {
        headers: { 'Content-Type': 'multipart/form-data' },
      }
    );
    return response;
  } catch (error) {
    throw error;
  }
}
