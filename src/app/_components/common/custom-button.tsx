import React from 'react';
import { cn } from '../../../lib/utils';

interface CustomButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'xxs' | 'xs' | 'small' | 'medium' | 'large';
  color: 'purple' | 'gray' | 'light-purple' | 'default';
  className?: string;
  reviewButton?: boolean;
  children?: string | React.ReactNode;
}

export default function CustomButton({
  reviewButton,
  size,
  color = 'gray',
  className,
  children,
  ...rest
}: CustomButtonProps) {
  const sizeClass = size
    ? {
        xxs: 'w-[100px]',
        xs: 'w-[120px]',
        small: 'w-[300px]',
        medium: 'w-[330px]',
        large: 'w-[460px]',
      }[size]
    : 'w-full';

  const colorClass = {
    default: 'text-text-tertiary bg-white border border-text-tertiary',
    gray: 'bg-gray-300 text-gray-500 cursor-not-allowed',
    purple: 'bg-main-primary text-white',
    'light-purple': 'bg-main-purple-1 text-white',
  }[color];

  return (
    <button
      className={cn(
        `${size ? sizeClass : 'w-full'} ${reviewButton ? 'h-[42px] rounded-full' : 'h-[70px] py-3 rounded-2xl'}   text-buttonS md:text-buttonM`,
        colorClass,
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
