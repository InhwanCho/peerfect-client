import { cn } from '../../../lib/utils';

interface TextAreaFieldProps {
  className?: string;
  placeholder?: string;
  props?: React.TextareaHTMLAttributes<HTMLTextAreaElement>;
}

export default function TextAreaField({
  className,
  props,
  placeholder,
}: TextAreaFieldProps) {
  return (
    <textarea
      placeholder={placeholder}
      className={cn(
        'w-full px-4 min-h-[240px] line-clamp-none pt-5 border-gray-400 bg-background-primary rounded-2xl border placeholder:text-sm placeholder-gray-400 focus:outline-none focus:border-main-primary resize-none',
        className
      )}
      {...props}
    />
  );
}
