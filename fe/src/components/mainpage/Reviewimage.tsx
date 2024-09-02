import Image from 'next/image';
import { FC } from 'react';

interface ReviewImageProps {
  src?: string;
  alt?: string;
}

const ReviewImage: FC<ReviewImageProps> = ({ src = '/images/review.svg', alt = 'Review Image' }) => {
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
        <div 
          className="absolute left-0 right-0 flex flex-col items-center"
          style={{ top: '12rem', transform: 'translateY(50%)' }}
        >
          <b className="w-full max-w-3xl text-[36px] leading-tight text-white text-center">
            <p className="m-0 mb-2.5">수많은 유저가 말하는</p>
            <p className="m-0 mb-2.5">스마트커버 인슈어런스의 찐후기 ✨</p>
          </b>
        </div>
      </div>
    </div>
  );
};

export default ReviewImage;
