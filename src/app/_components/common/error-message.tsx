interface MessageProps {
  message?: string;
  type?: "error" | "success";
}

export default function Message({ message, type }: MessageProps) {
  if (!message) return null;

  const textColor = type === "error" ? "text-red-500" : "text-[#8530F1]";

  return (
    <p
      className={`text-xs mt-0.5 absolute top-[76px] left-1 ${textColor}`}
    >
      {message}
    </p>
  );
}
