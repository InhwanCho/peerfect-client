import { Metadata } from 'next';
import { cn } from '../../lib/utils';
import styles from './authlayout.module.css';

export const metadata: Metadata = {
  title: 'Peerfect - login',
  description: 'peer fect auth page',
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={cn('relative', styles.authLayoutHeroImage)}>
      <div className="absolute top-[40%] hidden flex-col items-center space-y-6 lg:left-[4%] lg:flex xl:left-[10%] 2xl:left-[16%]">
        <picture className="lg:w-3/5 xl:w-4/5 2xl:w-full">
          <source srcSet="/assets/auth/auth_hero_logo.webp" type="image/webp" />
          <img src="/assets/auth/auth_hero_logo.png" alt="logo image" />
        </picture>
        <p className="text-sm tracking-widest text-[#9c92cc] lg:text-lg">
          Grow Together, Be Perfect
        </p>
      </div>
      {children}
    </div>
  );
}
