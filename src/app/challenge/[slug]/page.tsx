import ChallengeContent from "./_components/challenge-content";
import ChallengeHeader from "./_components/challenge-header";

interface ChallengeDetailPageProps {
  params: Promise<{ slug: string }>
}

export default async function ChallengeDetailPage({ params }: ChallengeDetailPageProps) {
  const { slug } = await params;

  return (
    <main className="max-w-7xl mt-20 w-full mx-auto px-5 xl:px-0 md:px-20">
      <ChallengeHeader slug={slug} />
      <ChallengeContent slug={slug} />
    </main>
  );
}
