import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="h-[450px] bg-black px-4 py-8 md:px-16">
      <div className="mx-auto flex h-full max-w-7xl flex-col items-center justify-around md:flex-row">
        {/* 왼쪽 섹션 */}
        <div className="flex flex-col items-center justify-center space-y-6">
          <Link className="h-[55px] w-[177px]" href="/">
            <img src="/assets/nav/logo-with-text.png" alt="logo" />
          </Link>
          <p className="text-sm tracking-widest text-white lg:text-lg">
            Grow Together, Be Perfect
          </p>
          <div className="flex">
            <p className="text-sm text-text-caption">Contact.</p>
            <a
              href="mailto:email@peerfect.io"
              className="pl-6 text-sm text-text-caption transition hover:text-white"
            >
              email@peerfect.io
            </a>
          </div>
        </div>

        {/* 오른쪽 섹션 */}
        <div className="mt-6 flex space-x-6 md:mt-0">
          <a
            href="#"
            className="text-sm text-text-caption transition hover:text-white"
          >
            이용약관
          </a>
          <a
            href="#"
            className="text-sm text-text-caption transition hover:text-white"
          >
            개인정보처리방침
          </a>
          <a
            href="#"
            className="text-sm text-text-caption transition hover:text-white"
          >
            Team Peerfect
          </a>
        </div>
      </div>
    </footer>
  );
}
