import Image from 'next/image';
import { FC } from 'react';

interface ReviewimageProps {
  src?: string;
  alt?: string;
}

const Reviewimage: FC<ReviewimageProps> = ({ src = '/images/review.svg', alt = 'Review Image' }) => {
  return (
    <div className="relative flex justify-center w-full h-auto font-pretendard">
      <div className="relative w-full h-auto max-w-full">
        <Image 
          src={src} 
          alt={alt} 
          layout="responsive" 
          width={100} 
          height={100} 
          objectFit="contain" 
        />
        {/* 텍스트 오버레이 */}
        <div 
          className="absolute left-0 right-0 flex flex-col items-center"
          style={{ top: '12rem', transform: 'translateY(50%)' }} // '12rem'로 크기 설정
        >
          {/* 텍스트 스타일 조정 */}
          <b className="w-full max-w-3xl text-[36px] leading-tight text-white text-center"> {/* max-w-xl에서 max-w-3xl로 변경 */}
            <p className="m-0 mb-2.5">수많은 유저가 말하는</p> {/* mb-2.5 추가 */}
            <p className="m-0 mb-2.5">스마트커버 인슈어런스의 찐후기 ✨</p> {/* mb-2.5 추가 */}
          </b>
        </div>
      </div>
    </div>
  );
};

export default Reviewimage;
