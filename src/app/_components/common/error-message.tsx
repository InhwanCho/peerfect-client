interface ErrorMessageProps {
  message?: string;
}

export default function ErrorMessage({ message }: ErrorMessageProps) {
  if (!message) return null;
  return <p className="text-red-500 text-xs mt-0.5 absolute top-[76px] left-1">{message}</p>;
}