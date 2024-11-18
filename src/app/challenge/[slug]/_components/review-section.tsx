export default function ReviewSection() {
  return (
    <section id="review">
      <h2 className="text-xl font-bold text-gray-900 mb-6">후기 n개</h2>
      <div className="space-y-4">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="font-bold text-gray-900">디자이너 이름</h3>
            <p className="text-gray-500 text-sm mt-2">⭐⭐⭐⭐⭐</p>
            <p className="text-gray-700 mt-4">
              여기 후기 텍스트가 들어갑니다.
            </p>
            <p className="text-gray-400 text-sm mt-2">2024-07-01</p>
          </div>
        ))}
      </div>
    </section>
  );
}
