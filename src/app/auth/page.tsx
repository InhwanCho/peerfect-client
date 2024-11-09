'use client';

import FormLayout from "./_components/formlayout";

export default function AuthPage() {
  return (
    <FormLayout >
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
    </FormLayout>
  );
}
