import React from 'react';
import Image from 'next/image';

interface BannerImageProps {
  src: string;
  alt: string;
}

const BannerImage: React.FC<BannerImageProps> = ({ src, alt }) => {
  return (
    <div className="w-screen h-60 md:h-80 lg:h-240 bg-[#008CFF]">
      <div className="relative w-full h-full">
        <Image 
          src={src} 
          alt={alt} 
          layout="fill" 
          objectFit="cover" 
          priority 
        />
      </div>
    </div>
  );
};

export default BannerImage;
