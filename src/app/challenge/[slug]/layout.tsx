import Footer from "@/app/_components/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "챌린지 상세페이지",
  description: "UI챌린지의 상세페이지입니다.",
};

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Footer/>
    </>
  );
}
