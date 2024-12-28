import Footer from '@/app/(home)/_components/footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Peerfect - Challenge',
  description: 'UI/UX 챌린지의 상세페이지입니다.',
};

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className="mx-auto mt-10 w-full max-w-7xl px-6 md:mt-[78px] md:px-[32px] xl:px-8">
        {children}
      </main>
      <Footer />
    </>
  );
}
