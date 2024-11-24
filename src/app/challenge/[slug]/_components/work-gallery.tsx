import SvgArrowDown from "@/app/_components/icons/S/ArrowDown";
import PageNation from "./pagenation";

export default function WorkGallery() {
  const dummyData = Array(8).fill({
    title: "작업자가 업로드한 제목",
    designer: "디자이너",
    user: "평범이 님",
  });

  return (
    <section className="pr-6">
      <img
        src="/assets/challenge/otherworks.webp"
        alt="서로의 작업물을 공유하고, 피드백을 나눠 보세요"
        className="w-full"
      />
      <header className="flex justify-between mb-[60px] mt-20">
        <h2 className="text-xl font-bold text-text-primary mb-6">후기
          <span className="text-text-tertiary"> 5개</span>
        </h2>
        <button className="flex pr-4 items-center">
          <span className="pr-4 text-text-primary">최신순</span>
          <SvgArrowDown isOpen={false} filledColor="#222222" />
        </button>
      </header>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-y-20 gap-x-10">
        {dummyData.map((work, index) => (
          <div
            key={index}
            className="relative bg-background-secondary rounded-lg shadow overflow-hidden"
          >
            <div className="w-[280px] h-[280px] bg-background-tertiary"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
            <div className="absolute bottom-2 left-2 text-white">
              <h3 className="text-sm font-semibold">{work.title}</h3>
              <p className="text-xs pt-2">
                <span className="text-main-primary font-medium pr-1">{work.designer}</span> {work.user}
              </p>
            </div>
          </div>
        ))}
      </div>
      <PageNation />
    </section>
  );
}
