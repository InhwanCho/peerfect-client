export default function WorkGallery() {
  const dummyData = Array(8).fill({
    title: "작업자가 업로드한 제목",
    designer: "디자이너",
    user: "평범이 님",
  });

  return (
    <section>
      <div className="mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-6">작업물 n개</h2>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-y-20 gap-x-8">
        {dummyData.map((work, index) => (
          <div
            key={index}
            className="relative bg-gray-100 rounded-lg shadow overflow-hidden"
          >
            <div className="w-full h-40 bg-gray-200"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
            <div className="absolute bottom-2 left-2 text-white">
              <h3 className="text-sm font-semibold">{work.title}</h3>
              <p className="text-xs pt-0.5">
                <span className="text-[#8530F1] font-medium pr-1">{work.designer}</span> {work.user}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <button className="px-3 py-1 text-sm border border-gray-300 rounded-l">
          &laquo;
        </button>
        <button className="px-3 py-1 text-sm bg-[#8530F1] text-white">1</button>
        <button className="px-3 py-1 text-sm border border-gray-300">2</button>
        <button className="px-3 py-1 text-sm border border-gray-300">3</button>
        <button className="px-3 py-1 text-sm border border-gray-300 rounded-r">
          &raquo;
        </button>
      </div>
    </section>
  );
}
