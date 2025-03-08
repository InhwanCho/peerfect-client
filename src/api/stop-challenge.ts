import apiClient from '@/lib/api-client';

export async function stopChallenge(memberId: string) {
  try {
    const response = await apiClient.put(
      `/api/member/${memberId}/challenges/stop`
    );
    if (response.data === 'success') return response;
  } catch (error) {
    console.error('Error stopping challenge:', error);
    throw error;
  }
}
