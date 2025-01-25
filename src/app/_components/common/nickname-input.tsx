interface NicknameInputProps {
  label?: boolean;
  nicknameValue: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isNicknameValid: boolean;
  error: string;
  showSuccess: boolean; // 성공 메시지 표시 여부
}

export function NicknameInput({
  label,
  nicknameValue,
  onChange,
  isNicknameValid,
  error,
  showSuccess, // 추가된 prop
}: NicknameInputProps) {
  return (
    <>
      <div className="relative w-full">
        {label && (
          <p className="absolute -top-8 left-1 text-main-primary">닉네임</p>
        )}
        <input
          type="text"
          placeholder="닉네임을 입력해주세요."
          maxLength={12}
          value={nicknameValue}
          onChange={onChange}
          className={`h-[70px] w-full rounded-2xl border px-5 text-text-primary placeholder:text-sm focus:outline-none ${
            error
              ? 'border-role-negative' // 에러 발생 시 테두리 빨간색
              : isNicknameValid
                ? 'border-main-primary' // 성공 시 테두리 초록색
                : 'border-gray-300' // 기본 테두리
          }`}
        />
        {/* 닉네임 길이 표시 */}
        <span className="absolute right-5 top-1/2 -translate-y-1/2 text-sm text-text-tertiary">
          <span
            className={`${
              error
                ? 'text-role-negative' // 에러 발생 시 글자 빨간색
                : isNicknameValid
                  ? 'text-main-primary' // 성공 시 글자 초록색
                  : 'text-gray-500' // 기본 글자
            }`}
          >
            {nicknameValue.length}
          </span>
          /12
        </span>

        {/* 에러 메시지 */}
        {error && (
          <p className="absolute -bottom-7 left-1 text-small text-role-negative">
            {error}
          </p>
        )}

        {/* 성공 메시지 (중복확인 버튼 클릭 시에만 표시) */}
        {!error && showSuccess && (
          <p className="absolute -bottom-7 left-1 text-small text-main-primary">
            사용 가능한 닉네임입니다.
          </p>
        )}

        {/* 기본 안내 메시지 (에러와 성공 메시지가 없을 경우) */}
        {!error && !showSuccess && (
          <p className="absolute -bottom-12 left-1 w-full text-small text-gray-400 xl:-bottom-7">
            공백 및 특수문자를 제외한 영문, 한글만 사용 가능합니다.
          </p>
        )}
      </div>
    </>
  );
}
