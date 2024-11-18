/* eslint-disable @next/next/no-img-element */
import { MainLogo } from "./icons/logo-icon";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8 px-4 md:px-16 h-[450px]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-around items-center h-full">
        {/* 왼쪽 섹션 */}
        <div className="flex items-center flex-col  justify-center space-y-6">
          {/* 로고 with text */}
          <MainLogo/>
          <p className="text-white text-sm lg:text-lg tracking-widest">Grow Together, Be Perfect</p>
          <div className="flex ">
            <p className="text-sm">Contact.</p>
            <a
              href="mailto:email@peerfect.io"
              className="text-sm text-gray-200 hover:text-white transition pl-6"
            >
            email@peerfect.io
            </a>
          </div>
        </div>

        {/* 오른쪽 섹션 */}
        <div className="flex space-x-6 mt-6 md:mt-0">
          <a
            href="#"
            className="text-sm text-gray-400 hover:text-white transition"
          >
            이용약관
          </a>
          <a
            href="#"
            className="text-sm text-gray-400 hover:text-white transition"
          >
            개인정보처리방침
          </a>
          <a
            href="#"
            className="text-sm text-gray-400 hover:text-white transition"
          >
            Team Peerfect
          </a>
        </div>
      </div>
    </footer>
  );
}
