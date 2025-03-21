import SvgDoubleArrowLeft from '@/app/_components/icons/L/DoubleArrowLeft';
import SvgDoubleArrowRight from '@/app/_components/icons/L/DoubleArrowRight';
import SvgArrowLeft from '@/app/_components/icons/M/ArrowLeft';
import SvgArrowRight from '@/app/_components/icons/M/ArrowRight';

interface PaginationProps {
  isAdminPage?: boolean;
}

export default function Pagination({ isAdminPage }: PaginationProps) {
  const currentPage = 1; // 현재 페이지를 설정
  const totalPages = 5; // 총 페이지 수를 설정

  return (
    <section className={`${isAdminPage ? 'my-14' : 'my-[180px]'}`}>
      <div className="flex items-center justify-center space-x-2">
        <button
          className={`flex items-center justify-center rounded-full ${
            isAdminPage ? 'size-[28px]' : 'size-8 phone:size-10 md:size-[52px]'
          } cursor-pointer hover:bg-gray-200`}
          aria-label="First Page"
          disabled={currentPage === 1}
        >
          <SvgDoubleArrowLeft filledColor="#757575" />
        </button>
        <button
          className={`flex items-center justify-center rounded-full ${
            isAdminPage ? 'size-[28px]' : 'size-8 phone:size-10 md:size-[52px]'
          } cursor-pointer hover:bg-gray-200`}
          aria-label="Previous Page"
          disabled={currentPage === 1}
        >
          <SvgArrowLeft filledColor="#757575" />
        </button>
        <div className="flex gap-x-1 px-2">
          {[...Array(totalPages)].map((_, index) => {
            const page = index + 1;
            return (
              <button
                key={page}
                className={`flex items-center justify-center rounded-full font-medium ${
                  isAdminPage
                    ? 'size-[28px]'
                    : 'size-8 phone:size-10 md:size-[52px]'
                } ${
                  currentPage === page
                    ? isAdminPage
                      ? 'bg-black text-white' // AdminPage에서 활성화된 페이지 스타일
                      : 'bg-[#CDA6FF] text-white' // 일반 페이지에서 활성화된 페이지 스타일
                    : isAdminPage
                      ? 'bg-background-primary text-gray-600 transition-colors hover:bg-gray-200' // AdminPage 비활성화 버튼 스타일
                      : 'bg-background-primary text-gray-600 transition-colors hover:bg-[#CDA6FF] hover:text-white' // 일반 비활성화 버튼 스타일
                }`}
                aria-label={`Page ${page}`}
              >
                {page}
              </button>
            );
          })}
        </div>

        <button
          className={`flex items-center justify-center rounded-full ${
            isAdminPage ? 'size-[28px]' : 'size-8 phone:size-10 md:size-[52px]'
          } cursor-pointer hover:bg-gray-200`}
          aria-label="Next Page"
          disabled={true}
        >
          <SvgArrowRight filledColor="#757575" />
        </button>
        <button
          className={`flex items-center justify-center rounded-full ${
            isAdminPage ? 'size-[28px]' : 'size-8 phone:size-10 md:size-[52px]'
          } cursor-pointer hover:bg-gray-200`}
          aria-label="Last Page"
          disabled={true}
        >
          <SvgDoubleArrowRight filledColor="#757575" />
        </button>
      </div>
    </section>
  );
}
