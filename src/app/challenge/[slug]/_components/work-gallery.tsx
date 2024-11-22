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
      <div className="mb-8 mt-20">
        <h2 className="text-xl font-bold text-text-primary mb-6">작업물 n개</h2>        
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-y-20 gap-x-8">
        {dummyData.map((work, index) => (
          <div
            key={index}
            className="relative bg-background-secondary rounded-lg shadow overflow-hidden"
          >            
            <div className="w-full h-60 bg-background-tertiary"></div>            
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
            <div className="absolute bottom-2 left-2 text-white">
              <h3 className="text-sm font-semibold">{work.title}</h3>
              <p className="text-xs pt-0.5">
                <span className="text-main-primary font-medium pr-1">{work.designer}</span> {work.user}                
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <button className="px-3 py-1 text-sm border border-text-caption rounded-l">
          &laquo;
        </button>        
        <button className="px-3 py-1 text-sm bg-main-primary text-white">1</button>        
        <button className="px-3 py-1 text-sm border border-text-caption">2</button>
        <button className="px-3 py-1 text-sm border border-text-caption">3</button>
        <button className="px-3 py-1 text-sm border border-text-caption rounded-r">
          &raquo;
        </button>
      </div>
    </section>
  );
}
