import React, { useState, useEffect } from 'react'; 
import type { ComponentType } from 'react';
import dynamic from 'next/dynamic';
import { fetchConsultationCount } from '../../pages/api/ConsultationCount';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';

const Slider = dynamic(() => import('react-slick').then(mod => mod.default) as Promise<ComponentType<any>>, { ssr: false });

const CustomPrevArrow = (props: any) => (
  <div
    {...props}
    className="absolute left-8 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer"
  >
    <Image
      src="/images/arrow.svg"
      alt="Previous"
      width={50}
      height={50}
    />
  </div>
);

const CustomNextArrow = (props: any) => (
  <div
    {...props}
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
);

const SlideBanner: React.FC = () => {
  const [consultationCount, setConsultationCount] = useState<number>(0);

  useEffect(() => {
    const loadConsultationCount = async () => {
      try {
        const count = await fetchConsultationCount();
        setConsultationCount(count); 
      } catch (error) {
        console.error("Failed to fetch consultation count", error);
      }
    };

    loadConsultationCount();
  }, []);

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
  };

  const slides = [
    {
      id: 1,
      image: '/images/blue.svg',
      title: '전문가와 함께 꼼꼼 비교하세요',
      subtitle: '반려동물을 위한 최고의 선택,',
      buttonText: '나에게 딱 맞는 펫보험 찾아보기',
      textColor: 'text-white',
      link: '/compare',
      titleStyle: 'absolute top-[20%] left-[10%] text-4xl md:text-5xl lg:text-6xl leading-loose',
      subtitleStyle: 'absolute top-[30%] left-[10%] text-3xl md:text-4xl lg:text-5xl leading-loose',
      buttonStyle: 'absolute bottom-[30%] left-[10%]',
      infoTextStyle: 'absolute bottom-[20%] left-[10%] text-xl md:text-2xl',
    },
    {
      id: 2,
      image: '/images/skyblue.svg',
      title: '펫보험 들기 전에 꼼꼼히 알아보자',
      subtitle: '우리 아이 치아 스케일링도 보장될까?',
      buttonText: '오늘의 펫보험 지식 UP!',
      textColor: 'text-textColor',
      link: '/compare',
      titleStyle: 'absolute top-[20%] left-[10%] text-4xl md:text-5xl lg:text-6xl leading-loose',
      subtitleStyle: 'absolute top-[30%] left-[10%] text-3xl md:text-4xl lg:text-5xl leading-loose',
      buttonStyle: 'absolute bottom-[35%] left-[10%]',
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
      titleStyle: 'absolute top-[40%] right-[8%] text-5xl md:text-6xl lg:text-7xl leading-loose',
      title2Style: 'absolute top-[50%] right-[8%] text-5xl md:text-6xl lg:text-7xl leading-loose',
      subtitle: '핏펫몰 상품 이미지 + 네이버페이 상품권',
      subtitleStyle: 'absolute top-[75%] left-[20%] text-base md:text-lg lg:text-3xl leading-loose',
    },
  ];

  return (
    <div className="relative w-full overflow-hidden mt-0 mb-0 font-pretendard">
      <Slider {...settings} className="w-full">
        {slides.map((slide) => (
          <div 
            key={slide.id} 
            className="relative w-full h-[60vh] md:h-[50vh] lg:h-[40vh] flex items-center justify-center"  // 높이 조정
          >
            <div className="absolute inset-0 w-full h-full">
              <Image 
                src={slide.image} 
                alt={slide.title} 
                layout="fill"
                objectFit="cover"
                priority
              />
            </div>

            <div className="relative w-full h-full flex flex-col items-center justify-center p-4 md:p-8 lg:p-12">
              <div className={`${slide.titleStyle} z-10`}>
                <p className={`font-bold leading-loose mb-4 ${slide.textColor}`}>
                  {slide.title}
                </p>
              </div>

              {slide.title2 && (
                <div className={`${slide.title2Style} z-10`}>
                  <p className={`font-bold leading-loose mb-4 ${slide.textColor}`}>
                    {slide.title2}
                  </p>
                </div>
              )}

              {(slide.subtitle || slide.subtitleStyle) && (
                <div className={`${slide.subtitleStyle} z-10`}>
                  <h2 className={`font-normal leading-loose ${slide.textColor}`}>
                    {slide.subtitle}
                  </h2>
                </div>
              )}

              {slide.buttonText && (
                <Link href={slide.link} passHref>
                  <span 
                    className={`
                      ${slide.buttonStyle} 
                      inline-flex items-center justify-center 
                      rounded-lg 
                      ${slide.buttonBackground || 'bg-white'} 
                      ${slide.buttonTextColor || 'text-[#008cff]'}
                      w-[440px] h-[90px] px-14 text-2xl font-semibold 
                      transition-colors cursor-pointer custom-button
                    `}
                  >
                    {slide.buttonText}
                    <FaArrowRight className="ml-10 text-3xl" />
                  </span>
                </Link>
              )}

              {slide.id === 1 && (
                <div className={`${slide.infoTextStyle} text-white flex items-center`}>
                  <Image 
                    src="/images/check_circle.png" 
                    alt="Check Circle" 
                    width={28} 
                    height={28} 
                    className="mr-2"
                  />
                  지금까지 <b>{consultationCount}</b>명이 SC를 통해 딱 맞는 펫보험을 찾았어요!
                </div>
              )}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SlideBanner;
