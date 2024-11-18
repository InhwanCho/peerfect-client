/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export const MainLogo = () => (
  <Link href="/" className="w-[150px] sm:w-[170px] flex items-center">
    <picture className="mr-5">
      <source srcSet="/assets/nav/logo.webp" type="image/webp" />
      <img src="/assets/nav/logo.png" alt="logo image" className="mr-4" />
    </picture>
    <picture>
      <source srcSet="/assets/auth/auth_hero_logo.png" type="image/webp"/>
      <img src="/assets/auth/auth_hero_logo.png" alt="logo image" className="w-[110px]"/>
    </picture>
  </Link>
);