import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
export default function Navbar() {
  return (
    <header className="w-[1920px] h-[90px] px-80 bg-[#111111] justify-between items-center inline-flex">
      <div className="justify-start items-center gap-[86px] flex">
        <Link href={'/'} className="w-[177px] h-[55px] justify-center items-center gap-[20px] flex">          
          <img src="/assets/nav_logo/main_logo.svg" alt="logo image" />
          <img src="/assets/nav_logo/main_text_logo.svg" alt="logo text peerFact" />
          <div className="w-[100.40px] h-[21.38px] relative flex-col justify-start items-start flex">
          </div>
        </Link>
        <div className="justify-start items-center gap-[17px] flex">
          <nav className="justify-start items-center flex">
            <div className="pr-[13px] justify-start items-center flex">
              <div className="text-center text-white text-lg font-semibold font-['Pretendard'] leading-[25.20px]">챌린지</div>
            </div>
            <img src="/assets/nav_logo/arrow_down.svg" alt="arrow down image" />
            <div className="w-6 h-6 relative text-white" />
          </nav>
          <nav className="pl-[17px] pr-[52px] justify-start items-center flex">
            <div className="text-center text-white text-lg font-semibold font-['Pretendard'] leading-[25.20px]">작업물</div>
          </nav>
        </div>
      </div>
      <div className="justify-start items-end gap-[30px] flex">
        <img alt="alarm bell" src="/assets/nav_logo/bell.svg" className="w-6 h-6 relative" />
        <div className="justify-start items-center gap-4 flex">
          <nav className="text-center text-white text-base font-semibold font-['Pretendard'] leading-snug">로그인 / 회원가입</nav>
        </div>
      </div>
    </header>
  );
}
