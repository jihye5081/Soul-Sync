import Link from 'next/link';
import { BsArrowRight } from 'react-icons/bs';
import { homeText } from '@/lib/homeText';

export default function Home() {
  return (
    <div className='text-primary w-full min-h-screen flex flex-col justify-center items-center'>
      <div className='flex flex-col justify-center items-center text-left px-5 w-[300px] md:w-full'>
        <div className='text-left'>
          <div lang='en' className='text-4xl md:text-5xl'>
            {homeText.title.map((line, index) => (
              <div key={index}>{line}</div>
            ))}
          </div>
          <div className='flex items-center gap-3 mt-8 md:mt-6'>
            <h2 className='text-xl md:text-2xl'>{homeText.subTitle}</h2>
            <Link href='/question'>
              <BsArrowRight className='w-8 h-8' />
            </Link>
          </div>
        </div>
      </div>
      <div className='text-sm md:text-lg px-5 mt-[160px] md:mt-[180px]'>
        {homeText.copyrightNotice.map((line, index) => (
          <div key={index}>{line}</div>
        ))}
      </div>
    </div>
  );
}
