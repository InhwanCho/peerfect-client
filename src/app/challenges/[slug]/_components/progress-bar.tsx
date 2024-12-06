export default function ProgressBar({ activeDay }: { activeDay: number }) {
  const totalDays = 14;

  return (
    <div className="relative flex w-full items-center justify-center">
      {/* Progress Line */}
      <div className="absolute top-1/2 z-0 h-[3px] w-full -translate-y-1/2 bg-gray-600" />

      {/* Nodes */}
      <div className="relative z-10 flex w-full justify-between">
        {Array.from({ length: totalDays }).map((_, index) => (
          <div
            key={index}
            className={`relative flex size-[30px] items-center justify-center rounded-full border ${
              activeDay === index + 1
                ? 'border-purple-500 bg-purple-500'
                : 'border-gray-600 bg-black'
            } z-20`}
          >
            <span
              className={`text-white ${
                activeDay === index + 1 ? 'font-bold' : 'text-gray-400'
              }`}
            >
              {index + 1}
            </span>

            {/* Character */}
            {activeDay === index + 1 && (
              <div className="absolute bottom-[calc(100%+8px)] z-30 w-[140%]">
                <img
                  src="/assets/challenges/character-w-band.png"
                  alt="character icon"
                  className="size-full object-contain"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
