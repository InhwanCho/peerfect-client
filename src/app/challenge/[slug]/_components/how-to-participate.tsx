import MouseIcon from '@/app/_components/icons/mouse-icon';
import UploadImageIcon from '@/app/_components/icons/upload-image-icon';

export default function HowToParticipate() {
  return (
    <section>
      <h2 className="pb-8 text-xl font-bold text-main-primary md:pb-20">
        참여 방법
      </h2>
      {/* <p className="text-2xl font-semibold text-text-primary mb-6 text-center">참여 방법 서술</p> */}
      <div className="flex min-h-[300px] grid-cols-3 flex-col gap-y-12 md:grid">
        {/* Step 1 */}
        <div className="flex flex-col items-center justify-between">
          <div className="mb-6 flex flex-col items-center">
            <div className="w-full break-words text-center text-[24px] font-semibold leading-[33.6px] text-main-primary">
              1
            </div>
            <p className="mt-4 text-xl font-semibold text-text-primary">
              시작하기 버튼 클릭
            </p>
          </div>
          <div className="relative mb-6 inline-flex w-[160px] items-center justify-center rounded-full bg-main-primary p-4 md:mb-0">
            <div className="break-words text-center text-[16px] font-semibold leading-[22.4px] text-white">
              시작하기
            </div>
            <MouseIcon className="absolute -bottom-10 right-1 mb-6 h-auto w-7" />
          </div>
          <p className="text-center text-base text-text-primary">
            프로젝트 페이지에서
            <br />
            <span className="font-bold">&apos;시작하기&apos; </span>
            <span>버튼을 눌러주세요.</span>
          </p>
        </div>
        {/* Step 2 */}
        <div className="flex flex-col items-center justify-between">
          <div className="mb-6 flex flex-col items-center">
            <div className="w-full break-words text-center text-[24px] font-semibold leading-[33.6px] text-main-primary">
              2
            </div>
            <p className="mt-4 text-xl font-semibold text-text-primary">
              챌린지 시작하기
            </p>
          </div>
          <img
            src="/assets/challenge/challenge_select.png"
            alt="챌린지 선택"
            className="mb-6 h-auto w-[150px]"
          />
          <p className="text-center text-base text-text-primary">
            <span className="font-semibold">48시간 이내</span>
            <span>에</span>
            <span className="block">챌린지를 완료해 주세요.</span>
          </p>
        </div>
        {/* Step 3 */}
        <div className="flex flex-col items-center justify-between">
          <div className="mb-6 flex flex-col items-center">
            <div className="w-full break-words text-center text-[24px] font-semibold leading-[33.6px] text-main-primary">
              3
            </div>
            <p className="mt-4 text-xl font-semibold text-text-primary">
              과제 업로드
            </p>
          </div>
          <UploadImageIcon className="mb-6 h-auto w-[100px]" />
          <p className="text-center text-base text-text-primary">
            <span>과제를 완료한 후,</span>
            <span className="block">업로드하세요.</span>
          </p>
        </div>
      </div>
      <div className="py-20 text-text-primary">
        <p className="pb-4 text-2xl font-semibold">이것만은 꼭 지켜주세요 !</p>
        <p className="break-words pb-0.5">
          요구조건을 최대한 준수해주세요. 요구조건을 해결하는 디자인을 통해
          문제해결 및 디자인 스킬을 동시에 향상시켜보세요!
        </p>
        <p className="break-words">
          또한, 모든 참여자들의 작품은 공유/저장은 삼가해주세요. 각 개인의
          노력이 담긴 작업물을 우리 모두 함께 보호해요!
        </p>
      </div>
    </section>
  );
}
