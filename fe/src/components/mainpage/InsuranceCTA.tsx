import { NextPage } from 'next'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { useRouter } from 'next/router'
import { increasePhoneCount } from '@/api/consultationCount'

const InsuranceCTA: NextPage = function InsuranceCTA() {
  const router = useRouter()

  const handleComparisonClick = () => {
    router.push('/quote')
  }

  const handleConsultationClick = async () => {
    const confirmCall = window.confirm('연결하시겠습니까?')
    if (confirmCall) {
      try {
        await increasePhoneCount()
        console.log('Phone count increased successfully.')
        window.location.href = 'tel:01057461800'
      } catch (error) {
        console.error('Failed to increase phone count:', error)
      }
    }
  }

  return (
    <div
      className="relative w-full overflow-hidden text-center text-lg text-main-color font-pretendard mx-auto bg-white" // 배경색을 흰색으로 변경
      style={{
        width: '100vw', 
        height: '200vh',
      }}
    >
      {/* Content section */}
      <div className="absolute top-240 left-4 lg:left-[152px] flex flex-col items-start gap-20">
        {/* Hashtags with rounded borders */}
        <div className="flex gap-10 lg:gap-14">
          {['#편리한', '#딱 맞는', '#전문가'].map((tag) => (
            <div
              key={tag}
              className="rounded-full border-main-color border-[1px] flex items-center justify-center py-4 sm:py-4 px-8 lg:px-15 bg-white" 
            >
              <div className="leading-[20px] sm:leading-[24px] lg:leading-[28px] font-medium">
                {tag}
              </div>
            </div>
          ))}
        </div>

        {/* Main Text */}
        <div className="w-full sm:w-[500px] lg:w-[600px] text-left text-[24px] sm:text-[28px] lg:text-[36px] text-gray-200">
          <b className="leading-[130%] sm:leading-[140%] lg:leading-[150%]">
            <p className="m-0">
              <span className="text-gray-100">간편하게</span>
              <span>{` 펫보험 견적서 `}</span>
              <span className="text-gray-100">비교하고</span>
            </p>
            <p className="m-0">
              <span>보험 전문가</span>
              <span className="text-gray-100">와 함께</span>
            </p>
            <p className="m-0">
              <span>{`맞춤 상담 `}</span>
              <span className="text-gray-100">받아보세요!</span>
            </p>
          </b>
        </div>

        {/* Buttons */}
        <div className="flex gap-6 sm:gap-8 lg:gap-20 text-left text-lg sm:text-xl lg:text-2xl mt-[16px] sm:mt-[24px] lg:mt-[36px]">
          <button
            type="button"
            className="w-[192px] sm:w-[240px] lg:w-[316px] h-[50px] sm:h-[60px] lg:h-[70px] rounded-lg bg-main-color flex items-center justify-center"
            onClick={handleComparisonClick}
          >
            <div className="flex items-center gap-4 text-white">
              <span className="leading-[22px] sm:leading-[24px] lg:leading-[26px] font-medium">
                비교 견적서 받기
              </span>
              <FaArrowRight className="ml-2 sm:ml-4 lg:ml-10 text-lg sm:text-xl lg:text-2xl" />
            </div>
          </button>
          <button
            type="button"
            className="w-[192px] sm:w-[240px] lg:w-[316px] h-[50px] sm:h-[60px] lg:h-[70px] rounded-lg bg-white border-main-color border-[1px] flex items-center justify-center"
            onClick={handleConsultationClick}
          >
            <div className="flex items-center gap-4 text-main-color">
              <span className="leading-[22px] sm:leading-[24px] lg:leading-[26px] font-medium">
                전문가 전화 상담받기
              </span>
              <FaArrowRight className="ml-2 sm:ml-4 lg:ml-10 text-lg sm:text-xl lg:text-2xl" />
            </div>
          </button>
        </div>
      </div>

      {/* Background Image on the Right */}
      <div className="absolute top-0 right-0 h-full w-1/2"> {/* 오른쪽에 이미지 고정 */}
        <img 
          src="/images/reviewgroup.svg" 
          alt="Review Group" 
          className="h-full w-full object-cover" 
        />
      </div>
    </div>
  )
}

export default InsuranceCTA
