import React from 'react'
import Image from 'next/image'

function BannerImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="w-screen h-60 md:h-80 lg:h-300 bg-[#008CFF]">
      <div className="relative w-full h-full">
        <Image src={src} alt={alt} fill style={{ objectFit: 'cover' }} />
        <div className="absolute inset-0 flex flex-col justify-center text-white font-normal px-120">
          <p className="text-2xl font-regular">
            스마트커버 인슈어런스 고객의 생생한 리뷰
          </p>
          <p className="text-4xl font-semibold">
            펫보헌 선택 고민, 스마트커버 인슈어런스에서 해결!
          </p>
        </div>
      </div>
    </div>
  )
}

export default BannerImage
