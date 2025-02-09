import apiClient from '@/lib/api-client';

export async function startChallenge(
  challengeNo: number,
  userId: string
): Promise<void> {
  try {
    const endpoint = `/api/challenges/${challengeNo}/member/${userId}/start`;
    const response = await apiClient.put(endpoint);
    console.log('Challenge started successfully:', response.data);
  } catch (error) {
    console.error('Error starting challenge:', error);
    throw error;
  }
}
