import React from 'react';
import { homeText } from '@/lib/homeText';

export default function page() {
  const step = 0;
  const totalSteps = 5;

  const buttonClass =
    'w-[320px] md:w-[400px] bg-white text-base md:text-lg rounded-lg p-3';
  return (
    <div className='text-primary w-full min-h-screen flex flex-col justify-center items-center'>
      <div className='relative w-[320px] md:w-[400px] h-2 overflow-visible'>
        <div className='absolute top-1/2 -translate-y-1/2 w-full h-1/2 bg-primary' />
        <div
          className='absolute top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-primary transition-transform duration-700'
          style={{
            left: `${(step / (totalSteps - 1)) * 100}%`,
            transform: 'translate(-50%, -50%)',
          }}
        />
      </div>
      <div className='font-normal text-2xl md:text-3xl mt-10 md:mt-8'>
        질문 {step + 1}
      </div>
      <div className='flex flex-col gap-10 md:gap-12 mt-10 md:mt-8'>
        <button className={buttonClass}>질문 내용1</button>
        <button className={buttonClass}>질문 내용2</button>
        <button className={buttonClass}>질문 내용3</button>
        <button className={buttonClass}>질문 내용4</button>
      </div>
      <div className='text-sm md:text-lg px-5 mt-[120px] md:mt-[140px]'>
        {homeText.copyrightNotice.map((line, index) => (
          <div key={index}>{line}</div>
        ))}
      </div>
    </div>
  );
}
