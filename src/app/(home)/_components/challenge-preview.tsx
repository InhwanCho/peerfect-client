import ChallengeCard from '@/app/_components/common/challenge-card';
import CustomButton from '@/app/_components/common/custom-button';
import H3Title from '@/app/_components/common/h3-title';
import { useRouter } from 'next/navigation';

interface ChallengePreviewProps {
  select: string;
}

export default function ChallengePreview({ select }: ChallengePreviewProps) {
  const router = useRouter();
  return (
    <div className="mb-20 flex w-full justify-center py-20 lg:mb-32 2xl:pt-[94px]">
      <div className="flex w-full flex-col px-8 lg:w-[90%] xl:w-3/4">
        {/* 제목 */}
        <H3Title title="챌린지 미리보기" eyes={true} />
        {/* 카드 섹션 */}
        <ChallengeCard />
        {select && (
          <div className="mt-28 flex items-center justify-center text-white">
            <CustomButton
              color={'purple'}
              size="small"
              onClick={() => {
                router.push(`/challenges/${select}?day=5`);
              }}
            >
              {select} 챌린지 참여하기
            </CustomButton>
          </div>
        )}
      </div>
    </div>
  );
}
