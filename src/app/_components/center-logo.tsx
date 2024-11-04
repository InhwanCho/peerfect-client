/* eslint-disable @next/next/no-img-element */
import React from 'react';

export default function CenterLogo() {
  return (
    <div className='relative'>
      <div className='absolute left-[340px] top-[400px] flex flex-col items-center gap-y-7'>
        <img src="/assets/tem/logo.svg" alt="logo text" />
        <div className="text-[#9683b1] text-xl font-normal font-['Offside'] leading-[39px]">Grow Together, Be Perfect</div>
      </div>
    </div>
  );
}
