import apiClient from '@/lib/api-client';
import { removeAuthToken } from '@/lib/token';
import { useUserStore } from '@/store/use-user-store';

export async function deleteMember(memberId: string): Promise<void> {
  try {
    const endpoint = `/api/member/${memberId}/delete`;
    await apiClient.delete(endpoint, { withCredentials: true });
    removeAuthToken();

    const clearUserInfo = useUserStore.getState().clearUserInfo;
    clearUserInfo();
    console.log('회원 탈퇴가 성공적으로 처리되었습니다.');
    window.location.replace('/');
  } catch (error) {
    console.error('회원 탈퇴 중 문제가 발생했습니다:', error);
    throw error; // 에러를 호출한 쪽에서 처리하도록 다시 던짐
  }
}
