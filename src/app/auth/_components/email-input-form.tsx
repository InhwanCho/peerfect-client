'use client';

import ErrorMessage from '@/app/_components/common/error-message';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import SwitchAuthButton from './switch-auth-button';
import Link from 'next/link';
import CustomButton from '@/app/_components/common/custom-button';

interface EmailInputFormProps {
  emailValue?: string;
  errors: FieldErrors;
  isValid: boolean;
  onSubmit: () => void;
  isLoading: boolean;
  register: UseFormRegister<{ email: string }>;
  onSwitchAuthType: () => void;
}

export default function EmailInputForm({
  emailValue,
  errors,
  isValid,
  onSubmit,
  isLoading,
  register,
  onSwitchAuthType,
}: EmailInputFormProps) {
  return (
    <form
      onSubmit={onSubmit}
      className="flex h-[66vh] w-full flex-col justify-evenly"
    >
      <h4 className="text-center text-xl font-semibold text-text-primary lg:text-h4">
        이메일로 계속하기
      </h4>
      <div className="relative w-full">
        {emailValue && (
          <label className="absolute left-5 top-3 text-sm text-text-secondary">
            이메일
          </label>
        )}
        <input
          type="email"
          placeholder={!emailValue ? '이메일을 입력해주세요.' : ''}
          className={`${emailValue ? 'pt-6' : ''} h-[70px] w-full rounded-2xl border bg-background-primary px-5  placeholder:text-sm placeholder:text-gray-400 ${
            errors.email
              ? 'border-role-negative'
              : isValid
                ? 'border-main-primary'
                : 'border-gray-400'
          } text-text-primary focus:outline-none`}
          {...register('email', {
            required: '이메일을 입력해주세요.',
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
              message: '형식에 맞지 않는 이메일입니다. 다시 시도해주세요.',
            },
            validate: (value) => {
              if (value.endsWith('gmail.com')) {
                return 'gmail은 소셜로그인으로 로그인해주세요.';
              }
              return true;
            },
          })}
        />

        <ErrorMessage
          className="absolute left-1 top-[76px] mt-0.5"
          message={
            errors.email
              ? (errors.email.message as string)
              : isValid
                ? '사용 가능한 이메일입니다.'
                : ''
          }
          type={errors.email ? 'error' : isValid ? 'success' : undefined}
        />
        <CustomButton
          type="submit"
          disabled={!isValid}
          color={!isValid ? 'gray' : 'purple'}
          className={`mb-4 mt-20 `}
        >
          {isLoading ? '이메일 발송 중...' : '인증 후 로그인'}
        </CustomButton>
        <div className="flex justify-between">
          <SwitchAuthButton onClick={onSwitchAuthType} />
          <Link href="" className="text-sm font-medium text-main-primary">
            회원가입
          </Link>
        </div>
      </div>
    </form>
  );
}
