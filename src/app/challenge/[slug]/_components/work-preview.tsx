'use client';

import SvgSquareArrowRight from "@/app/_components/icons/M/SquareArrowRight";
import SvgX from "@/app/_components/icons/M/X";
import SvgLeft from "@/app/_components/icons/XL/Left";
import SvgRight from "@/app/_components/icons/XL/Right";
import { useEffect, useState } from "react";

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

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };
    if (isModalOpen) {
      document.addEventListener("keydown", handleKeyDown)
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [isModalOpen]);

  return (
    <section>
      <div className="bg-background-secondary p-8 rounded-2xl">
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
          className="fixed inset-0 bg-[#111111]/80 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="relative bg-background-secondary rounded-lg h-[80vh] px-[180px] w-[1280px]"
          >
            <div
              className="w-full h-full flex items-center justify-center"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <img
                src={tem_images[currentImage]}
                alt="작업물 미리보기"
                className="object-contain w-full h-full"
              />
              <button
                className={`absolute left-10 2xl:-left-[120px] top-1/2 transform -translate-y-1/2 text-white text-3xl`}
                onClick={handlePrev}
              >
                <SvgLeft width={80} height={80} />
              </button>
              <button
                className={`absolute right-10 2xl:right-[-120px] top-1/2 transform -translate-y-1/2 text-white text-3xl`}
                onClick={handleNext}
              >
                <SvgRight width={80} height={80} />
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
