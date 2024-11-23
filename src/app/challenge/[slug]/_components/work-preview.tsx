'use client';

import SvgSquareArrowRight from "@/app/_components/icons/M/SquareArrowRight";
import { useState } from "react";

export default function WorkPreview() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const tem_images = [
    "/assets/challenge/sample_pic.png",
    "/assets/challenge/sample_pic2.png",
    "/assets/challenge/sample_pic3.png",
  ];

  const handleNext = () => {
    setCurrentImage((prev) => (prev + 1) % tem_images.length);
  };

  const handlePrev = () => {
    setCurrentImage((prev) => (prev - 1 + tem_images.length) % tem_images.length);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section>
      <div className="bg-background-secondary/80 p-8 rounded-lg">        
        <button
          className="flex items-center"
          onClick={(e) => {
            e.stopPropagation();
            setIsModalOpen(true);
          }}
        >
          <SvgSquareArrowRight />
          <span className="pl-2 text-text-caption font-medium">
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
          className="w-[350px] h-auto mx-auto my-8 cursor-pointer"
        />
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="relative bg-background-primary rounded-lg h-[90vh] w-[75vw]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-text-secondary text-2xl"
              onClick={closeModal}
            >
              ✕
            </button>
            <div className="w-full h-full flex items-center justify-center">
              <img
                src={tem_images[currentImage]}
                alt="작업물 미리보기"
                className="object-contain w-full h-full"
              />
            </div>
            <button
              className="absolute left-[-30px] top-1/2 transform -translate-y-1/2 text-white text-3xl"
              onClick={handlePrev}
            >
              ❮
            </button>
            <button
              className="absolute right-[-30px] top-1/2 transform -translate-y-1/2 text-white text-3xl"
              onClick={handleNext}
            >
              ❯
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
