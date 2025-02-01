import React from 'react'
import Image from 'next/image'
import { increasePhoneCount } from '@/api/consultationCount'
import { cn } from '@/util'

export default function Floating({ className }: { className?: string }) {
  const handleCallClick = async () => {
    const confirmCall = window.confirm('연결하시겠습니까?')
    if (confirmCall) {
      try {
        await increasePhoneCount()
        window.location.href = 'tel:01057461800'
      } catch (error) {
        throw new Error(`Failed to increase phone count: ${error}`)
      }
    }
  }

  const handleChatClick = () => {
    window.location.href = 'https://pf.kakao.com/_cxdAfG/chat'
  }

  return (
    <div
      className={cn(
        'fixed top-[90px] right-[16px] lg:top-[130px] lg:right-[50px] shadow-[0px_6px_20px_rgba(0,_0,_0,_0.2)] rounded-lg bg-white w-[72px] h-[164px] lg:w-[100px] lg:h-[260px] overflow-hidden text-center text-sm text-darkslategray font-pretendard z-50',
        className,
      )}
      role="region"
      aria-label="Floating contact options"
    >
      <div
        onClick={handleCallClick}
        onKeyPress={(e) => {
          if (e.key === 'Enter' || e.key === ' ') handleCallClick()
        }}
        tabIndex={0}
        role="button"
        className="cursor-pointer flex flex-col items-center justify-center h-[50%] py-[6px] lg:py-[8px]"
      >
        <div className="w-[38px] h-[38px] lg:w-[48px] lg:h-[48px] relative mb-[8px] lg:mb-[12px]">
          <Image
            className="absolute inset-0 w-full h-full object-contain"
            alt="전문가 전화 상담"
            src="/images/call.svg"
            width={48}
            height={48}
          />
        </div>
        <div className="text-gray-800 font-semibold">
          <p className="m-0 text-xs lg:text-sm">전문가</p>
          <p className="m-0 text-xs lg:text-sm">전화 상담</p>
        </div>
      </div>

      <div className="w-full h-[1px] lg:h-[2px]">
        <Image
          src="/images/vector.svg"
          alt="구분선"
          className="w-full h-full"
          width={100}
          height={2}
        />
      </div>

      <div
        onClick={handleChatClick}
        onKeyPress={(e) => {
          if (e.key === 'Enter' || e.key === ' ') handleChatClick()
        }}
        tabIndex={0}
        role="button"
        className="cursor-pointer flex flex-col items-center justify-center h-[50%] py-[6px] lg:py-[8px]"
      >
        <div className="w-[38px] h-[38px] lg:w-[48px] lg:h-[48px] relative mb-[8px] lg:mb-[12px]">
          <Image
            className="absolute inset-0 w-full h-full object-contain"
            alt="톡문의"
            src="/images/kakao.svg"
            width={48}
            height={48}
          />
        </div>
        <div className="text-gray-800 font-semibold text-xs lg:text-sm">
          톡문의
        </div>
      </div>
    </div>
  )
}
