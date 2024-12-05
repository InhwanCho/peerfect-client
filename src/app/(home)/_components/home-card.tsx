import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';

interface HomeCardProps {
  className?: string;
  title: string;
  description: string;
  href: string;
  imgSrc: string;
}

export default function HomeCard({
  className,
  title,
  description,
  href,
  imgSrc,
}: HomeCardProps) {
  return (
    <div
      className={cn(
        'relative flex h-[251px] flex-col justify-between rounded-2xl bg-main-purple-7 px-[67px] py-[36px] shadow-card transition-colors hover:bg-[#EBDAFF]',
        className
      )}
    >
      <h2 className="mb-4 text-h2 text-black">{title}</h2>
      <p className="mb-8 w-3/4 text-lg leading-relaxed text-gray-600">
        {description}
      </p>
      <span>
        <Link
          href={href}
          className="text-sm font-medium text-gray-500 hover:underline"
        >
          바로가기 &gt;
        </Link>
      </span>
      <img
        src={imgSrc}
        alt={title === 'UX 챌린지' ? 'chart image' : 'spheres image'}
        aria-label={title === 'UX 챌린지' ? 'chart image' : 'spheres image'}
        className="absolute bottom-[29px] right-[79px] h-[110px] w-[88px]"
      />
    </div>
  );
}
