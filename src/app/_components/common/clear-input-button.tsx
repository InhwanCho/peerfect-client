import { CloseIcon } from '@/app/_components/icons/close-icon';

interface ClearInputButtonProps {
  onClick: () => void;
}

export default function ClearInputButton({ onClick }: ClearInputButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="absolute right-4 top-1/2 -translate-y-1/2"
      aria-label="close button"
    >
      <CloseIcon color="red" />
    </button>
  );
}
