'use client';

import Footer from '@/app/(home)/_components/footer';
import ChallengesHero from './_components/challenges-hero';
import CompletedChallenges from './_components/completed-challenges';
import MainChallenge from './_components/main-challenge';
import UpcomoingChallenges from './_components/upcomingChallenges';
import { useUserStore } from '@/store/use-user-store';
import { fetchMemberInfo } from '@/hooks/use-member-info';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface ChallengesPageProps {
  params: Promise<{ slug: string }>;
}
export default function ChallengesPage({ params }: ChallengesPageProps) {
  const { memberId, setUserInfo, challengeInfo } = useUserStore();
  const [slug, setSlug] = useState<string | null>(null);
  const router = useRouter();
  useEffect(() => {
    async function initializePage() {
      const resolvedParams = await params;
      setSlug(resolvedParams.slug);

      if (memberId) {
        const fetchedMemberInfo = await fetchMemberInfo(memberId);
        setUserInfo(fetchedMemberInfo);
      }
    }

    initializePage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params, memberId]);

  if (!slug) return <div>Loading...</div>;
  return (
    <div>
      <ChallengesHero slug={slug} />
      <div className="flex w-full justify-center py-20 2xl:pt-[94px]">
        <div className="flex w-full flex-col px-8 lg:w-[90%] xl:w-3/4">
          {slug === 'UX' ? (
            <>
              <MainChallenge select="UX" />
              <UpcomoingChallenges select="UX" />
              <CompletedChallenges select="UX" />
            </>
          ) : (
            <>
              <MainChallenge select="UI" />
              <UpcomoingChallenges select="UI" />
              <CompletedChallenges select="UI" />
            </>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
