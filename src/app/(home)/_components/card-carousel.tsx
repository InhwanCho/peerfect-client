'use client';
import SvgLeft from '@/app/_components/icons/XL/Left';
import SvgRight from '@/app/_components/icons/XL/Right';
import { useState } from 'react';

interface CardCarouselProps {
  images: string[];
}

export default function CardCarousel({ images }: CardCarouselProps) {
  const extendedImages = [
    ...images,
    ...images,
    ...images,
    ...images,
    ...images,
  ];
  const [currentIndex, setCurrentIndex] = useState(images.length); // 현재 인덱스
  const [isAnimating, setIsAnimating] = useState(false);

  const handleNext = () => {
    if (isAnimating) return; // 애니메이션 중이면 클릭 방지
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const handlePrev = () => {
    if (isAnimating) return; // 애니메이션 중이면 클릭 방지
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  const handleTransitionEnd = () => {
    setIsAnimating(false);

    // 끝에 도달했을 때 무한 루프 유지 (첫 번째나 마지막 이미지로 회귀)
    if (currentIndex >= extendedImages.length - images.length) {
      setCurrentIndex(images.length); // 실제 첫 번째 위치로 이동
    } else if (currentIndex < images.length) {
      setCurrentIndex(extendedImages.length - 2 * images.length); // 실제 마지막 위치로 이동
    }
  };

  // 현재 슬라이드 계산 (1부터 시작)
  const currentSlide = ((currentIndex - images.length) % images.length) + 1;

  return (
    <div className="relative hidden w-full select-none overflow-hidden md:block">
      {/* 상태 기반 슬라이드 번호 */}
      <div className="absolute bottom-3 left-8 z-50 flex items-center justify-center rounded-full bg-[#111111]/20 lg:bottom-9 lg:left-[8%] lg:h-[50px] lg:w-[125px] xl:left-[15%]">
        <p className="flex gap-x-2.5 px-10 py-3 text-small lg:text-subtitle2">
          <span className="text-gray-400">{currentSlide}</span>
          <span className="text-gray-300">/</span>
          <span className="text-gray-300">{images.length}</span>
        </p>
      </div>
      {/* 이미지 리스트 */}
      <div
        className={`flex transition-transform duration-500 ease-in-out`}
        onTransitionEnd={handleTransitionEnd}
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {extendedImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className="w-full shrink-0"
          />
        ))}
      </div>

      {/* 이전 버튼 */}
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2"
        onClick={handlePrev}
        aria-label="prev button"
      >
        <SvgLeft props={{ width: 80, height: 80 }} />
      </button>

      {/* 다음 버튼 */}
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2"
        onClick={handleNext}
        aria-label="next button"
      >
        <SvgRight props={{ width: 80, height: 80 }} />
      </button>
    </div>
  );
}
