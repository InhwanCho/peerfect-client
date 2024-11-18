export default function HowToParticipate() {
  return (
    <section>
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
  );
}