import Footer from '@/app/(home)/_components/footer';
import ChallengesHero from './_components/challenges-hero';
import CompletedChallenges from './_components/completed-challenges';
import MainChallenge from './_components/main-challenge';
import UpcomoingChallenges from './_components/upcomingChallenges';

interface ChallengesPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ChallengesPage({ params }: ChallengesPageProps) {
  const { slug } = await params;
  return (
    <div>
      <ChallengesHero slug={slug} />
      <div className="flex w-full justify-center py-20 2xl:pt-[94px]">
        <div className="flex w-full flex-col px-8 lg:w-[90%] xl:w-3/4">
          {slug === 'UX' ? (
            <>
              <MainChallenge />
              <UpcomoingChallenges />
              <CompletedChallenges />
              <CompletedChallenges isNoCard />
            </>
          ) : (
            <div>{slug} 섹션은 미구현</div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
