import { useQuery } from '@tanstack/react-query';
import apiClient from '@/lib/api-client';

export interface Review {
  reviewNo: number | null;
  memberId: string | null;
  challengeNo: number;
  reviewLevel: number;
  reviewText: string;
  reviewDate: string;
  reviewWaste: number;
}

export function useChallengeReview(challengeId: string, active: string) {
  return useQuery<Review[]>({
    queryKey: [`${challengeId}-challenge-review`, active],
    queryFn: async () => {
      const endpoint = `/api/challenges/${challengeId}/review`;
      const response = await apiClient.get(endpoint);
      return response.data;
    },
  });
}
