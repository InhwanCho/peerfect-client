import { TermsModal } from "@/app/_components/common/modals/terms-modal";
import ArrowIcon from "@/app/_components/icons/arrow-icon";
import CheckIcon from "@/app/_components/icons/check-icon";
import CheckMarkIcon from "@/app/_components/icons/check-mark-icon";
import { useState, useEffect, useRef } from "react";

interface SignupFormProps {
  verifiedEmail: string;
}

enum JobOptions {
  UIUXDesigner = "UI/UX 디자이너",
  FrontEndDeveloper = "Front-end 개발자"
}

export default function EmailSignupForm({ verifiedEmail }: SignupFormProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState<JobOptions | null>(null); 
  const [nickname, setNickname] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<"required" | "optional">("required");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const handleJobSelection = (job: JobOptions) => { 
    setSelectedJob(job);
    setIsDropdownOpen(false);
  };

  const openModal = (content: "required" | "optional") => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center w-full">
      <h2 className="text-2xl font-semibold text-black mb-6">회원가입</h2>
      <div className="w-full max-w-md mx-auto space-y-6">
        
        {/* 이메일 인증된 표시 */}
        <div className="text-left">
          <label className="block text-sm font-medium text-gray-700 mb-1">이메일</label>
          <div className="flex items-center border border-purple-500 rounded-lg px-4 py-3 h-[70px] relative">
            <label className="absolute left-4 top-3 text-gray-500 text-xs">이메일</label>
            <p className="pt-6 bg-white text-gray-800">{verifiedEmail}</p>
            <div className="absolute right-4">
              <CheckIcon color="purple" />
            </div>
          </div>
          <p className="text-purple-500 text-xs mt-1 ml-1">인증된 이메일입니다.</p>
        </div>

        {/* 직군 선택 드롭다운 */}
        <div className="text-left relative" ref={dropdownRef}>
          <label className="block text-sm font-medium text-gray-700 mb-1">직군 선택</label>
          <div
            onClick={toggleDropdown}
            className={`flex items-center justify-between text-sm w-full border rounded-lg p-3 text-gray-800 h-[70px] cursor-pointer select-none ${isDropdownOpen ? "border-purple-500" : selectedJob !== null ? "border-purple-500" : "border-gray-300"
            }`}
          >
            <span>{selectedJob ?? "직군 선택"}</span>
            <ArrowIcon isOpen={isDropdownOpen} color="#B5B5B5" />
          </div>
          {isDropdownOpen && (
            <div className="absolute top-full left-0 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
              <div
                onClick={() => handleJobSelection(JobOptions.UIUXDesigner)}
                className="p-1 cursor-pointer text-left group"
              >
                <div className="rounded-md p-3 transition-all bg-white group-hover:bg-[#F9F4FF]">
                  <span className="group-hover:text-[#8530F1] text-sm">{JobOptions.UIUXDesigner}</span>
                </div>
              </div>
              <div
                onClick={() => handleJobSelection(JobOptions.FrontEndDeveloper)}
                className="p-1 cursor-pointer text-left group"
              >
                <div className="rounded-md p-3 transition-all bg-white group-hover:bg-[#F9F4FF]">
                  <span className="group-hover:text-[#8530F1] text-sm">{JobOptions.FrontEndDeveloper}</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* 닉네임 입력 및 중복 확인 */}
        <div>
          <div className="flex items-center space-x-2 mt-1 relative">
            <div className="w-full relative">
              <input
                type="text"
                placeholder="닉네임을 입력해주세요."
                maxLength={12}
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
                className={`w-full border rounded-lg p-3 text-gray-800 h-[70px] focus:outline-none placeholder:text-sm ${nickname ? "border-purple-500" : "border-gray-300"
                }`}
              />
              <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xs">
                {nickname.length}/12
              </span>
            </div>
            <button
              type="button"
              className="bg-gray-200 text-gray-500 rounded-lg font-medium h-[70px] w-[120px] text-sm"
            >
              중복확인
            </button>
          </div>
          <p className="text-xs text-left text-gray-500 mt-1 ml-1">
            공백 및 특수문자를 제외한 영문, 한글만 사용 가능합니다.
          </p>
        </div>

        {/* 약관 동의 */}
        <div className="text-left">
          <div className="flex justify-between items-center mb-2.5">
            <div className="flex items-center">
              <CheckMarkIcon />
              <label className="pl-2 text-sm font-medium text-gray-700">약관 전체 동의</label>
            </div>
            <ArrowIcon isOpen={false} color="#B5B5B5" />
          </div>
          <div className="space-y-2">
            <div className="flex items-center text-gray-400">
              <CheckIcon />
              <span className="text-sm pl-2">[필수] 피어펙트 서비스 이용 회원 약관</span>
              <button className="text-slate-400 text-xs ml-auto underline" onClick={() => openModal("required")}>
                내용 보기
              </button>
            </div>
            <div className="flex items-center text-gray-400">
              <CheckIcon />
              <span className="text-sm pl-2">[선택] 마케팅 정보 수신</span>
              <button className="text-slate-400 text-xs ml-auto underline" onClick={() => openModal("optional")}>
                내용 보기
              </button>
            </div>
          </div>
        </div>

        {/* 회원가입 버튼 */}
        <button className="w-full bg-gray-200 text-gray-500 text-lg rounded-lg py-3 font-medium mt-4">
          회원가입
        </button>
      </div>

      {/* 모달 창 */}
      {isModalOpen && <TermsModal onClose={closeModal} content={modalContent} />}
    </div>
  );
}
