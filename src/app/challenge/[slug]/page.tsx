import ChallengeContent from "./_components/challenge-content";
import ChallengeHeader from "./_components/challenge-header";

interface ChallengeDetailPageProps {
  params: Promise<{ slug: string }>
}

export default async function ChallengeDetailPage({ params }: ChallengeDetailPageProps) {
  const { slug } = await params;

  return (
    <main className="mt-16 lg:mt-20">
      <ChallengeHeader slug={slug} />
      <ChallengeContent slug={slug} />
    </main>
  );
}
