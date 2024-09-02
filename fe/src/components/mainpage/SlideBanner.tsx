import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const SlideBanner: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      id: 1,
      image: '/images/blue.svg',
      title: '전문가와 함께 꼼꼼 비교하세요',
      subtitle: '반려동물을 위한 최고의 선택,',
      buttonText: '나에게 딱 맞는 펫보험 찾아보기',
      textColor: 'text-white',
      link: '/compare',
    },
    {
      id: 2,
      image: '/images/skyblue.svg',
      title: '펫보험 들기 전에 꼼꼼히 알아보자',
      subtitle: '우리 아이 치아 스케일링도 보장될까?',
      buttonText: '오늘의 펫보험 지식 UP!',
      textColor: 'text-textColor',
      link: '/compare',
    },
    {
      id: 3,
      image: '/images/yellow.svg',
      title: '펫보험 가입하고',
      title2: '풍성한 혜택 누리세요!',
      textColor: 'text-white',
      link: '#',
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000); // 4000ms = 4초
    return () => clearInterval(interval); // 컴포넌트가 언마운트될 때 인터벌 클리어
  }, [currentSlide]);

  return (
    <div className="relative w-full overflow-hidden mt-0 mb-0 font-pretendard">
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="w-full h-[60vh] md:h-[50vh] lg:h-[40vh] relative">
            <Image src={slide.image} alt={slide.title} layout="fill" objectFit="cover" />
            <div className="absolute inset-0 flex flex-col items-start justify-center px-8">
              <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold ${slide.textColor}`}>
                {slide.title}
              </h2>
              {slide.subtitle && (
                <p className={`mt-4 text-2xl md:text-3xl lg:text-4xl ${slide.textColor}`}>
                  {slide.subtitle}
                </p>
              )}
              <a
                href={slide.link}
                className={`mt-8 inline-block px-6 py-3 rounded-lg text-xl font-semibold ${
                  slide.textColor === 'text-white'
                    ? 'bg-white text-blue-500'
                    : 'bg-blue-500 text-white'
                }`}
              >
                {slide.buttonText}
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* 왼쪽 화살표 버튼 */}
      <button
        className="absolute left-8 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer focus:outline-none"
        onClick={prevSlide}
        aria-label="Previous Slide"
      >
        <Image
          src="/images/arrow.svg"
          alt="Previous"
          width={50}
          height={50}
        />
      </button>

      {/* 오른쪽 화살표 버튼 */}
      <button
        className="absolute right-8 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer focus:outline-none"
        onClick={nextSlide}
        aria-label="Next Slide"
      >
        <Image
          src="/images/arrow.svg"
          alt="Next"
          width={50}
          height={50}
          style={{ transform: 'rotate(180deg)' }} 
        />
      </button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 bg-gray-300 rounded-full cursor-pointer ${
              currentSlide === index ? 'bg-gray-700' : ''
            }`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default SlideBanner;
