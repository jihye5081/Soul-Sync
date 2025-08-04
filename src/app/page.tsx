import { BsArrowRight } from 'react-icons/bs';
import Link from 'next/link';

export default function Home() {
  return (
    <div className='text-primary w-full min-h-screen flex flex-col justify-center items-center'>
      <div className='flex flex-col justify-center items-center text-left px-5 w-[300px] md:w-full'>
        <div className='text-left'>
          <h1 lang='en' className='text-4xl md:text-5xl'>
            Soul Sync : <br /> K-pop Demon Hunters
          </h1>
          <div className='flex items-center gap-3 mt-8 md:mt-6'>
            <h2 className='text-xl md:text-2xl'>나와 맞는 케데헌 캐릭터는?</h2>
            <Link href='/question'>
              <BsArrowRight className='w-8 h-8' />
            </Link>
          </div>
        </div>
      </div>
      <p className='text-sm md:text-lg px-5 mt-[160px] md:mt-[180px]'>
        “K-pop Demon Hunters”는 소니 픽처스 애니메이션에서 제작한 미국의
        넷플릭스 오리지널 애니메이션 영화 입니다.
        <br /> “Soul Sync : K-pop Demon Hunters”는 2차 창작물로 K-pop Demon
        Hunters의 저작권은
        <br /> 제작사: Sony Pictures Animation (애니메이션 제작 및 저작권 보유)
        <br /> 배급사 & 플랫폼: Netflix (전 세계 스트리밍 권리 소유)
        <br /> 임을 알려드립니다.
        <br /> 저희 팀은 공식 매체를 통한 정당한 소비를 적극 권장합니다.
      </p>
    </div>
  );
}
