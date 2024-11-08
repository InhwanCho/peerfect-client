'use client';

export default function FormLayout() {
  return (
    <div className="absolute top-1/2 left-[60%] transform -translate-y-1/2 px-4 w-full max-w-[600px]">
      <div className="w-full sm:w-[600px] sm:h-[800px] px-4 py-8 sm:px-[90px] sm:py-[234px] bg-white rounded-2xl flex flex-col items-center gap-10">
        <h2 className="text-center text-black text-2xl font-semibold mb-6">
          이메일로 계속하기
        </h2>
        <div className="w-full mb-4">
          <input
            type="email"
            placeholder="이메일"
            className="w-full h-12 px-4 py-2 bg-white rounded-2xl border border-gray-300 focus:outline-none"
          />
        </div>
        <button className="w-full h-12 bg-gray-300 rounded-2xl text-gray-700 font-semibold">
          인증 후 로그인
        </button>
      </div>
    </div>
  );
}
