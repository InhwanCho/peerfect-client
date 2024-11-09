import Link from 'next/link';
import React from 'react';

const tasks = [
  { name: '이메일 로그인', completed: false, percentage: 10 },
  { name: '이메일 회원가입', completed: false, percentage: 0 },
  { name: '소셜로그인', completed: false, percentage: 0 },
  { name: '소셜 회원가입', completed: false, percentage: 0 },
  { name: '마이페이지', completed: false, percentage: 0 },
  { name: '작업물화면-작업물 필터링', completed: false, percentage: 0 },
  { name: '작업물화면- 작업물 정렬', completed: false, percentage: 0 },
  { name: '작업물화면-전체 작업물 (최신 순)', completed: false, percentage: 0 },
  { name: '프론트엔드-챌린지 필터링', completed: false, percentage: 0 },
  { name: '프론트엔드 챌린지 화면- 챌린지 정렬', completed: false, percentage: 0 },
  { name: '프론트엔드 챌린지화면-전체 챌린지', completed: false, percentage: 0 },
  { name: '디자인 챌린지화면-챌린지 필터링', completed: false, percentage: 0 },
  { name: '디자인 챌린지화면- 챌린지 정렬', completed: false, percentage: 0 },
  { name: '디자인 챌린지화면- 전체 챌린지', completed: false, percentage: 0 },
  { name: '홈화면 - 튜토리얼 배너', completed: false, percentage: 0 },
  { name: '홈화면-최근 업로드 된 작업물', completed: false, percentage: 0 },
  { name: '홈화면- 인기챌린지', completed: false, percentage: 0 },
];

export default function HomePage() {
  return (
    <div className='bg-red-100 p-4 px-60 min-h-[calc(100vh-90px)]'>
      <h1 className='text-2xl font-bold mb-6'>작업 진행 상황</h1>
      <p>현재 작업페이지 : 이메일 회원가입 </p>
      <p className='mb-6'>navbar의
        <Link href="/auth" className='font-semibold'> &apos;로그인/회원가입&apos; </Link>
        <span>클릭 시 확인 가능</span>
      </p>
      <table className='min-w-full bg-white'>
        <thead>
          <tr>
            <th className='py-2 px-4 border-b'>항목</th>
            <th className='py-2 px-4 border-b'>완료 여부</th>
            <th className='py-2 px-4 border-b'>진행률</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr key={index} className='text-center'>
              <td className='border px-4 py-2'>{task.name}</td>
              <td className='border px-4 py-2'>
                {task.completed ? '✅ 완료' : task.percentage > 0 ? "진행 중" : '미완료'}
              </td>
              <td className='border px-4 py-2'>{task.percentage}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
