import type { NextPage } from 'next';

const HelpSection: NextPage = () => {
  return (
    <div className="bg-[#F4F7FA] w-full py-[80px] sm:py-[120px] lg:py-[150px] px-[16px] sm:px-[24px] lg:px-[32px] font-pretendard">
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-[24px] lg:gap-[32px]">
        <div className="text-left mb-8 lg:mb-0 lg:w-1/2">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-6 lg:mb-12">이용에 어려움이 있으신가요?</h2>
          <p className="text-lg lg:text-xl text-gray-600 mt-4 lg:mt-8"> Lorem ipsum dolor sit amet consectetur. Velit porta</p>
          <p className="text-lg lg:text-xl text-gray-600 mt-4 lg:mt-8"> bibendum tellus euismod diam eu. Volutpat quis </p>
          <p className="text-lg lg:text-xl text-gray-600 mt-4 lg:mt-8">mauris enim turpis.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 justify-end mt-12 lg:mt-20">
          {["자주하는 질문", "고객문의", "보험용어설명"].map((text, idx) => (
            <button
              key={idx}
              className="w-[180px] sm:w-[200px] lg:w-[210px] h-[50px] sm:h-[60px] lg:h-[70px] relative rounded-lg bg-white flex flex-row items-center justify-center py-[16px] sm:py-[20px] lg:py-[20px] px-[20px] box-border text-left text-[18px] sm:text-[20px] lg:text-[24px] text-[#282828]"
              style={{ boxShadow: '0px 6px 24px rgba(0, 140, 255, 0.12)' }}
              onClick={() => {
                if (idx === 0) {
                  window.location.href = '/faq';
                } else if (idx === 1) {
                  window.location.href = '/faq';
                } else if (idx === 2) {
                  window.location.href = '/terms-explanation';
                }
              }}
            >
              <div className="relative leading-[24px] sm:leading-[26px] lg:leading-[28px] font-medium">{text}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HelpSection;
