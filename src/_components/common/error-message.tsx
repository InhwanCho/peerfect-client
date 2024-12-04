import { cn } from '@/lib/utils';

interface ErrorMessageProps {
  message?: string;
  type?: 'error' | 'success';
  className?: string;
}

export default function ErrorMessage({
  message,
  type,
  className,
}: ErrorMessageProps) {
  if (!message) return null;

  const textColor =
    type === 'error' ? 'text-role-negative' : 'text-main-primary';

  return <p className={cn(`text-sm ${textColor}`, className)}>{message}</p>;
}
