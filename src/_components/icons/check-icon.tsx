interface CheckIconProps {
  checked: boolean;
}

export default function CheckIcon({ checked }: CheckIconProps) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.5"
        y="0.5"
        width="19"
        height="19"
        rx="5.5"
        // stroke={checked ? "#8530F1" : "#B5B5B5"}
        fill="none"
      />
      {checked ? (
        <path
          d="M5 10.5L8.33333 14L15 7"
          stroke="#8530F1"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ) : (
        <path
          d="M5 10.5L8.33333 14L15 7"
          stroke="#B5B5B5"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}
    </svg>
  );
}
