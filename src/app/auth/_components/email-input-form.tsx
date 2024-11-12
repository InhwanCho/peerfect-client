import ClearInputButton from "@/app/_components/common/clear-input-button";
import ErrorMessage from "@/app/_components/common/error-message";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import SwitchAuthButton from "./switch-auth-button";


interface EmailInputFormProps {
  emailValue?: string;
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
  onSwitchAuthType,
}: EmailInputFormProps) {
  return (
    <form onSubmit={onSubmit} className="w-full">
      <h2 className="text-center text-black text-xl lg:text-2xl font-semibold mb-[60px]">
        이메일로 계속하기
      </h2>
      <div className="relative w-full mb-8">
        {emailValue && (
          <label className="absolute left-4 top-3 text-gray-500 text-xs">
            이메일
          </label>
        )}
        <input
          type="email"
          placeholder={!emailValue ? "이메일을 입력해주세요." : ""}
          className={`w-full h-[70px] ${emailValue ? "pt-6" : ""} px-4 bg-white rounded-lg border placeholder:text-sm ${
            errors.email
              ? "border-red-500"
              : isValid
                ? "border-purple-500"
                : "border-gray-300"
          } text-gray-800 focus:outline-none`}
          {...register("email", {
            required: "이메일을 입력해주세요.",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
              message: "형식에 맞지 않는 이메일입니다. 다시 시도해주세요.",
            },
            validate: (value) => {
              if (value.endsWith("gmail.com")) {
                return "gmail은 소셜로그인으로 로그인해주세요.";
              }
              return true;
            },
          })}
        />
        {emailValue && <ClearInputButton onClick={handleClearInput} />}
        <ErrorMessage message={errors.email?.message as string} />
      </div>
      <button
        type="submit"
        className={`w-full h-12 rounded-lg font-semibold mb-6 mt-20 ${
          !isValid
            ? "bg-gray-200 text-[#9E9E9E] cursor-not-allowed"
            : "bg-[#8530F1] text-white"
        }`}
        disabled={!isValid}
      >
        인증 후 로그인
      </button>
      <SwitchAuthButton onClick={onSwitchAuthType} />
    </form>
  );
}
