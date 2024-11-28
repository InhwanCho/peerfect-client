'use client';

import CustomButton from "@/app/_components/common/custom-button";
import SvgConnectionThreeDots from "@/app/_components/icons/M/ConnectionThreeDots";
import SvgFilledStar from "@/app/_components/icons/M/FilledStar";
import SvgHalfStar from "@/app/_components/icons/M/HalfStar";
import SvgHeartEmpty from "@/app/_components/icons/M/HeartEmpty";
import { useRouter, useSearchParams } from "next/navigation";

interface SideInfoProps {
  slug: string
}

export default function SideInfo({ slug }: SideInfoProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const title = searchParams.get("title") || "임시 제목입니다";

  return (
    <aside className="w-[340px] hidden xl:block ml-14">
      <div className="sticky top-32 bg-background-primary card-container rounded-lg px-7 py-8">
        <div>
          <p className="text-sm text-text-primary mb-1">#챌린지 {slug}</p>
          <h2 className="text-xl font-bold text-black">{title}</h2>
        </div>
        <div >
          <div className="flex justify-between items-center mt-4">
            <span className="text-sm text-gray-600">등록날짜</span>
            <span className="text-sm font-bold text-text-primary">2024-11-10</span>
          </div>
          <div className="flex justify-between items-center mt-2">
            <span className="text-sm text-gray-600">참여자 수</span>
            <span className="text-sm font-bold text-main-primary">23 명 참가 중</span>
          </div>
          <div className="flex justify-between items-center mt-2">
            <span className="text-sm text-gray-600">난이도</span>
            <div className="flex items-center space-x-1">
              {[0, 0, 0].map((_, i) =>
                <SvgFilledStar key={i} />
              )}
              <SvgHalfStar />
              <SvgFilledStar filledColor="#E0E0E0" />
            </div>
          </div>
        </div>
        <CustomButton onClick={() => { router.push(`${slug}/upload`) }} color="purple" className="my-10">참여하기</CustomButton>
        <div className="flex items-center justify-between">
          <button className="flex items-center justify-center w-[46%] h-[40px] py-2 border border-gray-300 rounded-lg text-sm text-gray-600">
            <SvgHeartEmpty filledColor="#AC6BFF" props={{ width: 22, height: 22 }} /> <span className="ml-2">찜하기</span>
          </button>
          <button className="flex items-center justify-center w-[46%] h-[40px] py-2 border border-gray-300 rounded-lg text-sm text-gray-600">
            <SvgConnectionThreeDots filledColor="#AC6BFF" props={{ width: 22, height: 22 }} /> <span className="ml-2">공유하기</span>
          </button>
        </div>
        <p className="text-sm text-text-caption text-center mt-6 flex justify-center ">
          <span className="hover:underline underline-offset-4 cursor-pointer hover:text-text-primary transition-all duration-200 decoration-current">
            챌린지를 중단할래요
          </span>
        </p>
      </div>
    </aside>
  );
}
