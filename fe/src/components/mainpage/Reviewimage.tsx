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
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 translate-y-0 text-center mt-150">
          <b className="w-full max-w-3xl text-[30px] leading-tight text-white">
            <p className="m-0 mb-2.5">수많은 유저가 말하는</p>
            <p className="m-0 mb-2.5">스마트커버 인슈어런스의 찐후기 ✨</p>
          </b>
        </div>
      </div>
    </div>
  )
}

export default Reviewimage
