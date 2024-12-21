interface NicknameInputProps {
  label?: boolean;
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
      <div className="relative w-full">
        {label && (
          <p className="absolute -top-8 left-1 text-main-primary ">닉네임</p>
        )}
        <input
          type="text"
          placeholder="닉네임을 입력해주세요."
          maxLength={12}
          value={nicknameValue}
          onChange={onChange}
          className={`h-[70px] w-full rounded-2xl border px-5 text-text-primary placeholder:text-sm focus:outline-none ${
            error
              ? 'border-role-negative'
              : isNicknameValid
                ? 'border-main-primary'
                : 'border-gray-300'
          }`}
        />
        <span className="absolute right-5 top-1/2 -translate-y-1/2 text-sm text-text-tertiary">
          {nicknameValue.length > 0 ? (
            <span
              className={`${
                isNicknameValid ? 'text-text-primary' : 'text-role-negative'
              }`}
            >
              {nicknameValue.length}
            </span>
          ) : (
            '0'
          )}
          /12
        </span>
        {error ? (
          <p className="absolute -bottom-7 left-1 text-small text-role-negative">
            {error}
          </p>
        ) : (
          <p className="absolute -bottom-12 left-1 w-full text-small text-gray-400 xl:-bottom-7">
            공백 및 특수문자를 제외한 영문, 한글만 사용 가능합니다.
          </p>
        )}
      </div>
    </>
  );
}
