interface EmailVerificationProps {
  verifiedEmail: string;
  onProceedToSignup: () => void;
  onSwitchAuthType: () => void;
}

export default function EmailVerification({
  verifiedEmail,
  onProceedToSignup,
  onSwitchAuthType
}: EmailVerificationProps) {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center w-full">
      <h2 className="text-2xl font-semibold text-black mb-6">이메일 인증</h2>
      <div className="my-10 text-gray-600 whitespace-nowrap text-sm">
        <p className="mb-0.5">입력하신 메일 주소로 인증 메일이 발송되었습니다.</p>
        <p>수신된 링크를 클릭하여 서비스에 로그인 할 수 있습니다.</p>
      </div>
      <div className="w-full max-w-md mx-auto bg-gray-100 rounded-lg py-4 px-6 mb-4">
        <p className="text-gray-800">{verifiedEmail}</p>
      </div>
      <p className="text-gray-500 text-sm mb-8">1시간 이내에 인증을 완료해주세요.</p>
      <p className="text-gray-500 text-sm">
        인증메일이 도착하지 않았나요? <button className="text-purple-600 underline">인증메일 재발송</button>
      </p>
      <button
        className="w-full text-[#9E9E9E] text-sm font-medium underline mt-4"
        onClick={onSwitchAuthType}
      >
        다른 방법으로 로그인
      </button>
      <button
        className="w-full bg-purple-600 text-white text-lg rounded-lg py-3 mt-4"
        onClick={onProceedToSignup}
      >
        임시 - 인증완료 버튼
      </button>
    </div>
  );
}
