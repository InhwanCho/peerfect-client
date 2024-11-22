import { Metadata } from "next";
import { cn } from "../_components/lib/utils";
import styles from "./authlayout.module.css";

export const metadata: Metadata = {
  title: "Peerfect - login",
  description: "peer fect auth page",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <div
      className={cn("relative", styles.authLayoutHeroImage)}
    >
      <div className="absolute top-[40%] lg:left-[4%] xl:left-[10%] 2xl:left-[16%] hidden lg:flex flex-col space-y-6 items-center">
        <picture className="lg:w-3/5 xl:w-4/5 2xl:w-full">
          <source srcSet="/assets/auth/auth_hero_logo.webp" type="image/webp" />
          <img src="/assets/auth/auth_hero_logo.png" alt="logo image" />
        </picture>
        {/* text-[#9c92cc] */}
        <p className="text-[#9c92cc] text-sm lg:text-lg tracking-widest">
          Grow Together, Be Perfect</p>
      </div>
      {children}
    </div>
  );
}
