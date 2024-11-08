import { cn } from "../_components/lib/utils";
import FormLayout from "./_components/formlayout";
import styles from "./authlayout.module.css";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log(styles.authLayoutHeroImage);
  return (
    <div
      className={cn(styles.authLayoutHeroImage, "relative")}
    >
      <div className="absolute top-[40%] left-[8%] xl:left-[16%] hidden lg:flex flex-col space-y-6 items-center">
        <picture>
          <source srcSet="/assets/auth/auth_hero_logo.webp" type="image/webp" />
          <img src="/assets/auth/auth_hero_logo.png" alt="logo image" />
        </picture>
        <p className="text-[#9c92cc] text-lg tracking-widest">Grow Together, Be Perfect</p>
      </div>
      {children}
    </div>
  );
}
