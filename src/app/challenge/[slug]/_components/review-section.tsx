import ArrowIcon from "@/app/_components/icons/arrow-icon";

const timeSpent = '2일';
const createdDate = '2024-01-02';

export default function ReviewSection() {

  return (
    <section id="review">
      <header className="flex justify-between">
        <h2 className="text-xl font-bold text-gray-900 mb-6">후기 n개</h2>
        <button className="flex pr-4">
          <span className="pr-4">최신순</span>
          <ArrowIcon isOpen={false} color="#222222" />
        </button>
      </header>
      <div className="space-y-4">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="bg-white px-8 py-4 phone:px-14  phone:py-10 rounded-xl shadow-lg border border-gray-200 border-opacity-50 flex flex-col gap-y-3.5"
          >
            <div className="flex justify-between items-center">
              <p className="text-gray-500">디자이너 <span className="font-semibold">(이름)님</span></p>
              <p className="text-gray-500 text-sm">{createdDate}</p>
            </div>
            <div>
              <p className="text-gray-500 text-sm">
                소요시간 <span className="font-semibold text-gray-900">{timeSpent}</span>
                <span className="pl-8">난이도</span>
                <span className="ml-2 text-yellow-500">⭐⭐⭐⭐⭐</span>
              </p>
            </div>
            {/* 후기 내용 */}
            <p className="text-gray-900 leading-relaxed">
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
