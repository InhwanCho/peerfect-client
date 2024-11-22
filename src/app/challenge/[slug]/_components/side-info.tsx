'use client';

import { useSearchParams } from "next/navigation";

interface SideInfoProps {
  slug: string
}

export default function SideInfo({ slug }: SideInfoProps) {
  const searchParams = useSearchParams();
  const title = searchParams.get("title") || "임시 제목입니다";
  return (
    <aside className="min-w-[300px] max-w-[340px] hidden xl:block ml-16">
      <div className="sticky top-32 bg-white card-container rounded-lg p-6 py-8">
        <div>
          <p className="text-sm text-gray-900 mb-1">#챌린지 {slug}</p>
          <h2 className="text-xl font-bold text-gray-900">{title}</h2>
        </div>
        <div>
          <div className="flex justify-between items-center mt-4">
            <span className="text-sm text-gray-600">등록날짜</span>
            <span className="text-sm font-bold text-gray-800">2024-11-10</span>
          </div>
          <div className="flex justify-between items-center mt-2">
            <span className="text-sm text-gray-600">참여자 수</span>
            <span className="text-sm font-bold text-[#8530F1]">23 명 참가 중</span>
          </div>
          <div className="flex justify-between items-center mt-2">
            <span className="text-sm text-gray-600">난이도</span>
            <div className="flex items-center space-x-1">
              <span>⭐</span>
              <span>⭐</span>
              <span>⭐</span>
              <span>⭐</span>
              <span>⭐</span>
            </div>
          </div>
        </div>
        <button className="w-full my-7 py-3 bg-[#8530F1] text-white rounded-lg font-bold">
          참여하기
        </button>
        <div className="flex items-center justify-between mt-4">
          <button className="flex items-center justify-center w-[46%] h-[40px] py-2 border border-gray-300 rounded-lg text-sm text-gray-500">
            <span>💜</span> <span className="ml-2">찜하기</span>
          </button>
          <button className="flex items-center justify-center w-[46%] h-[40px] py-2 border border-gray-300 rounded-lg text-sm text-gray-500">
            <span>🔗</span> <span className="ml-2">공유하기</span>
          </button>
        </div>
        <p className="text-sm text-gray-400 text-center mt-6 hover:underline underline-offset-4">
          챌린지를 중단할래요
        </p>
      </div>
    </aside>
  );
}