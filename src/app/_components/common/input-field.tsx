import { cn } from "../lib/utils";

interface InputFieldProps {
  className?: string;
  type?: string;
  placeholder?: string;
  props?: React.InputHTMLAttributes<HTMLInputElement>
}

export default function InputField({ className, props, placeholder, type }: InputFieldProps) {
  return (
    <input
      type={type} placeholder={placeholder}
      className={cn("w-full h-[70px] px-4 border-gray-400 bg-background-primary rounded-2xl border placeholder:text-sm placeholder-gray-400 focus:outline-none focus:border-main-primary", className)} 
      {...props} />
  );
}
