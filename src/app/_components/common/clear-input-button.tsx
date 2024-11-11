import { CloseIcon } from "@/app/_components/icons/close-icon";

interface ClearInputButtonProps {
  onClick: () => void;
}

export default function ClearInputButton({ onClick }: ClearInputButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="absolute right-4 top-1/2 transform -translate-y-1/2"
    >
      <CloseIcon color="red" />
    </button>
  );
}