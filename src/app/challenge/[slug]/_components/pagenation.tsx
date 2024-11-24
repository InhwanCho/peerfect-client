import SvgDoubleArrowLeft from '@/app/_components/icons/L/DoubleArrowLeft';
import SvgDoubleArrowRight from '@/app/_components/icons/L/DoubleArrowRight';
import SvgArrowLeft from '@/app/_components/icons/M/ArrowLeft';
import SvgArrowRight from '@/app/_components/icons/M/ArrowRight';

export default function Pagination() {
  const currentPage = 1; // 현재 페이지를 설정
  const totalPages = 5; // 총 페이지 수를 설정

  return (
    <section className='my-[180px]'>
      <div className="flex items-center justify-center space-x-2">
        <button
          className="flex items-center justify-center w-[52px] h-[52px] rounded-full hover:bg-gray-200 cursor-pointer"
          aria-label="First Page"
          disabled={currentPage === 1}
        >
          <SvgDoubleArrowLeft filledColor='#757575' />
        </button>
        <button
          className="flex items-center justify-center w-[52px] h-[52px] rounded-full hover:bg-gray-200 cursor-pointer"
          aria-label="Previous Page"
          disabled={currentPage === 1}
        >
          <SvgArrowLeft filledColor='#757575' />
        </button>
        <div className='flex px-2 gap-x-1'>
          {[...Array(totalPages)].map((_, index) => {
            const page = index + 1;
            return (
              <button
                key={page}
                className={`flex items-center justify-center w-[52px] h-[52px] rounded-full font-medium ${currentPage === page
                  ? 'bg-[#CDA6FF] text-white' // 활성화된 페이지 스타일
                  : 'bg-background-primary text-gray-600 hover:bg-[#CDA6FF] hover:text-white transition-colors'
                }`}
                aria-label={`Page ${page}`}
              >
                {page}
              </button>
            );
          })}
        </div>
        <button
          className="flex items-center justify-center w-[52px] h-[52px] rounded-full hover:bg-gray-200 cursor-pointer"
          aria-label="Next Page"
          disabled={true}
        >
          <SvgArrowRight filledColor='#757575' />
        </button>
        <button
          className="flex items-center justify-center w-[52px] h-[52px] rounded-full hover:bg-gray-200 cursor-pointer"
          aria-label="Last Page"
          disabled={true}
        >
          <SvgDoubleArrowRight filledColor='#757575' />
        </button>
      </div>
    </section>
  );
}
