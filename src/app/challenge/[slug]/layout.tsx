import Footer from '@/app/(home)/_components/footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Peerfect - Challenge',
  description: 'UI/UX 챌린지의 상세페이지입니다.',
};

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className="mx-auto mt-16 w-full max-w-7xl px-4 md:px-[74px] lg:mt-20 lg:px-[32px] xl:px-8">
        {children}
      </main>
      <Footer />
    </>
  );
}
