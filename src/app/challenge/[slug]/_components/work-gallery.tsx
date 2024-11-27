'use client';

import SvgArrowDown from "@/app/_components/icons/S/ArrowDown";
import PageNation from "./pagenation";
import { useState } from "react";
import CustomModal from "@/app/_components/common/modals/custom-modal";
import SvgFilledStar from "@/app/_components/icons/M/FilledStar";
import CustomToggle from "@/app/_components/common/custom-toggle";
import WorkCard from "@/app/_components/common/work-card";

interface WorkData {
  id: number;
  title: string;
  designer: string;
  user: string;
  date: string;
  tools: string[];
  duration: string;
  difficulty: number; // 별점 1~5
  description: string;
  link: string;
}

export default function WorkGallery() {
  const dummyData: WorkData[] = Array(8).fill(null).map((_, index) => ({
    id: index,
    title: `작업 제목 ${index + 1}`,
    designer: "디자이너",
    user: `평범이 님`,
    date: "2024-01-01",
    tools: ["Figma", "Illustrator"],
    duration: "2일",
    difficulty: 4,
    description: "이 작업은 피드백과 함께 완성되었습니다.",
    link: "https://example.com",
  }));

  const [isDesignSelected, setIsDesignSelected] = useState(true);

  const handleToggle = () => {
    setIsDesignSelected((prev) => !prev);
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentWork, setCurrentWork] = useState<WorkData | null>(null);

  const handleOpenModal = (index: number) => {
    setCurrentWork(dummyData[index]);
    setIsModalOpen(true);
  };

  const handleNext = () => {
    if (currentWork) {
      const currentIndex = dummyData.findIndex((work) => work.id === currentWork.id);
      setCurrentWork(dummyData[(currentIndex + 1) % dummyData.length]);
    }
  };

  const handlePrev = () => {
    if (currentWork) {
      const currentIndex = dummyData.findIndex((work) => work.id === currentWork.id);
      setCurrentWork(dummyData[(currentIndex - 1 + dummyData.length) % dummyData.length]);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentWork(null);
  };

  return (
    <section className="pr-6">
      <img
        src="/assets/challenge/otherworks.webp"
        alt="서로의 작업물을 공유하고, 피드백을 나눠 보세요"
        className="w-full"
      />
      <header className="flex justify-between mb-[60px] mt-20">
        <h2 className="text-xl font-bold text-text-primary mb-6">후기
          <span className="text-text-tertiary"> {dummyData.length}개</span>
        </h2>
        <button className="flex pr-4 items-center">
          <span className="pr-4 text-text-primary">최신순</span>
          <SvgArrowDown isOpen={false} filledColor="#222222" />
        </button>
      </header>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-y-20 gap-x-10">
        {dummyData.map((work, index) => (
          <WorkCard key={work.id} work={work} onClick={() => handleOpenModal(index)} />
        ))}
      </div>
      <PageNation />

      {/* CustomModal */}
      {currentWork && (
        <CustomModal
          isOpen={isModalOpen}
          xButton={true}
          onClose={closeModal}
          onNext={handleNext}
          onPrev={handlePrev}
        >
          <CustomToggle
            isActive={isDesignSelected}
            onToggle={handleToggle}
            variant="button"
            activeText="디자인 작업물"
            inactiveText="피드백"
          />

          <div className="px-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-main-primary text-sm font-medium">
                #챌린지 00 {`[작품] ${currentWork.title}`}
              </h3>
              <span className="text-gray-500 text-sm">{currentWork.date}</span>
            </div>
            <h1 className="text-h2 text-text-primary font-semibold mb-2">{currentWork.title}</h1>
            <p className="text-sm text-gray-600 mb-4">디자이너 {currentWork.designer}</p>
            <div className="w-full h-[400px] bg-gray-200 rounded-lg mb-4"></div>
            <p className="text-gray-600 text-sm">{currentWork.description}</p>
            <div className="mt-6">
              <div className="flex flex-wrap items-center mb-4">
                <div className="flex items-center space-x-2">
                  <p className="text-gray-500 text-sm w-[100px]">사용한 툴</p>
                  <div className="flex flex-wrap gap-2">
                    {currentWork.tools.map((tool, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 text-sm bg-gray-100 border border-gray-300 rounded-full text-gray-800"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                {/* 소요 시간 */}
                <div className="flex items-center">
                  <p className="text-gray-500 text-sm w-[100px]">소요 시간</p>
                  <p className="text-text-primary text-sm">{currentWork.duration}</p>
                </div>

                {/* 난이도 */}
                <div className="flex items-center">
                  <p className="text-gray-500 text-sm w-[100px]">난이도</p>
                  <div className="flex">
                    <SvgFilledStar />
                  </div>
                </div>

                {/* 작업 링크 */}
                <div className="flex items-center">
                  <p className="text-gray-500 text-sm w-[100px]">작업 링크</p>
                  <a
                    href={currentWork.link}
                    className="text-main-primary text-sm underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    링크
                  </a>
                </div>
              </div>
            </div>

          </div>
        </CustomModal>
      )}
    </section>
  );
}
