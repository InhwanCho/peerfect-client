'use client';

import { cn } from '@/lib/utils';
import { useState } from 'react';

interface InputFieldProps {
  className?: string;
  type?: string;
  placeholder?: string;
  props?: React.InputHTMLAttributes<HTMLInputElement>;
  label: string;
}

export default function InputField({
  className,
  props,
  placeholder,
  type = 'text',
  label,
}: InputFieldProps) {
  const [hasValue, setHasValue] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHasValue(!!e.target.value);
    if (props?.onChange) {
      props.onChange(e);
    }
  };

  return (
    <div className="relative w-full">
      {hasValue && (
        <label className="absolute left-5 top-3 select-none text-sm text-text-secondary transition-all">
          {label}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        className={cn(
          'w-full h-[70px] px-5 border-gray-400 bg-background-primary rounded-2xl border placeholder:text-sm placeholder-gray-400 focus:outline-none focus:border-main-primary',
          hasValue && 'pt-5 outline-none border-main-primary',
          className
        )}
        {...props}
        onChange={handleInputChange}
      />
    </div>
  );
}
