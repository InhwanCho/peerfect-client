'use client';
import { ArrowSquareIcon } from "@/app/_components/icons/arrow-square-icon";
import CheckMarkIcon from "@/app/_components/icons/check-mark-icon";
import { useState } from "react";

/* eslint-disable @next/next/no-img-element */
export default function ChallengeDetailPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "/assets/challenge/sample_pic.png",
    "/assets/challenge/sample_pic2.png",
    "/assets/challenge/sample_pic3.png",
  ];
  const handleNext = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <main>      
      <header className="m-5 md:m-20 rounded-3xl shadow-md">
        <img src="/assets/challenge/ui_challenge.png" alt="ui challenge hero image" className="w-full phone:min-h-[120px]" />
        <div className="py-5 px-8 md:px-14">
          <h2 className="text-lg font-semibold text-[#8530F1]">#챌린지 001</h2>
          <h1 className="text-2xl font-semibold mt-1 text-gray-900">배달의민족 수정하기</h1>
        </div>
      </header>
      
      <section className="px-4 md:px-16 lg:px-24 w-full flex justify-center">
        <article className="flex-1 space-y-8 md:space-y-14 lg:space-y-20 mb-20">
          {/* 탭 메뉴 */}
          <nav className="w-full">
            <ul className="flex border-b border-gray-200 text-gray-500 lg:w-fit w-full">
              <li
                className="cursor-pointer w-full lg:w-[160px] text-[#8530F1] border-b-2 border-[#8530F1] py-2 text-sm font-semibold text-center"
              >
                <a href="#챌린지설명" className="block">
                  챌린지 설명
                </a>
              </li>
              <li
                className="cursor-pointer w-full lg:w-[160px] hover:text-gray-900 py-2 text-sm font-medium text-center"
              >
                <a href="#review" className="block">
                  후기
                </a>
              </li>
              <li
                className="cursor-pointer w-full lg:w-[160px] hover:text-gray-900 py-2 text-sm font-medium text-center"
              >
                <a href="#작업물" className="block">
                  참여자들의 작업물
                </a>
              </li>
            </ul>
          </nav>

          {/* 챌린지 설명 섹션 */}
          <section id="챌린지설명" className="flex flex-col gap-y-4 md:gap-y-10 lg:gap-y-16">
            <div>
              <h2 className="text-xl font-bold text-[#8530F1] mb-4">챌린지 소개</h2>
              <p className="text-gray-700 mb-4">
                title<br />
                Michelle and Barack Obama gave resounding endorsements of Kamala Harris on Tuesday night at the Democratic National
                Convention.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#8530F1] mb-4">챌린지 미션</h2>
              <p className="text-gray-700">
                In their back-to-back speeches, the Democratic Party’s most popular figures praised Ms. Harris.
              </p>
            </div>
            <div className="p-6 rounded-3xl border flex items-start mt-6 h-[260px]">
              <div className="flex flex-col justify-center items-center w-1/4 h-full">
                <CheckMarkIcon checked color="#AC6BFF" width="40" height="40" />
                <h3 className="mt-4 text-lg font-semibold text-gray-900">요구조건</h3>
              </div>
              <div className="flex-1 ml-8 flex items-center h-full">
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full">
                      <CheckMarkIcon checked color="#AC6BFF" />
                    </div>
                    <span className="ml-4 text-gray-900 font-medium">Text</span>
                  </li>
                  <li className="flex items-center">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full">
                      <CheckMarkIcon checked color="#AC6BFF" />
                    </div>
                    <span className="ml-4 text-gray-900 font-medium">Text</span>
                  </li>
                  <li className="flex items-center">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full">
                      <CheckMarkIcon checked color="#AC6BFF" />
                    </div>
                    <span className="ml-4 text-gray-900 font-medium">Text</span>
                  </li>
                  <li className="flex items-center">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full">
                      <CheckMarkIcon checked color="#AC6BFF" />
                    </div>
                    <span className="ml-4 text-gray-900 font-medium">Text</span>
                  </li>
                </ul>
              </div>
            </div>

          </section>

          {/* 작업물 미리보기 */}
          
          <section>
            <div
              className="bg-[#F5F5F5]/80 p-8 rounded-lg"
              onClick={() => setIsModalOpen(true)}
            >
              <button className="flex items-center">
                <ArrowSquareIcon />
                <span className="pl-2 text-[#9E9E9E] font-medium">
            클릭하여 확대
                </span>
              </button>
              <img
                src={images[0]}
                alt="작업물 미리보기"
                className="w-[350px] h-auto mx-auto my-8 cursor-pointer"
              />
            </div>

            {isModalOpen && (
              <div
                className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
                onClick={closeModal}
              >
                {/* 모달 콘텐츠 */}
                <div
                  className="relative bg-white rounded-lg h-[inherit] w-[700px]"                  
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* X 버튼 */}
                  <button
                    className="absolute top-4 right-4 text-gray-600 text-2xl"
                    onClick={closeModal}
                  >
              ✕
                  </button>
                  {/* 이미지 */}
                  <div className="h-[800px] w-full flex items-center justify-center">
                    <img
                      src={images[currentImage]}
                      alt="작업물 미리보기"
                      className=""
                    />
                  </div>
                  {/* 좌우 화살표 */}
                  <button
                    className="absolute left-[-30px] top-1/2 transform -translate-y-1/2 text-white text-3xl"
                    onClick={handlePrev}
                  >
              ❮
                  </button>
                  <button
                    className="absolute right-[-30px] top-1/2 transform -translate-y-1/2 text-white text-3xl"
                    onClick={handleNext}
                  >
              ❯
                  </button>
                </div>
              </div>
            )}
          </section>

          {/* 참여 방법 */}
          <section className="">
            <h2 className="text-xl font-bold text-[#8530F1] pb-20">참여 방법</h2>
            {/* <p className="text-2xl font-semibold text-gray-900 mb-6 text-center">참여 방법 서술</p> */}
            <div className="grid grid-cols-3 min-h-[300px]">
              {/* Step 1 */}
              <div className="flex flex-col items-center justify-between">
                <div className="flex flex-col items-center mb-6">
                  <div className="w-full text-center text-[#8530F1] text-[24px] font-pretendard font-semibold leading-[33.6px] break-words">
                    1
                  </div>
                  <p className="mt-4 text-gray-900 font-semibold text-xl">챌린지 선택하기</p>
                </div>
                <img
                  src="/assets/challenge/challenge_select.png"
                  alt="챌린지 선택"
                  className="w-[150px] h-auto mb-6"
                />

                <p className="text-gray-700 text-base text-center">
                  원하는 프로젝트를 선택하세요.
                </p>
              </div>
              {/* Step 2 */}
              <div className="flex flex-col items-center justify-between">
                <div className="flex flex-col items-center mb-6">
                  <div className="w-full text-center text-[#8530F1] text-[24px] font-pretendard font-semibold leading-[33.6px] break-words">
                    2
                  </div>
                  <p className="mt-4 text-gray-900 font-semibold text-xl">참여하기 버튼 클릭</p>
                </div>
                <div className="w-[160px] p-4 bg-[#8530F1] rounded-full inline-flex justify-center items-center relative">
                  <div className="text-center text-white text-[16px] font-semibold leading-[22.4px] break-words">
                    참여하기
                  </div>
                  <img
                    src="/assets/challenge/arrow_select.png"
                    alt="참여하기 버튼"
                    className="w-7 h-auto mb-6 absolute right-0 -bottom-10"
                  />
                </div>
                <p className="text-gray-700 text-base text-center">
                  프로젝트 페이지에서<br />
                  <span className="font-bold">&apos;참여하기&apos; </span>
                  <span>버튼을 눌러주세요.</span>
                </p>
              </div>
              {/* Step 3 */}
              <div className="flex flex-col items-center justify-between">
                <div className="flex flex-col items-center mb-6">
                  <div className="w-full text-center text-[#8530F1] text-[24px] font-pretendard font-semibold leading-[33.6px] break-words">
                    3
                  </div>
                  <p className="mt-4 text-gray-900 font-semibold text-xl">과제 업로드</p>
                </div>
                <img
                  src="/assets/challenge/upload_img.png"
                  alt="과제 업로드"
                  className="w-[100px] h-auto mb-6"
                />
                <p className="text-gray-700 text-base text-center">
                  과제를 완료한 후, 업로드하세요.
                </p>
              </div>
            </div>
            <div className="py-20">
              <p className="pb-4 font-semibold text-2xl">이것만은 꼭 지켜주세요 !</p>
              <p className="break-words text-sm pb-0.5">요구조건을 최대한 준수해주세요. 요구조건을 해결하는 디자인을 통해 문제해결 및 디자인 스킬을 동시에 향상시켜보세요!</p>
              <p className="break-words text-sm">또한, 모든 참여자들의 작품은 공유/저장은 삼가해주세요. 각 개인의 노력이 담긴 작업물을 우리 모두 함께 보호해요!</p>
            </div>
          </section>

          {/* 후기 섹션 */}
          <section id="review" className="">
            <h2 className="text-xl font-bold text-gray-900 mb-6">후기 n개</h2>
            <div className="space-y-4">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="font-bold text-gray-900">디자이너 이름</h3>
                  <p className="text-gray-500 text-sm mt-2">⭐⭐⭐⭐⭐</p>
                  <p className="text-gray-700 mt-4">
                    여기 후기 텍스트가 들어갑니다. 여기 후기 텍스트가 들어갑니다. 여기 후기 텍스트가 들어갑니다.
                  </p>
                  <p className="text-gray-400 text-sm mt-2">2024-07-01</p>
                </div>
              ))}
            </div>
          </section>
        </article>

        {/* 우측 정보 박스 */}
        <aside className="min-w-[260px] max-w-[340px] hidden xl:block ml-6">
          <div className="sticky top-32 bg-white shadow-lg border rounded-lg p-6">
            <p className="text-sm text-gray-900 mb-1">#챌린지 00</p>
            <h2 className="text-xl font-bold text-gray-900">[타이틀] text</h2>
            <div className="flex justify-between items-center mt-4">
              <span className="text-sm text-gray-600">등록날짜</span>
              <span className="text-sm font-bold text-gray-800">2024-11-10</span>
            </div>
            <div className="flex justify-between items-center mt-2">
              <span className="text-sm text-gray-600">참여자 수</span>
              <span className="text-sm font-bold text-[#8530F1]">
                <span className="text-black pr-0.5">23 명</span> 참가 중</span>
            </div>
            <div className="flex justify-between items-center mt-2">
              <span className="text-sm text-gray-600">난이도</span>
              <div className="flex items-center space-x-1">
                <span>⭐</span>
                <span>⭐</span>
                <span>⭐</span>
                <span>⭐</span>
                <span>⭐</span>
              </div>
            </div>
            <button className="w-full mt-6 py-3 bg-[#8530F1] text-white rounded-lg font-bold">
      참여하기
            </button>
            <div className="flex items-center justify-between mt-4">
              <button className="flex items-center justify-center w-[48%] py-2 border border-gray-300 rounded-lg text-sm text-gray-500">
                <span>💜</span> <span className="ml-2">찜하기</span>
              </button>
              <button className="flex items-center justify-center w-[48%] py-2 border border-gray-300 rounded-lg text-sm text-gray-500">
                <span>🔗</span> <span className="ml-2">공유하기</span>
              </button>
            </div>
            <p className="text-sm text-gray-400 text-center mt-6 hover:underline underline-offset-4">챌린지를 중단할래요</p>
          </div>
        </aside>

      </section>
    </main>
  );
}
