import { cn } from '@/lib/utils';
import React from 'react';

interface HomeCardProps {
  className?: string;
  title: string;
  description: string;
  subDescription?: string;
  href?: string;
  imgSrc: string;
  isSelected?: boolean; // 선택 여부
  onClick?: () => void; // 클릭 이벤트
}

export default function HomeCard({
  className,
  title,
  description,
  subDescription,
  href,
  imgSrc,
  isSelected = false,
  onClick,
}: HomeCardProps) {
  return (
    <div
      className={cn(
        'relative flex h-[251px] flex-col justify-between rounded-2xl px-[67px] py-[36px] shadow-card transition-colors cursor-pointer',
        isSelected ? 'bg-main-purple-7' : 'bg-white',
        'hover:bg-[#EBDAFF]', // 모든 상태에서 hover 효과 유지
        className
      )}
      onClick={onClick}
    >
      <h2 className="mb-4 text-h2 text-black">{title}</h2>
      <div className="mb-8 w-4/5 text-sm lg:text-lg leading-relaxed text-gray-600">
        <p>{description}</p>
        {subDescription && <p className="pt-1">{subDescription}</p>}
      </div>
      {href && (
        <a
          href={href}
          className="text-sm font-medium text-gray-500 hover:underline"
        >
          바로가기 &gt;
        </a>
      )}
      <img
        src={imgSrc}
        alt={title === 'UX 챌린지' ? 'chart image' : 'spheres image'}
        aria-label={title === 'UX 챌린지' ? 'chart image' : 'spheres image'}
        className="absolute bottom-[29px] right-6 h-[110px] w-[88px] lg:right-10 2xl:right-20"
      />
    </div>
  );
}
