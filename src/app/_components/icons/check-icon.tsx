export default function CheckIcon({
  color,
  className,
  isTransparent = false,
}: {
  color?:'purple';
  className?: string;
  isTransparent?: boolean;
}) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {!isTransparent && <circle cx="12" cy="12" r="12" fill="#ffffff" />}
      <path
        d="M16 8L10.5 15L8 12.5"
        
        stroke= {color === "purple" ? "#8530F1" : "#B5B5B5"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
