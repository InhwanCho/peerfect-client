import { useMutation } from '@tanstack/react-query';
import { uploadChallenge } from '@/api/upload-challenge';

export const useUploadChallenge = () => {
  return useMutation({
    mutationFn: (formData: FormData) => uploadChallenge(formData),
    onSuccess: (data) => {
      console.log('업로드 성공', data);
      // 업로드 성공 후 추가 작업(예: 페이지 이동, 알림 등)을 넣을 수 있습니다.
      alert('업로드 성공');
    },
    onError: (error: any) => {
      console.error('업로드 실패', error);
      // 실패 시 추가 작업을 넣을 수 있습니다.
    },
  });
};
