import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "./_components/lib/utils";
import Navbar from "./_components/navbar";

export const metadata: Metadata = {
  title: "PeerFect",
  description: "peer fect",
};

const fontPretendard = localFont({
  src: "./fonts/PretendardVariable.woff2",
  variable: "--font-pretendard",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cn('antialiased', fontPretendard.className)}`}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
