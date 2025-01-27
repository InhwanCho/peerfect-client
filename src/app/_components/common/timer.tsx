import { useEffect, useState } from 'react';
import TimerIcon from '../icons/timer-icon';
import { cn } from '@/lib/utils';

interface TimerProps {
  duration: number;
  reset: boolean;
  className?: string;
}

export function Timer({ duration = 180, reset, className }: TimerProps) {
  const [time, setTime] = useState(duration);

  useEffect(() => {
    setTime(duration);
  }, [reset]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, [reset]);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <div className={`${cn('absolute text-sm text-gray-600', className)} `}>
      <div className="flex flex-col justify-center">
        <TimerIcon />
        <span
          // style={{ marginLeft: '-1px' }}
        >{`${minutes}:${seconds < 10 ? '0' : ''}${seconds}`}</span>
      </div>
    </div>
  );
}
