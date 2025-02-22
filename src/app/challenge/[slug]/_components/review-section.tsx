'use client';

import { useState } from 'react';
import DropdownButton from '@/app/_components/common/dropdown-filter';
import SvgFilledStar from '@/app/_components/icons/M/FilledStar';
import { useSearchParams } from 'next/navigation';
import { useChallengeReview } from '@/hooks/use-challenge-review';

interface ReviewSectionProps {
  slug: string;
}

export default function ReviewSection({ slug }: ReviewSectionProps) {
  const [selectedOrder, setSelectedOrder] = useState('최신순');
  const searchParams = useSearchParams();
  const active = searchParams.get('active') || 'ux';

  const {
    data: reviews,
    isLoading,
    isError,
  } = useChallengeReview(slug, active);

  const handleOrderChange = (order: string) => {
    setSelectedOrder(order);
  };

  if (isLoading) {
    return <p>로딩중...</p>;
  }
  if (isError) {
    return <p>후기를 불러오지 못했습니다.</p>;
  }

  return (
    <section id="review">
      <header className="flex justify-between">
        <h2 className="mb-6 text-xl font-bold text-text-primary">
          후기{' '}
          <span className="text-text-tertiary"> {reviews?.length ?? 0}개</span>
        </h2>
        <DropdownButton
          options={['최신순', '인기순']}
          selectedOption={selectedOrder}
          onSelect={handleOrderChange}
        />
      </header>
      <div className="space-y-4">
        {reviews && reviews.length > 0 ? (
          reviews.map((review, index) => (
            <div
              key={index}
              className="card-container flex flex-col gap-y-3.5 rounded-xl bg-background-primary px-8 py-4 phone:px-14 phone:py-10"
            >
              <div className="flex items-center justify-between text-body">
                <p className="text-text-secondary">
                  디자이너{' '}
                  <span className="font-semibold text-text-primary">
                    {review.memberId ? `(${review.memberId})` : '(이름)님'}
                  </span>
                </p>
                <time className="text-text-tertiary">
                  {new Date(review.reviewDate).toLocaleDateString()}
                </time>
              </div>
              <div>
                <p className="flex items-center text-body text-text-secondary">
                  소요시간{' '}
                  <span className="pl-1.5 font-semibold text-text-primary">
                    {review.reviewWaste}일
                  </span>
                  <span className="pl-8">난이도</span>
                  <span className="flex gap-x-1 pl-2.5">
                    {Array.from({ length: review.reviewLevel }).map((_, i) => (
                      <SvgFilledStar key={i} />
                    ))}
                  </span>
                </p>
              </div>
              {/* 후기 내용 */}
              <p className="leading-relaxed text-text-primary">
                {review.reviewText}
              </p>
            </div>
          ))
        ) : (
          <p>등록된 후기가 없습니다.</p>
        )}
      </div>
    </section>
  );
}
