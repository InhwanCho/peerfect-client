interface NicknameInputProps {
  label?: boolean
  nicknameValue: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isNicknameValid: boolean;
  error: string;
}

export function NicknameInput({
  label,
  nicknameValue,
  onChange,
  isNicknameValid,
  error,
}: NicknameInputProps) {
  return (
    <>
      <div className="w-full relative">
        {label && <p className="absolute -top-8 left-1 text-main-primary ">닉네임</p>}
        <input
          type="text"
          placeholder="닉네임을 입력해주세요."
          maxLength={12}
          value={nicknameValue}
          onChange={onChange}
          className={`w-full border rounded-2xl px-5 text-text-primary h-[70px] focus:outline-none placeholder:text-sm ${error
            ? "border-role-negative"
            : isNicknameValid
              ? "border-main-primary"
              : "border-gray-300"
            }`}
        />
        <span className="absolute right-5 top-1/2 transform -translate-y-1/2 text-text-tertiary text-xs">
          {nicknameValue.length > 0 ? (
            <span
              className={`${isNicknameValid ? "text-text-primary" : "text-role-negative"
                }`}
            >
              {nicknameValue.length}
            </span>
          ) : (
            "0"
          )}
          /12
        </span>
        {error ? (
          <p className="text-xs absolute -bottom-6 left-1 text-role-negative">{error}</p>
        ) : (
          <p className="text-xs absolute -bottom-6 left-1 text-gray-400">
            공백 및 특수문자를 제외한 영문, 한글만 사용 가능합니다.
          </p>
        )}
      </div>
    </>
  );
}
