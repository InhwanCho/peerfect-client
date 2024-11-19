import Footer from "@/app/_components/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Peerfect - Challenge",
  description: "UI/UX 챌린지의 상세페이지입니다.",
};

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Footer/>
    </>
  );
}
