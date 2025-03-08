import apiClient from '@/lib/api-client';

export async function uploadUserImage(
  file: File,
  memberId: string
): Promise<{ message: string }> {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('memberId', memberId);

  const response = await apiClient.post('/api/member/img-upload', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });

  return response.data;
}
