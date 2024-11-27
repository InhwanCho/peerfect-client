import ErrorMessage from "@/app/_components/common/error-message";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import SwitchAuthButton from "./switch-auth-button";
import Link from "next/link";
import CustomButton from "@/app/_components/common/custom-button";

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
      <h4 className="text-center text-text-primary text-xl lg:text-h4 font-semibold">
        이메일로 계속하기
      </h4>
      <div className="relative w-full">
        {emailValue && (
          <label className="absolute left-5 top-3 text-text-secondary text-xs">
            이메일
          </label>
        )}
        <input
          type="email"
          placeholder={!emailValue ? "이메일을 입력해주세요." : ""}
          className={`${emailValue ? "pt-6" : ""} w-full h-[70px] px-5 bg-background-primary rounded-2xl border  placeholder:text-sm placeholder:text-gray-400 ${errors.email
            ? "border-role-negative"
            : isValid
              ? "border-main-primary"
              : "border-gray-400"
            } text-text-primary focus:outline-none`}
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

        <ErrorMessage
          className="mt-0.5 absolute top-[76px] left-1"
          message={
            errors.email
              ? (errors.email.message as string)
              : isValid
                ? "사용 가능한 이메일입니다."
                : ""
          }
          type={errors.email ? "error" : isValid ? "success" : undefined}
        />
        <CustomButton type="submit" disabled={!isValid}
          color={!isValid ? "gray" : "purple"}
          className={`mb-4 mt-20 `}
        >인증 후 로그인
        </CustomButton>
        <div className="flex justify-between">
          <SwitchAuthButton onClick={onSwitchAuthType} />
          <Link href="" className="text-main-primary text-sm font-medium">
            회원가입
          </Link>

        </div>
      </div>
    </form>
  );
}
