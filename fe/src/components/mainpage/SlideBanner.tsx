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

  const loadConsultationCount = async () => {
    try {
      const response = await fetchConsultationCount()
      setConsultationCount(response.result)
    } catch (error) {
      // 에러 핸들링
      throw new Error(`Failed to fetch consultation count: ${error}`)
    }
  }

  useEffect(() => {
    loadConsultationCount()
  }, [])

  const handlePhoneCountIncrease = async () => {
    try {
      await increasePhoneCount()
      await loadConsultationCount()
    } catch (error) {
      // 에러 핸들링
      throw new Error(`Failed to increase phone count: ${error}`)
    }
  }

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
      title: '우리 아이 건강, 걱정 없이 오래오래',
      subtitle: '전문가와 딱 맞는 펫보험 찾아보세요.',
      buttonText: '나에게 딱 맞는 펫보험 찾아보기',
      textColor: 'text-white',
      link: '/quote',
      titleStyle:
        'absolute top-[20%] left-[10%] text-[32px] font-normal font-["Pretendard"] mb-4',
      subtitleStyle:
        'absolute top-[calc(20%+60px)] left-[10%] text-5xl font-bold font-["Pretendard"] leading-[68px] mb-6',
      buttonStyle:
        'absolute bottom-[23%] left-[10%] w-[300px] h-[60px] text-lg',
      infoTextStyle: 'absolute bottom-[15%] left-[10%] text-lg',
    },
    {
      id: 2,
      image: '/images/skyblue.svg',
      title: '펫보험 들기 전에 꼼꼼히 알아보자',
      subtitle: '우리 아이 치아 스케일링도 보장 될까?',
      buttonText: '오늘의 펫보험 지식 UP!',
      textColor: 'text-black',
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
            className="relative w-full h-[100vh] md:h-[85vh] lg:h-[75vh] flex items-center justify-center"
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
                    type="button"
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
                  <span>지금까지</span>
                  <b>&nbsp;{consultationCount}</b>
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
