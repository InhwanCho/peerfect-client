import { Metadata } from 'next';
import Footer from '../(home)/_components/footer';

export const metadata: Metadata = {
  title: 'Peerfect - Admin',
  description: 'Peerfect 관리자 페이지입니다',
};

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className="min-h-[calc(100vh-90px)]">
        <div className="mx-auto px-20 xl:w-3/4 xl:px-0">{children}</div>
      </main>
      <Footer />
    </>
  );
}
