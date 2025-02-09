import apiClient from '@/lib/api-client';

export async function logoutApi(userId: string) {
  try {
    const endpoint = `/api/member/${userId}/delete`;
    const response = await apiClient.delete(endpoint);
    return response.data;
  } catch (error) {
    console.error('로그아웃 API 요청 중 오류 발생:', error);
    throw error;
  }
}
