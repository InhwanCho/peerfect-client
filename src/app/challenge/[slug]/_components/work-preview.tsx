'use client';

import SvgSquareArrowRight from '@/app/_components/icons/M/SquareArrowRight';
import SvgX from '@/app/_components/icons/M/X';
import SvgLeft from '@/app/_components/icons/XL/Left';
import SvgRight from '@/app/_components/icons/XL/Right';
import { useEffect, useState } from 'react';

export default function WorkPreview() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const tem_images = [
    '/assets/challenge/sample_pic.png',
    '/assets/challenge/sample_pic2.png',
    '/assets/challenge/sample_pic3.png',
  ];

  const handleNext = () => {
    setCurrentImage((prev) => (prev + 1) % tem_images.length);
  };

  const handlePrev = () => {
    setCurrentImage(
      (prev) => (prev - 1 + tem_images.length) % tem_images.length
    );
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };
    if (isModalOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isModalOpen]);

  return (
    <section>
      <div className="rounded-2xl bg-background-secondary p-8">
        <button
          className="flex items-center"
          onClick={(e) => {
            e.stopPropagation();
            setIsModalOpen(true);
          }}
          aria-label="magnify picture"
        >
          <SvgSquareArrowRight width={24} height={24} />
          <span className="pl-2 font-medium text-text-caption">
            클릭하여 확대
          </span>
        </button>
        <img
          onClick={(e) => {
            e.stopPropagation();
            setIsModalOpen(true);
          }}
          src={tem_images[0]}
          alt="작업물 미리보기"
          className="mx-auto my-8 h-auto w-[350px] cursor-pointer"
        />
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#111111]/80"
          onClick={closeModal}
        >
          <div className="relative h-[80vh] w-[1280px] rounded-lg bg-background-secondary px-[180px]">
            <div
              className="flex size-full items-center justify-center"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <button
                className="absolute right-4 top-4 text-2xl text-text-primary"
                onClick={closeModal}
                aria-label="close button"
              >
                <SvgX />
              </button>
              <img
                src={tem_images[currentImage]}
                alt="작업물 미리보기"
                className="size-full object-contain"
              />
              <button
                className={`absolute left-10 top-1/2 -translate-y-1/2 text-3xl text-white 2xl:-left-[120px]`}
                onClick={handlePrev}
                aria-label="prev button"
              >
                <SvgLeft props={{ width: 80, height: 80 }} />
              </button>
              <button
                className={`absolute right-10 top-1/2 -translate-y-1/2 text-3xl text-white 2xl:right-[-120px]`}
                onClick={handleNext}
                aria-label="next button"
              >
                <SvgRight props={{ width: 80, height: 80 }} />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
