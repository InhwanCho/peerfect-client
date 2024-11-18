import Footer from "@/app/_components/footer";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Footer/>
    </>
  );
}
