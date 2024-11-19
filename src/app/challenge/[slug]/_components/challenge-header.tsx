'use client';
import { useSearchParams } from "next/navigation";

export default function ChallengeHeader({
  slug,
}: {
  slug: string;
}) {
  const searchParams = useSearchParams();
  const title = searchParams.get("title") || "임시 제목입니다";

  return (
    <header className="m-5 md:m-20 rounded-3xl shadow-md">
      <img      
        src="/assets/challenge/ui_challenge.png"
        alt="ui challenge hero image"
        className="w-full phone:min-h-[120px]"
      />
      <div className="py-5 px-8 md:px-14">
        <h2 className="text-lg font-semibold text-[#8530F1]">#챌린지 {slug}</h2>
        <h1 className="text-2xl font-semibold mt-1 text-gray-900">{title}</h1>
      </div>
    </header>
  );
}
