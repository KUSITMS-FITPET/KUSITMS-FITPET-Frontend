import Image from 'next/image'
import { FC } from 'react'

const Reviewimage: FC<{ src?: string; alt?: string }> = function Reviewimage({
  src = '/images/review.svg',
  alt = 'Review Image',
}) {
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
        <div className="absolute top-70 left-0 w-full flex justify-center mt-6 lg:mt-8">
          <b className="text-center text-white text-[24px] lg:text-[30px] leading-tight">
            <p className="m-0 mb-2.5">수많은 유저가 말하는</p>
            <p className="m-0 mb-2.5">스마트커버 인슈어런스의 찐후기 ✨</p>
          </b>
        </div>
      </div>
    </div>
  )
}

export default Reviewimage
