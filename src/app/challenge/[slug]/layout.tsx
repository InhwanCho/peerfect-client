import Footer from "@/app/_components/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Peerfect - Challenge",
  description: "UI/UX 챌린지의 상세페이지입니다.",
};

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className="max-w-7xl w-full mx-auto px-4 xl:px-4 md:px-[74px] lg:px-[32px]">
        {children}
      </main>
      <Footer />
    </>
  );
}
