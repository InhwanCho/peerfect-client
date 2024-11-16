import Message from "@/app/_components/common/error-message";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import SwitchAuthButton from "./switch-auth-button";
import Link from "next/link";

interface EmailInputFormProps {
  emailValue?: string;
  errors: FieldErrors;
  isValid: boolean;
  onSubmit: () => void;
  register: UseFormRegister<{ email: string }>;
  onSwitchAuthType: () => void;
}

export default function EmailInputForm({
  emailValue,
  errors,
  isValid,
  onSubmit,
  register,
  onSwitchAuthType,
}: EmailInputFormProps) {
  return (
    <form onSubmit={onSubmit} className="w-full flex flex-col justify-evenly h-[66vh]">
      <h2 className="text-center text-black text-xl lg:text-2xl font-semibold">
        이메일로 계속하기
      </h2>
      <div className="relative w-full">
        {emailValue && (
          <label className="absolute left-4 top-3 text-gray-500 text-xs">
            이메일
          </label>
        )}
        <input
          type="email"
          placeholder={!emailValue ? "이메일을 입력해주세요." : ""}
          className={`w-full h-[70px] ${emailValue ? "pt-6" : ""} px-4 bg-white rounded-lg border placeholder:text-sm ${errors.email
            ? "border-red-500"
            : isValid
              ? "border-[#8530F1]"
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
        <Message
          message={
            errors.email
              ? (errors.email.message as string)
              : isValid
                ? "사용 가능한 이메일입니다."
                : ""
          }
          type={errors.email ? "error" : isValid ? "success" : undefined}
        />
        <button
          type="submit"
          className={`w-full h-12 rounded-lg font-semibold mb-4 mt-20 ${!isValid
            ? "bg-gray-200 text-[#9E9E9E] cursor-not-allowed"
            : "bg-[#8530F1] text-white"
          }`}
          disabled={!isValid}
        >
        인증 후 로그인
        </button>
        <div className="flex justify-between">
          <SwitchAuthButton onClick={onSwitchAuthType} />
          <Link href="" className="text-[#8530F1] text-sm font-medium">회원가입</Link>
        </div>
      </div>
      
    </form>
  );
}
