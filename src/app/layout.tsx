import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { cn } from '../lib/utils';
import Navbar from './_components/navbar';
import { Providers } from './_components/provider/providers';

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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-pt-[100px] scroll-smooth">
      <body className={`${cn('antialiased', fontPretendard.className)}`}>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
