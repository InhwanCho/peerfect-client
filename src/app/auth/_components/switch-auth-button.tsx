import { cn } from "@/lib/utils";

interface SwitchAuthButtonProps {
  className?: string;
  onClick: () => void;
}

export default function SwitchAuthButton({ onClick, className }: SwitchAuthButtonProps) {
  return (
    <button
      className={cn("text-text-tertiary text-sm font-medium", className)}
      onClick={onClick}
    >
      다른 방법으로 로그인
    </button>
  );
}