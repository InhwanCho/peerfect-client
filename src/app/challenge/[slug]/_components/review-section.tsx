import SvgFilledStar from "@/app/_components/icons/M/FilledStar";
import SvgArrowDown from "@/app/_components/icons/S/ArrowDown";

const timeSpent = '2일';
const createdDate = '2024-01-02';

export default function ReviewSection() {
  return (
    <section id="review">
      <header className="flex justify-between">
        <h2 className="text-xl font-bold text-text-primary mb-6">후기
          <span className="text-text-tertiary"> 5개</span>
        </h2>
        <button className="flex pr-4 items-center">
          <span className="pr-4 text-text-primary">최신순</span>
          <SvgArrowDown isOpen={false} filledColor="#222222" />
        </button>
      </header>
      <div className="space-y-4">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="bg-background-primary px-8 py-4 phone:px-14 phone:py-10 rounded-xl card-container flex flex-col gap-y-3.5"
          >
            <div className="flex justify-between items-center">
              <p className="text-text-secondary">
                디자이너 <span className="font-semibold text-text-primary">(이름)님</span>
              </p>
              <p className="text-text-secondary text-sm">{createdDate}</p>
            </div>
            <div>
              <p className="text-text-secondary text-sm flex items-center">
                소요시간 <span className="font-semibold text-text-primary pl-1.5">{timeSpent}</span>
                <span className="pl-8">난이도</span>
                <span className="pl-2.5 flex gap-x-1">
                  <SvgFilledStar /><SvgFilledStar /><SvgFilledStar /><SvgFilledStar /><SvgFilledStar />
                </span>
              </p>
            </div>
            {/* 후기 내용 */}
            <p className="text-text-primary leading-relaxed">
              챌린지를 도전함! 챌린지를 도전함! 챌린지를 도전함! 챌린지를
              도전함! 챌린지를 도전함! 챌린지를 도전함! 챌린지를 도전함! 챌린지를
              도전함! 챌린지를 도전함! 챌린지를 도전함! 챌린지를 도전함! 챌린지를
              도전함!
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
