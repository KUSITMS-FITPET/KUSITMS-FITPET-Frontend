import React from 'react'
import Image from 'next/image'

function BannerImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="w-screen h-60 md:h-80 lg:h-300 bg-[#008CFF]">
      <div className="relative w-full h-full">
        <Image src={src} alt={alt} fill style={{ objectFit: 'cover' }} />
        <div className="absolute inset-0 flex flex-col justify-center text-white font-normal px-4 md:px-8 lg:px-24 text-right">
          <p className="text-xl md:text-2xl lg:text-3xl font-regular">
            스마트커버 인슈어런스 고객의 생생한 리뷰로 펫보험 고민 해결
          </p>
          <p className="text-2xl md:text-3xl lg:text-4xl font-semibold">
            고객 리뷰
          </p>
        </div>
      </div>
    </div>
  )
}

export default BannerImage
