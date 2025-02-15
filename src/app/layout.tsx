import type { Metadata } from 'next';
import localFont from 'next/font/local';
import '@/app/globals.css';
import { cn } from '../lib/utils';

import Navbar from './(home)/_components/navbar';
import { Providers } from './_components/provider/providers';
import TokenCheck from './_components/common/token-check';

export const metadata: Metadata = {
  title: 'PeerFect',
  description: 'peer fect',
};

const fontPretendard = localFont({
  src: './fonts/PretendardVariable.woff2',
  variable: '--font-pretendard',
});

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-pt-[100px] scroll-smooth">
      <body className={`${cn('antialiased', fontPretendard.className)}`}>
        <Providers>
          <TokenCheck />
          <Navbar />
          {children}
          {modal}
        </Providers>
      </body>
    </html>
  );
}
