import FormLayout from "./_components/formlayout";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full relative bg-[#19161d] overflow-hidden pt-10 xl:pt-6 sm:pt-14">
      {/* 히어로 섹션 */}
      <picture className="w-full h-full object-cover">
        <source srcSet="/assets/auth/auth-hero.webp" type="image/webp" />
        <img src="/assets/auth/auth-hero.png" alt="hero image" className="w-full h-full object-cover" />
      </picture>
      <div className="z-10 ">
        {children}
      </div>      
    </div>
  );
}
