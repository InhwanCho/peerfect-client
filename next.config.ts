const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's3.ap-northeast-2.amazonaws.com',
        pathname: '/peerfect.kr/profile-images/**',
      },
      {
        protocol: 'https',
        hostname: 'peerfect.kr.s3.ap-northeast-2.amazonaws.com',
        pathname: '/profile-images/**',
      },
    ],
  },
  // async rewrites() {
  //   return [
  //     {
  //       source: '/api/:path*', // 클라이언트 요청 경로
  //       destination: 'http://15.165.184.154:8008/:path*', // 실제 백엔드 경로
  //     },
  //   ];
  // },
};

export default nextConfig;
