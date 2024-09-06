import React from 'react'

function CardContainer() {
  const cardData = [
    {
      title: '맞춤 견적서',
      content:
        '내 반려동물에게<br />꼭 필요한 맞춤 보험<br />견적서를 제공해드려요.',
      image: '/images/book.svg', // 첫 번째 카드 이미지
    },
    {
      title: 'Lorem ipsum 2',
      content:
        '카카오톡을 통해<br />반려동물 보험 전문가와<br />실시간으로 상담할 수 있어요.',
      image: '/images/call-calling.svg', // 두 번째 카드 이미지
    },
    {
      title: '주요 펫보험 제휴',
      content:
        'SC에서는 주요 5개<br />보험사의 펫보험 상품을<br />한 눈에 비교할 수 있어요.',
      image: '/images/lovely.svg', // 세 번째 카드 이미지
    },
    {
      title: 'Lorem ipsum 4',
      content:
        '반려동물 헬스케어 1위로서,<br />깊은 이해와 애정으로<br />신뢰있는 보험 서비스를 제공해요.',
      image: '/images/unlimited.svg', // 네 번째 카드 이미지
    },
  ]

  return (
    <div className="bg-background-color-3 w-full h-auto overflow-hidden relative mx-auto pt-[60px] sm:pt-[90px] lg:pt-[120px] pb-[60px] sm:pb-[90px] lg:pb-[120px] px-[30px] sm:px-[60px] lg:px-[120px] font-pretendard">
      <div className="flex justify-center mb-[40px] sm:mb-[56px]">
        <b className="w-full sm:w-auto lg:w-[670px] text-[20px] sm:text-[24px] lg:text-[36px] leading-[160%] inline-block text-center text-gray">
          <p className="m-0">스마트커버 인슈어런스에서</p>
          <p className="m-0">
            <span>{`여러분에게 `}</span>
            <span className="text-dodgerblue">딱 맞는 보험</span>
            <span className="text-gray">을 찾아드릴게요</span>
          </p>
        </b>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-[20px] sm:gap-[40px] lg:gap-[56px]">
        {cardData.map((card) => (
          <div
            key={card.title}
            className="relative shadow-[0px_6px_24px_rgba(0,_140,_255,_0.12)] w-[160px] sm:w-[200px] lg:w-[282px] h-[240px] sm:h-[300px] lg:h-[372px] flex flex-col items-center"
          >
            <div className="absolute h-full w-full top-0 right-0 bottom-0 left-0 rounded-lg bg-white flex flex-col justify-center items-center p-4">
              <div className="h-[30%] sm:h-[40%] w-[40%] sm:w-[54%] mb-4 sm:mb-6">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-center">
                <div className="font-semibold text-[16px] sm:text-[18px] lg:text-[23px] leading-[160%] text-[#282828]">
                  {card.title}
                </div>
                <div className="text-sm sm:text-lg leading-[160%] font-light text-dimgray mt-2">
                  {/* Render the content with line breaks */}
                  <p
                    className="m-0"
                    dangerouslySetInnerHTML={{ __html: card.content }}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        .bg-background-color-3 {
          background-color: #f4f7fa;
        }
        .text-gray {
          color: #282828;
        }
        .text-dodgerblue {
          color: #008cff;
        }
        .text-dimgray {
          color: #5a5a5a;
        }
      `}</style>
    </div>
  )
}

export default CardContainer
