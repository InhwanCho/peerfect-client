interface SignupFormProps {
  verifiedEmail: string;
}

export default function EmailSignupForm({ verifiedEmail }: SignupFormProps) {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-6 text-center w-full">
      <h2 className="text-2xl font-semibold text-black mb-6">회원가입</h2>
      <div className="w-full max-w-md mx-auto">
        <div className="mb-4">
          <label className="block text-sm text-gray-700">이메일</label>
          <div className="flex items-center border border-purple-500 rounded-lg px-4 py-2">
            <span className="text-gray-800">{verifiedEmail}</span>
            <span className="text-purple-500 text-xs ml-2">인증된 이메일입니다.</span>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm text-gray-700">직군 선택</label>
          <select className="w-full border rounded-lg p-3 text-gray-800 bg-white">
            <option value="">직군 선택</option>
            {/* 추가 옵션들 */}
          </select>
        </div>

        <div className="flex items-center mb-2">
          <input
            type="text"
            placeholder="닉네임을 입력해주세요"
            maxLength={12}
            className="w-full border rounded-lg p-3 text-gray-800"
          />
          <button className="bg-gray-300 text-gray-500 px-4 py-2 ml-2 rounded-lg">중복확인</button>
        </div>
        <p className="text-xs text-gray-500 mb-4">공백 및 특수문자를 제외한 영문, 한글만 사용 가능합니다.</p>

        <div className="mb-4">
          <label className="block text-sm text-gray-700 mb-2">약관 전체 동의</label>
          <div className="flex items-center text-gray-500 mb-2">
            <input type="checkbox" className="mr-2" /> <span>[필수] 피어펙트 서비스 이용 회원 약관</span>
            <button className="text-purple-600 text-xs ml-auto underline">내용 보기</button>
          </div>
          <div className="flex items-center text-gray-500">
            <input type="checkbox" className="mr-2" /> <span>[선택] 마케팅 정보 수신</span>
            <button className="text-purple-600 text-xs ml-auto underline">내용 보기</button>
          </div>
        </div>

        <button className="w-full bg-gray-300 text-gray-500 text-lg rounded-lg py-3">회원가입</button>
      </div>
    </div>
  );
}
