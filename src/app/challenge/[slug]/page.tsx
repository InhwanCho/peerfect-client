import ChallengeContent from "./_components/challenge-content";
import ChallengeHeader from "./_components/challenge-header";

interface ChallengeDetailPageProps {
  params: Promise<{ slug: string }>
}

export default async function ChallengeDetailPage({ params }: ChallengeDetailPageProps) {
  const { slug } = await params;

  return (
    <main className="max-w-7xl mt-16 lg:mt-20 w-full mx-auto px-4 xl:px-4 md:px-[74px] lg:px-[32px]">
      <ChallengeHeader slug={slug} />
      <ChallengeContent slug={slug} />
    </main>
  );
}
