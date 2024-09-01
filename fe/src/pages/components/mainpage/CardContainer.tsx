import React from 'react';

const CardContainer: React.FC = () => {
  return (
    <div className="bg-background-color-3 w-full h-auto overflow-hidden relative mx-auto pt-[60px] sm:pt-[90px] lg:pt-[120px] pb-[60px] sm:pb-[90px] lg:pb-[120px] px-[30px] sm:px-[60px] lg:px-[120px] font-pretendard">
      {/* Text Section */}
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

      {/* Cards Section */}
      <div className="flex flex-wrap justify-center items-center gap-[20px] sm:gap-[40px] lg:gap-[56px]">
        {Array(4).fill(0).map((_, idx) => (
          <div 
            key={idx} 
            className="relative shadow-[0px_6px_24px_rgba(0,_140,_255,_0.12)] w-[160px] sm:w-[200px] lg:w-[282px] h-[240px] sm:h-[300px] lg:h-[372px] flex flex-col items-center"
          >
            <div className="absolute h-full w-full top-0 right-0 bottom-0 left-0 rounded-lg bg-white flex flex-col justify-center items-center p-4">
              <div className="h-[30%] sm:h-[40%] w-[40%] sm:w-[54%] mb-4 sm:mb-6 rounded-full bg-background-color-3"></div>
              <div className="text-center">
                <div className="font-semibold text-[16px] sm:text-[18px] lg:text-[23px] leading-[160%] text-[#282828]">
                  Lorem ipsum
                </div>
                <div className="text-sm sm:text-lg leading-[160%] font-light text-dimgray mt-2">
                  <p className="m-0">{`Lorem ipsum dolor sit `}</p>
                  <p className="m-0">{`amet consectetur. Sed `}</p>
                  <p className="m-0">{`etiam massa lorem `}</p>
                  <p className="m-0">commodo orci.</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        .bg-background-color-3 {
          background-color: #F4F7FA;
        }
        .text-gray {
          color: #282828;
        }
        .text-dodgerblue {
          color: #008cff;
        }
        .text-dimgray {
          color: #5A5A5A;
        }
      `}</style>
    </div>
  );
};

export default CardContainer;
