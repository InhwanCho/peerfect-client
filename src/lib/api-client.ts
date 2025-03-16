import axios from 'axios';
import { getAuthToken } from './token';

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  // headers: {
  //   'Content-Type': 'application/json',
  // },
  withCredentials: true,
});

// 특정 경로 리스트
const pathsWithoutCredentials = [
  '/api/email/emailCheck',
  '/api/email/verifyCode',
  '/api/member/checkNickName',
  '/api/challenges/ux-preview',
  '/api/challenges/ui-preview',
];

// Request Interceptor 설정
apiClient.interceptors.request.use(
  (config) => {
    // 요청 경로가 특정 경로 리스트에 포함되는지 확인
    if (pathsWithoutCredentials.includes(config.url || '')) {
      config.withCredentials = false; // 해당 요청에서만 withCredentials 비활성화
    } else {
      // AccessToken 가져오기
      const token = getAuthToken();
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`; // Authorization 헤더 추가
      }
    }
    return config;
  },
  (error) => {
    // 요청 에러 처리
    return Promise.reject(error);
  }
);

export default apiClient;
