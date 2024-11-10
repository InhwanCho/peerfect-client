import ArrowIcon from "@/app/_components/icons/arrow-icon";
import { useState } from "react";

interface SignupFormProps {
  verifiedEmail: string;
}

export default function EmailSignupForm({ verifiedEmail }: SignupFormProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState("직군 선택");

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const handleJobSelection = (job: string) => {
    setSelectedJob(job);
    setIsDropdownOpen(false);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen px-6 text-center w-full">
      <h2 className="text-2xl font-semibold text-black mb-6">회원가입</h2>
      <div className="w-full max-w-md mx-auto space-y-6">

        {/* 이메일 인증된 표시 */}
        <div className="text-left">
          <label className="block text-sm font-medium text-gray-700 mb-1">이메일</label>
          <div className="flex items-center border border-purple-500 rounded-lg px-4 py-3 h-[70px] relative">
            <label className="absolute left-4 top-3 text-gray-500 text-xs">이메일</label>
            <p className="pt-6 bg-white text-gray-800">{verifiedEmail}</p>
            <div className="absolute right-4">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-purple-500"
              >
                <circle cx="12" cy="12" r="12" fill="#ffffff" />
                <path
                  d="M16 8L10.5 15L8 12.5"
                  stroke="#8530F1"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <p className="text-purple-500 text-xs mt-1 ml-1.5">인증된 이메일입니다.</p>
        </div>

        {/* 직군 선택 드롭다운 */}
        <div className="text-left relative">
          <label className="block text-sm font-medium text-gray-700 mb-1">직군 선택</label>
          <div
            onClick={toggleDropdown}
            className={`flex items-center justify-between w-full border rounded-lg p-3 text-gray-800 bg-white h-[70px] cursor-pointer select-none ${isDropdownOpen ? "border-purple-500" : selectedJob !== "직군 선택" ? "border-purple-500" : "border-gray-300"
            }`}
          >
            <span>{selectedJob}</span>
            <ArrowIcon isOpen={isDropdownOpen} color="#B5B5B5" />
          </div>
          {isDropdownOpen && (
            <div className="absolute top-full left-0 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
              <div
                onClick={() => handleJobSelection("UI/UX 디자이너")}
                className="p-1 cursor-pointer text-left group"
              >
                <div className="rounded-md p-3 transition-all bg-white group-hover:bg-[#F9F4FF]">
                  <span className="group-hover:text-[#8530F1]">UI/UX 디자이너</span>
                </div>
              </div>
              <div
                onClick={() => handleJobSelection("Front-end 개발자")}
                className="p-1 cursor-pointer text-left group"
              >
                <div className="rounded-md p-3 transition-all bg-white group-hover:bg-[#F9F4FF]">
                  <span className="group-hover:text-[#8530F1]">Front-end 개발자</span>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* 닉네임 입력 및 중복 확인 */}
        <form className="flex items-center space-x-2 mt-1">
          <input
            type="text"
            placeholder="닉네임을 입력해주세요"
            maxLength={12}
            className="w-full flex-1 border border-gray-300 rounded-lg p-3 text-gray-800 h-[70px] focus:outline-none focus:border-gray-300"
          />
          <button
            type="button"
            className="bg-gray-200 text-gray-500 rounded-lg font-medium h-[70px] w-[100px]"
          >
            중복확인
          </button>
        </form>
        <p className="text-xs text-left text-gray-500">
          공백 및 특수문자를 제외한 영문, 한글만 사용 가능합니다.
        </p>

        {/* 약관 전체 동의 */}
        <div className="text-left">
          <label className="block text-sm font-medium text-gray-700 mb-1">약관 전체 동의</label>
          <div className="space-y-2">
            <div className="flex items-center text-gray-500">
              <input type="checkbox" className="mr-2" />
              <span className="text-sm">[필수] 피어펙트 서비스 이용 회원 약관</span>
              <button className="text-purple-600 text-xs ml-auto underline">내용 보기</button>
            </div>
            <div className="flex items-center text-gray-500">
              <input type="checkbox" className="mr-2" />
              <span className="text-sm">[선택] 마케팅 정보 수신</span>
              <button className="text-purple-600 text-xs ml-auto underline">내용 보기</button>
            </div>
          </div>
        </div>

        {/* 회원가입 버튼 */}
        <button className="w-full bg-gray-200 text-gray-500 text-lg rounded-lg py-3 font-medium mt-4">
          회원가입
        </button>
      </div>
    </div>
  );
}
