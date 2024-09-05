import React, { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import Image from 'next/image'
import { FaArrowRight } from 'react-icons/fa'
import {
  fetchConsultationCount,
  increasePhoneCount,
} from '@/api/consultationCount'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

// 슬라이더 컴포넌트를 서버 사이드 렌더링에서 제외하고, 로딩 메시지를 추가
const Slider = dynamic(() => import('react-slick'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
})

interface ArrowProps {
  onClick?: () => void
}

function CustomPrevArrow({ onClick }: ArrowProps) {
  return (
    <div
      onClick={onClick}
      onKeyPress={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onClick?.()
        }
      }}
      role="button"
      tabIndex={0}
      className="absolute left-8 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer"
    >
      <Image src="/images/arrow.svg" alt="Previous" width={50} height={50} />
    </div>
  )
}

function CustomNextArrow({ onClick }: ArrowProps) {
  return (
    <div
      onClick={onClick}
      onKeyPress={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onClick?.()
        }
      }}
      role="button"
      tabIndex={0}
      className="absolute right-8 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer"
    >
      <Image
        src="/images/arrow.svg"
        alt="Next"
        width={50}
        height={50}
        style={{ transform: 'rotate(180deg)' }}
      />
    </div>
  )
}

interface Slide {
  id: number
  image: string
  title: string
  subtitle?: string
  buttonText?: string
  textColor: string
  link: string
  titleStyle: string
  subtitleStyle?: string
  buttonStyle?: string
  infoTextStyle?: string
  title2?: string
  title2Style?: string
  buttonBackground?: string
  buttonTextColor?: string
}

function SlideBanner() {
  const [consultationCount, setConsultationCount] = useState<number>(0)

  // 상담 수를 불러오는 함수
  const loadConsultationCount = async () => {
    try {
      const response = await fetchConsultationCount()
      setConsultationCount(response.result) // API로부터 받은 상담 건수 설정
    } catch (error) {
      if (process.env.NODE_ENV === 'development') {
        console.error('Failed to fetch consultation count', error)
      }
    }
  }

  // 컴포넌트가 마운트될 때 상담 수를 불러옴
  useEffect(() => {
    loadConsultationCount()
  }, [])

  // 전화 문의 카운트를 증가시키는 함수
  const handlePhoneCountIncrease = async () => {
    try {
      await increasePhoneCount()
      // 전화 문의 카운트 증가 후 상담 수 새로고침
      await loadConsultationCount()
    } catch (error) {
      console.error('Failed to increase phone count', error)
    }
  }

  // 슬라이더 설정
  const settings = {
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: 'linear',
    arrows: true,
    dots: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  }

  const slides: Slide[] = [
    {
      id: 1,
      image: '/images/blue.svg',
      title: '반려동물을 위한 최고의 선택,',
      subtitle: '전문가와 함께 꼼꼼 비교하세요',
      buttonText: '나에게 딱 맞는 펫보험 찾아보기',
      textColor: 'text-white',
      link: '/quote',
      titleStyle:
        'absolute top-[20%] left-[10%] text-[32px] font-normal font-["Pretendard"] mb-4',
      subtitleStyle:
        'absolute top-[calc(20%+55px)] left-[10%] text-5xl font-bold font-["Pretendard"] leading-[68px] mb-6',
      buttonStyle:
        'absolute bottom-[20%] left-[10%] w-[300px] h-[60px] text-lg',
      infoTextStyle: 'absolute bottom-[15%] left-[10%] text-lg',
    },
    {
      id: 2,
      image: '/images/skyblue.svg',
      title: '반려동물을 위한 최고의 선택,',
      subtitle: '전문가와 함께 꼼꼼 비교하세요',
      buttonText: '오늘의 펫보험 지식 UP!',
      textColor: 'text-white',
      link: '/news',
      titleStyle:
        'absolute top-[20%] left-[10%] text-[32px] font-normal font-["Pretendard"] mb-4',
      subtitleStyle:
        'absolute top-[calc(20%+55px)] left-[10%] text-5xl font-bold font-["Pretendard"] leading-[68px] mb-6',
      buttonStyle:
        'absolute bottom-[20%] left-[10%] w-[300px] h-[60px] text-lg',
      buttonBackground: 'bg-black',
      buttonTextColor: 'text-white',
    },
    {
      id: 3,
      image: '/images/yellow.svg',
      title: '펫보험 가입하고',
      title2: '풍성한 혜택 누리세요!',
      textColor: 'text-white',
      link: '#',
      titleStyle:
        'absolute top-[40%] right-[12%] text-5xl font-bold font-["Pretendard"] leading-[72px] mb-6',
      title2Style:
        'absolute top-[calc(40%+72px)] right-[12%] text-5xl font-bold font-["Pretendard"] leading-[72px] mb-6',
    },
  ]

  return (
    <div className="relative w-full overflow-hidden mt-0 font-pretendard">
      <Slider {...settings} className="w-full">
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="relative w-full h-[85vh] md:h-[75vh] lg:h-[65vh] flex items-center justify-center"
          >
            <div className="absolute inset-0 w-full h-full">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>

            <div className="relative w-full h-full flex flex-col items-start justify-center p-4 md:p-8 lg:p-12">
              <div className={`${slide.titleStyle} z-10`}>
                <p className={`leading-loose ${slide.textColor}`}>
                  {slide.title}
                </p>
              </div>

              {slide.title2 && (
                <div className={`${slide.title2Style} z-10`}>
                  <p className={`leading-loose ${slide.textColor}`}>
                    {slide.title2}
                  </p>
                </div>
              )}

              {slide.subtitle && (
                <div className={`${slide.subtitleStyle} z-10`}>
                  <p className={`leading-loose ${slide.textColor}`}>
                    {slide.subtitle}
                  </p>
                </div>
              )}

              {slide.buttonText && (
                <Link href={slide.link}>
                  <button
                    type="button" // 명시적인 타입 추가
                    onClick={handlePhoneCountIncrease}
                    className={`
                      ${slide.buttonStyle} 
                      inline-flex items-center justify-center 
                      rounded-lg 
                      ${slide.buttonBackground || 'bg-white'} 
                      ${slide.buttonTextColor || 'text-[#008cff]'}
                      transition-colors cursor-pointer custom-button
                    `}
                  >
                    {slide.buttonText}
                    <FaArrowRight className="ml-4 lg:ml-6 text-lg lg:text-2xl" />
                  </button>
                </Link>
              )}

              {slide.id === 1 && (
                <div
                  className={`${slide.infoTextStyle} text-white flex items-center space-x-2`}
                >
                  <Image
                    src="/images/check_circle.png"
                    alt="Check Circle"
                    width={28}
                    height={28}
                    className="mr-2"
                  />
                  <span>지금까지 </span>
                  <b>{consultationCount}</b>
                  <span> 명이 SC를 통해 딱 맞는 펫보험을 찾았어요!</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default SlideBanner
