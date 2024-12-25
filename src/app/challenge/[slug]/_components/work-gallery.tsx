'use client';

import { useState } from 'react';
import CustomModal from '@/app/_components/common/modals/custom-modal';
import SvgFilledStar from '@/app/_components/icons/M/FilledStar';
import CustomToggle from '@/app/_components/common/custom-toggle';
import WorkCard from '@/app/_components/common/work-card';
import DropdownFilter from '@/app/_components/common/dropdown-filter';
import { useRouter } from 'next/navigation';
import Pagination from './pagination';

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

interface WorkGalleryProps {
  slug: string;
}

export default function WorkGallery({ slug }: WorkGalleryProps) {
  const dummyData: WorkData[] = Array(8)
    .fill(null)
    .map((_, index) => ({
      id: index,
      title: `작업 제목 ${index + 1}`,
      designer: '디자이너',
      user: `평범이 님`,
      date: '2024-01-01',
      tools: ['Figma', 'Illustrator'],
      duration: '2일',
      difficulty: 4,
      description: '이 작업은 피드백과 함께 완성되었습니다.',
      link: 'https://example.com',
    }));

  const [isDesignSelected, setIsDesignSelected] = useState(true);
  const [selectedOrder, setSelectedOrder] = useState('최신순');
  const orderOptions = ['최신순', '인기순'];

  const handleOrderChange = (order: string) => {
    setSelectedOrder(order);
  };

  const handleToggle = () => {
    setIsDesignSelected((prev) => !prev);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentWork, setCurrentWork] = useState<WorkData | null>(null);

  const router = useRouter();

  const handleOpenModal = (id: number) => {
    router.push(`/challenge/${slug}/work/${id}`, { scroll: false });
  };

  const handleNext = () => {
    if (currentWork) {
      const currentIndex = dummyData.findIndex(
        (work) => work.id === currentWork.id
      );
      setCurrentWork(dummyData[(currentIndex + 1) % dummyData.length]);
    }
  };

  const handlePrev = () => {
    if (currentWork) {
      const currentIndex = dummyData.findIndex(
        (work) => work.id === currentWork.id
      );
      setCurrentWork(
        dummyData[(currentIndex - 1 + dummyData.length) % dummyData.length]
      );
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentWork(null);
  };

  return (
    <section>
      {/* TODO : UI 따로 만들어야됨 */}
      <img
        src="/assets/challenge/otherworks.webp"
        alt="서로의 작업물을 공유하고, 피드백을 나눠 보세요"
        className="h-[230px] w-full lg:h-auto"
      />
      <header className="mb-[60px] mt-20 flex justify-between">
        <h2 className="mb-6 text-xl font-bold text-text-primary">
          후기 <span className="text-text-tertiary"> {dummyData.length}개</span>
        </h2>
        <DropdownFilter
          galleryPage
          options={orderOptions}
          selectedOption={selectedOrder}
          onSelect={handleOrderChange}
        />
      </header>
      <div className="grid grid-cols-2 gap-x-10 gap-y-20 sm:grid-cols-3 lg:grid-cols-4">
        {dummyData.map((work, index) => (
          <WorkCard
            key={work.id}
            work={work}
            onClick={() => handleOpenModal(index)}
          />
        ))}
      </div>
      <Pagination />

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
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-sm font-medium text-main-primary">
                {`#챌린지 00 ${currentWork.title}`}
              </h3>
              <time className="text-sm text-gray-500">{currentWork.date}</time>
            </div>
            <h1 className="mb-2 text-h2 font-semibold text-text-primary">
              {currentWork.title}
            </h1>
            <p className="mb-4 text-sm text-gray-600">{currentWork.designer}</p>
            <div className="mb-4 h-[400px] w-full rounded-lg bg-gray-200"></div>
            <p className="text-sm text-gray-600">{currentWork.description}</p>
            <div className="mt-6">
              <div className="mb-4 flex flex-wrap items-center">
                <div className="flex items-center space-x-2">
                  <p className="w-[100px] text-sm text-gray-500">사용한 툴</p>
                  <div className="flex flex-wrap gap-2">
                    {currentWork.tools.map((tool, i) => (
                      <span
                        key={i}
                        className="rounded-full border border-gray-300 bg-gray-100 px-4 py-2 text-sm text-gray-800"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                {/* 소요 시간 */}
                <div className="flex items-center">
                  <p className="w-[100px] text-sm text-gray-500">소요 시간</p>
                  <p className="text-sm text-text-primary">
                    {currentWork.duration}
                  </p>
                </div>

                {/* 난이도 */}
                <div className="flex items-center">
                  <p className="w-[100px] text-sm text-gray-500">난이도</p>
                  <div className="flex">
                    <SvgFilledStar />
                    <SvgFilledStar />
                    <SvgFilledStar />
                  </div>
                </div>

                {/* 작업 링크 */}
                <div className="flex items-center">
                  <p className="w-[100px] text-sm text-gray-500">작업 링크</p>
                  <a
                    href={currentWork.link}
                    className="text-body text-[#0B74F0]"
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
