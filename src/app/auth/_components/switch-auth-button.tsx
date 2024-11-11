import { cn } from "@/app/_components/lib/utils";

interface SwitchAuthButtonProps {
  className?: string;
  onClick: () => void;
}

export default function SwitchAuthButton({ onClick, className }: SwitchAuthButtonProps) {
  return (
    <button
      className={cn("w-full text-[#9E9E9E] text-sm font-medium underline", className)}
      onClick={onClick}
    >
      다른 방법으로 로그인
    </button>
  );
}