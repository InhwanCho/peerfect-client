import { FieldErrors, UseFormRegister } from "react-hook-form";
import { CloseIcon } from "./close-icon";

interface EmailInputFormProps {
  emailValue: string;
  errors: FieldErrors;
  isValid: boolean;
  onSubmit: () => void;
  handleClearInput: () => void;
  register: UseFormRegister<{ email: string }>;
  onSwitchAuthType: () => void;
}

export default function EmailInputForm({
  emailValue,
  errors,
  isValid,
  onSubmit,
  handleClearInput,
  register,
  onSwitchAuthType
}: EmailInputFormProps) {
  return (
    <form onSubmit={onSubmit} className="w-full">
      <h2 className="text-center text-black text-xl lg:text-2xl font-semibold mb-[60px]">
        이메일로 계속하기
      </h2>
      <div className="relative w-full mb-8">
        {emailValue && (
          <label className="absolute left-4 top-2 text-gray-500 text-xs">
            이메일
          </label>
        )}
        <input
          type="email"
          placeholder={!emailValue ? "이메일" : ""}
          className={`w-full h-[70px] ${emailValue ? "pt-6" : ""} px-4 bg-white rounded-lg border ${errors.email ? "border-red-500" : "border-gray-300"} text-gray-800 focus:outline-none`}
          {...register("email", {
            required: "이메일을 입력해주세요.",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
              message: "형식에 맞지 않는 이메일입니다. 다시 시도해주세요."
            },
            validate: value => {
              if (value.endsWith("gmail.com")) {
                return "gmail은 소셜로그인으로 로그인해주세요.";
              }
              return true;
            }
          })}
        />
        {emailValue && (
          <button
            type="button"
            onClick={handleClearInput}
            className="absolute right-4 top-1/2 transform -translate-y-1/2"
          >
            <CloseIcon />
          </button>
        )}
        {errors.email && typeof errors.email.message === "string" && (
          <p className="text-red-500 text-xs mt-0.5 absolute top-[76px] left-1">
            {errors.email.message}
          </p>
        )}
      </div>
      <button
        type="submit"
        className={`w-full h-12 rounded-lg font-semibold mb-6 mt-20 ${!isValid ? "bg-gray-200 text-[#9E9E9E] cursor-not-allowed" : "bg-[#8530F1] text-white"
        }`}
        disabled={!isValid}
      >
        인증 후 로그인
      </button>
      <button
        className="w-full text-[#9E9E9E] text-sm font-medium underline"
        onClick={onSwitchAuthType}
      >
        다른 방법으로 로그인
      </button>
    </form>
  );
}
